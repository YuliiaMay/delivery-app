import { Link } from "react-router-dom";
import heroImg from "../../../images/home/hero-img.png"
import { HeroBox, Container } from "./Hero.styled";



const Hero = () => {
    return ( 
        <HeroBox>
            <Container>
                <div>
                    <h1>Yummy food delivery for every day.</h1>
                    <p>A wide selection of dishes from the chef: breakfast, pasta, pizza, meat, poultry and fish, desserts. Order your favorite dishes without leaving your home.</p>
                    <p>You will be shocked at the speed of delivery!</p>
                    <Link to="/shop">
                        Go shopping!
                    </Link>
                </div>
                <img src={heroImg} alt="sandwich" width={350}/>
            </Container>
        </HeroBox>
    );
}

export default Hero;