import React from 'react';
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return(
        <div>
            <p>
                {props.greeting}
            </p>    
        </div>
    )
}

export default ItemListContainer;