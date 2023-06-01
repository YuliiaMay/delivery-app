import { useState } from "react";
import { Card, ProductImg, InfoBox, ProductName, Price, Button, OrderBox, AmountInput } from "./ProductItem.styled";



const ProductItem = ({ name, price, quantity, isMostOrdered, id, img }) => {
    const [amount, setAmount] = useState(0);
    return ( 
        <Card>
            <ProductImg src={img} alt="product photo" />
            <InfoBox>
                <ProductName>{name}</ProductName>
                <Price>{price} $</Price>
            </InfoBox>
            <OrderBox>
                <Button>Order</Button>
                {/* <AmountInput type="number" value={amount}/> */}
            </OrderBox>


        </Card>
    );
}

export default ProductItem;