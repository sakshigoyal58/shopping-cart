import React, { useContext, useState } from "react";
import { isTemplateExpression } from "typescript";

type cartUpdation = {
    increaseItemsQuantity : (id : number) => void;
    decreaseItemsQuantity : (id : number) => void;
    removeCartItem : (id : number) => void;
    getItemsQuantity : (id : number) => number;
    calculateCartQuantity : () => number;
}

type props = {
    children : React.ReactNode
}



const ShoppingCartContext = React.createContext({} as cartUpdation);

export function useShoppingCartContext()
{
    return useContext(ShoppingCartContext);
}



export function ShoppingCartContextProvider ({children} : props)
{
    type cartItem = {
        id : number;
        quantity : number;
    }
    const[cartitems, updateCartItems] = useState<cartItem[]>([]);

    function increaseItemsQuantity(id : number)
    {
        updateCartItems((prevItems) => {

            if(prevItems.find(item => item.id == id))
            {
                return(
                    prevItems.map(item => item.id == id? {...item, quantity : item.quantity +1} : item)
                )
            }
            else
            {
                return ([...prevItems, {id :id, quantity :1}])
            }
        })
    }

    function decreaseItemsQuantity(id : number)
    {
        updateCartItems((prevItems) => {

            if(prevItems.find(item => item.id == id && item.quantity >0))
            {
                return(
                    prevItems.map(item => item.id == id ?
                         {...item, quantity : item.quantity -1} : item)
                )
            }
            else
            {
                return([...prevItems]);
            }      
            
        })
    }

    function removeCartItem(id : number)
    {
        updateCartItems((prevItems) =>{
            if(prevItems.find( item => item.id == id))
            {
                return(prevItems.filter(item => item.id != id));
            }
            else
            {
                return[...prevItems];
            }
        }
        )
    }

    function getItemsQuantity(id : number)
    {
        return cartitems.find(item => item.id === id )?.quantity || 0;
    }

    function calculateCartQuantity()
    {
        let quantity : number =0;

        cartitems.forEach(item => (quantity = quantity + item.quantity))

        return quantity;
    }

    return(
        <ShoppingCartContext.Provider value = {{increaseItemsQuantity,decreaseItemsQuantity, 
                                                removeCartItem, getItemsQuantity, calculateCartQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}



