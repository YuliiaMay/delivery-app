import ProductItem from "../ProductItem/ProductItem";
import { Container, Menu, MenuGallery } from "./MenuList.styled";


const MenuList = ({ menu, onChange }) => {
    console.log();
    return ( 
        <Menu>
            <Container>
                <MenuGallery onChange={onChange}>
                    {
                        menu.map(({name, price, weight, isMostOrdered, id, imgsrc, category}) =>
                            <ProductItem 
                                key={id}
                                name={name}
                                price={price}
                                img={imgsrc}
                                id={id}
                                isMostOrdered={isMostOrdered}
                                weight={weight}
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