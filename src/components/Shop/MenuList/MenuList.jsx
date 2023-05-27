import menu from "../../../menu.json";
import ProductItem from "../ProductItem/ProductItem";
import { Container, Menu, MenuGallery } from "./MenuList.styled";


const MenuList = () => {
    return ( 
        <Menu>
            <Container>
                <MenuGallery>
                    {
                        menu.map(({name, price, quantity, isMostOrdered, id, imgsrc}) =>
                            <ProductItem 
                                key={id}
                                name={name}
                                price={price}
                                img={imgsrc}
                                id={id}
                                isMostOrdered={isMostOrdered}
                                quantity={quantity}
                            />
                        )
                    }
                </MenuGallery>
            </Container>
        </Menu>

    );
}

export default MenuList;