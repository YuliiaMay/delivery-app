import ProductItem from "../ProductItem/ProductItem";
import { Container, Menu, MenuGallery } from "./MenuList.styled";


const MenuList = ({menu}) => {
    return ( 
        <Menu>
            <Container>
                <MenuGallery>
                    {
                        menu.map(({name, price, weight, isMostOrdered, id, imgsrc, category}) =>
                            <ProductItem 
                                key={id}
                                name={name}
                                price={price}
                                img={imgsrc}
                                id={id}
                                isMostOrdered={isMostOrdered}
                                // weight={weight}
                                category={category}
                            />
                        )
                    }
                </MenuGallery>
            </Container>
        </Menu>

    );
}

export default MenuList;