import React, { Component } from 'react'

export default class Card extends Component {
    render() {

        const { item, add, remove } = this.props;

        return (
            <div className="card">
                <b>{item.id}</b>
                <p className="item">
                    {item.nombre}
                </p>
                <p>
                    Precio : 
                    <span className="item">
                        $ <span className="item">{item.precio}</span> <span className="price-line-through">{item.precioAnterior}</span> 
                    </span>
                </p>
                <button className="item-button" 
                    onClick={() =>add(item.id)}
                >Agregar</button>
                <button className="item-button" 
                    onClick={() =>remove(item.id)}
                >Eliminar</button>
                
            </div>
        )
    }
}
    