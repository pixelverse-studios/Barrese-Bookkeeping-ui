import Button from '@/components/button'
import ServiceData from './dummydata'
import { StyledServices } from './Services.styles'
const ServicesPage = () => {
    return (
        <StyledServices>
            <div className="broad-about">
                <h1>Titie</h1>
                <h2>Subtext</h2>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Optio doloribus quo explicabo soluta distinctio, odio
                    deserunt eius deleniti adipisci asperiores enim. Qui quam,
                    similique assumenda dignissimos corporis repellat
                    perspiciatis quod odio laboriosam officiis temporibus
                    dolores omnis debitis. Nihil itaque reiciendis voluptate
                    beatae nemo quaerat animi impedit. Natus dicta rem odit,
                    aliquid reprehenderit non nesciunt praesentium repellendus
                    exercitationem. Amet labore distinctio minus reiciendis
                    officia eius et laudantium. Voluptas iure officiis quidem
                    commodi minus dolor illo placeat.
                </p>
            </div>
            <div className="details-about">
                {ServiceData.map((item, index) => [
                    <div className="detail-section">
                        <img src={item.image} alt="icon" />
                        <div className="detail-info">
                            <h1>{item.title}</h1>
                            {item.subtext}
                            <ul>
                                {item.bulletPoints.map((item, index) => {
                                    return <li>{item}</li>
                                })}
                            </ul>
                            <Button label={item.buttonLabel} />
                        </div>
                    </div>
                ])}
            </div>
        </StyledServices>
    )
}

export default ServicesPage
