import React, { useContext, useState } from "react";
import {Button} from 'react-bootstrap';
import { useShoppingCartContext } from "../Context/ShoppingCartContext";
import '../CSS/AddItem.css';

interface item {
    id : number;
}

const AddItems : React.FC<item> = ({id}) =>
{
    const {increaseItemsQuantity, decreaseItemsQuantity, removeCartItem, getItemsQuantity} = useShoppingCartContext();
    const quantity = getItemsQuantity(id);

    const decreaseQuanityHandler =(event : React.MouseEvent<HTMLButtonElement> ) =>{
        decreaseItemsQuantity(id);
    }

    const increaseQuantityHandler =(event : React.MouseEvent<HTMLButtonElement> ) =>{
        increaseItemsQuantity(id);
    }

    const removeItemHandler =(event : React.MouseEvent<HTMLButtonElement> ) =>{
        removeCartItem(id);
    }

   
    return(
        <div className="d-flex align-items-center justify-content-center button">
            <Button className="b" onClick={decreaseQuanityHandler}> - </Button>         
            <span > {quantity} in cart</span>        
            <Button className="b" onClick={increaseQuantityHandler}>+</Button>
            <Button variant="danger" size="sm" onClick={removeItemHandler}>Remove</Button>        
        </div>
    );
}

export default AddItems;