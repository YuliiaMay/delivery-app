import topBackground from "../../../images/backgrounds/top-bgn.png";
import Logo from "../Logo/Logo";
import { HeaderBox, Container, TopBackground, StyledLink } from "./Header.styled";

const Header = () => {
    return ( 
        <HeaderBox>
                <Container>
                    <Logo />

                    <nav>
                        <StyledLink to="/" >Home</StyledLink>
                        <StyledLink to="/shop" >Shop</StyledLink>
                        <StyledLink to="/cart">Cart</StyledLink>
                    </nav>
                </Container>
                <TopBackground src={topBackground} alt="background" />
        </HeaderBox>
    );
}

export default Header;