import HeroImage from '@/components/HeroHeader'
import Headshot from '../../../assets/images/Aj-Headshot.jpg'
import { StyledPageContainer } from '../PageContainer.styles'
import { StyledAbout } from './About.styles'

const AboutPage = () => {
    return (
        <StyledPageContainer>
            <HeroImage url="https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80" />
            <div className="container">
                <StyledAbout>
                    <h1>Meet the Man Behind the Books</h1>
                    <h2>Subheader</h2>
                    <hr />
                    <div className="about">
                        <div className="about-image-title">
                            <img src={Headshot.src} alt="" />
                            <h3>Alan Barrese</h3>
                            <h3>Founder & CEO</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Totam soluta laudantium fuga? Illum vel
                            tempore neque magni vero ex, excepturi voluptatem
                            est suscipit accusantium corrupti dolor ipsum.
                            Laborum illum et voluptate suscipit deleniti
                            explicabo sunt laboriosam, accusamus quidem atque
                            vitae voluptates beatae, voluptas architecto quis
                            at, delectus minus totam. Veritatis! Lorem ipsum
                            dolor, sit amet consectetur adipisicing elit. Totam
                            soluta laudantium fuga? Illum vel tempore neque
                            magni vero ex, excepturi voluptatem est suscipit
                            accusantium corrupti dolor ipsum. Laborum illum et
                            voluptate suscipit deleniti explicabo sunt
                            laboriosam, accusamus quidem atque vitae voluptates
                            beatae, voluptas architecto quis at, delectus minus
                            totam. Veritatis! Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Totam soluta
                            laudantium fuga? Illum vel tempore neque magni vero
                            ex, excepturi voluptatem est suscipit accusantium
                            corrupti dolor ipsum. Laborum illum et voluptate
                            suscipit deleniti explicabo sunt laboriosam,
                            accusamus quidem atque vitae voluptates beatae,
                            voluptas architecto quis at, delectus minus totam.
                            Veritatis!
                        </p>
                    </div>
                </StyledAbout>
            </div>
        </StyledPageContainer>
    )
}

export default AboutPage
