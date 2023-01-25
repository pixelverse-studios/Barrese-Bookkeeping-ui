import Button from '@/components/button'
import { StyledAbout } from './About.styles'

const AboutPage = () => {
    return (
        <StyledAbout>
            <div className="about-company">
                <div>
                    <h1>About</h1>
                    <h2>Barrese Bookeeping</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Temporibus deleniti voluptate unde animi corporis
                        qui consequuntur numquam odio! Nostrum facere explicabo
                        ipsa laudantium earum exercitationem est blanditiis
                        consectetur deserunt? Vel.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Temporibus deleniti voluptate unde animi corporis
                        qui consequuntur numquam odio! Nostrum facere explicabo
                        ipsa laudantium earum exercitationem est blanditiis
                        consectetur deserunt? Vel.
                    </p>
                </div>
                <div>
                    <h2>Barrese Bookkeeping Services</h2>
                    <hr />
                    <div>
                        <span>123 1st Ave.</span>
                        <span>Dirty Jerz, NJ, 07420</span>
                        <br />
                        <span>201-911-8075</span>
                        <span>contact@yerr.com</span>
                    </div>
                    <Button label="Book A Consultation" />
                </div>
            </div>
            <div className="about-employee">
                <h1>Meet yerr boii</h1>
                <h2>Barrese Bookkeeping</h2>
                <hr />
                <img src="https://dummyimage.com/250x250/000/fff" alt="photo" />
                <h1>Ahadge Ribz BaaRizAye</h1>
                <h2>Head Honcho</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vero corporis recusandae earum doloribus optio harum at
                    perferendis illum adipisci! Minus placeat dolorem veniam
                    iusto sit id. Doloremque aliquam similique ea. Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Vero corporis
                    recusandae earum doloribus optio harum at perferendis illum
                    adipisci! Minus placeat dolorem veniam iusto sit id.
                    Doloremque aliquam similique ea.
                </p>
            </div>
        </StyledAbout>
    )
}

export default AboutPage
