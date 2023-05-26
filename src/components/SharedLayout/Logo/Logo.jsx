import logo from "../../../images/logo/logo-img.png";
import { LogoIcon } from "./Logo.styled";

const Logo = () => {
    return ( 
        <a href="/">
            <LogoIcon src={logo} alt="logo" />
        </a>
    );
}
 
export default Logo;