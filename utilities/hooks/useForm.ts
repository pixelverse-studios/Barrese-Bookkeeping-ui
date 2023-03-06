import { FormEvent, ChangeEventHandler, useReducer, useState } from 'react'
import { FormProps, RegisterProps } from '../types/formTypes'

const RESET = 'reset'
const UPDATE = 'update'
const IMPORT = 'import'
interface ActionState {
    type: string
    payload?: any
}
function reducer(state: FormProps, action: ActionState) {
    switch (action.type) {
        case UPDATE: {
            const { name, value, error } = action.payload
            return { ...state, [name]: { value, error } }
        }
        case IMPORT: {
            return { ...state, ...action.payload }
        }
        case RESET: {
            return action.payload
        }
        default:
            return state
    }
}

const useForm = (initialState: FormProps, validations: RegisterProps) => {
    const [form, dispatch] = useReducer(reducer, initialState)
    const [formLoading, setFormLoading] = useState<boolean>(false)

    const handleImport = (payload: any) => {
        type importDataTypes = {
            [key: string]: any
        }
        const formattedData: importDataTypes = {}
        for (const [key, value] of Object.entries(payload)) {
            formattedData[key] = { value, error: '' }
        }
        dispatch({ type: IMPORT, payload: formattedData })
    }

    const handleNonFormEventChange = (data: any, name: string) =>
        dispatch({ type: UPDATE, payload: { name, value: data, error: '' } })

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        let { value, name } = event.target
        const error = !validations[name]?.test(value.trim())
            ? validations[name]?.message
            : ''
        dispatch({
            type: UPDATE,
            payload: {
                name,
                value,
                error
            }
        })
    }

    const handleFormSubmit = (
        event: FormEvent<HTMLFormElement>,
        mutation: Function
    ) => {
        event.preventDefault()
        setFormLoading(true)
        mutation()
    }

    const handleReset = () => {
        dispatch({ type: RESET, payload: initialState })
    }

    const isFormValid = Object.keys(form).every(
        label => form[label].value && !form[label].error
    )

    return {
        form,
        handleChange,
        handleNonFormEventChange,
        handleReset,
        handleImport,
        isFormValid,
        formLoading,
        setFormLoading,
        handleFormSubmit
    }
}

export default useForm
