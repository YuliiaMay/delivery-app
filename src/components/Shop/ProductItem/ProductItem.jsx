import { Card, ProductImg, InfoBox, ProductName, Price, Button } from "./ProductItem.styled";



const ProductItem = ({ name, price, quantity, isMostOrdered, id, img }) => {
    return ( 
        <Card>
            <ProductImg src={img} alt="product photo" />
            <InfoBox>
                <ProductName>{name}</ProductName>
                <Price>{price} $</Price>
            </InfoBox>
            <Button>Order</Button>

        </Card>
    );
}

export default ProductItem;