import './Item.css';
import {Link} from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount.js';

const Item = ({data}) => {
    return(
        <div className='item_div'>

            <img className='item_img' src={data.img}/>

            <div className='item_div_text'>
                <p className='item_p'> <b> {data.nombre} </b> </p>
                <p className='item_p'> Precio: {data.precio} </p>
                <p className='item_p'> Stock: {data.stock} </p>
                <ItemCount stock={data.stock} initialValue={1}/>
                <Link to={`/producto/${data.id}`}> Ver detalles </Link>
            </div>
        </div>
    );
};

export default Item;