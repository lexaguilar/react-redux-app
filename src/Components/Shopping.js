import React, { useState } from 'react'
import Card from './Card';
import {products} from '../data/items';
import { useSelector, useDispatch } from 'react-redux';
import { agregarItem, eliminarItem } from '../store/reducers/cart/cartActions';
const Shopping = () => {

    const [items, setitems] = useState(products);

    const dispatch = useDispatch();
    

    const add = (id) => {
        let item = items.filter(x => x.id == id)
        dispatch(agregarItem([...item]));
    }

    const remove = id => dispatch(eliminarItem(id));
    

    return (
        <div>
            <h2>Items</h2>
            <div className="row-items">
                {
                    items
                    .map(item => <Card item={item} add={add} remove={remove}/>)
                }
            </div>
        </div>
    )
}

export default Shopping;


