import React, { useEffect, useState } from "react";
import { ItemType } from "../Models/ItemType";
import {Row, Col} from 'react-bootstrap';
import StoreItem from "../Components/StoreItem";

const Store: React.FC = () =>
{
    const[isLoading, setIsLoading] = useState<boolean>(false);
    const[itemList, setItemList] = useState<ItemType[]>([]);

    useEffect(() => 
    {
        setIsLoading(true);
        const fetchData =async () => {
            const result = await fetch('https://api.escuelajs.co/api/v1/products');
            const data : ItemType[] = await result.json();
            setItemList(data);
        }

        fetchData()
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));

    }, [itemList]);

    if(isLoading)
    {
        {<h2>Please wait !! Page is Loading</h2>}
    }
    return(
        <Row md= {2} sm = {1} lg = {3} className="g-3">
            {itemList.map((item) => 
            <Col key={item.id}> 
                <StoreItem storeItem = {item}></StoreItem>
            </Col>
            )}
        </Row>
    );
}

export default Store;