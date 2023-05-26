import heroImg from "../../../images/home/hero-img.png"
import { HeroBox, Container, Title, TextAbout, TextDelivery, InfoBlock, HeroImg, GoShopLink } from "./Hero.styled";



const Hero = () => {
    return ( 
        <HeroBox>
            <Container>
                
                <InfoBlock>
                    <Title>Yummy Food! <br/> Delivery for every day!</Title>
                    <TextAbout>A wide selection of dishes from the chef: breakfast, pasta, pizza, meat, poultry and fish, desserts. Order your favorite dishes without leaving your home.</TextAbout>
                    <TextDelivery>Delivery is fast and free!</TextDelivery>
                    <GoShopLink to="/shop">
                        Go shopping!
                    </GoShopLink>
                </InfoBlock>
                <HeroImg src={heroImg} alt="sandwich" />
            </Container>
        </HeroBox>
    );
}

export default Hero;