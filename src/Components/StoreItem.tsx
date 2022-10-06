import React, { useState } from "react";
import { ItemType } from "../Models/ItemType";
import {Card, Button} from 'react-bootstrap';
import '../CSS/StoreItem.css';
import AddItems from '../Components/AddItems';

interface Props{
    storeItem : ItemType;
}

const StoreItem : React.FC<Props> = ( {storeItem}) =>
{
    const[isAddButtonShown, SetIsAddButtonShown] = useState<boolean>(false);

    const clickHandler = (event : React.MouseEvent<HTMLButtonElement>) => {
            SetIsAddButtonShown(true);
    }
    return(
        <React.Fragment>
            <Card>
            <Card.Img  variant = "top" src= {storeItem.image} className="image"></Card.Img>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
                    <span >{storeItem.title}</span>
                    <span >{storeItem.price}</span>
                </Card.Title>
                <Button onClick={clickHandler}>+Add to Cart
                </Button>
                {isAddButtonShown && <AddItems id = {storeItem.id}></AddItems>}
            </Card.Body>
            </Card>           
        </React.Fragment>
       
    );
}

export default StoreItem;