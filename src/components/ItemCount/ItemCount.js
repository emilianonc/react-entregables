import './ItemCount.css';
import {useEffect,useState} from 'react';

const ItemCount = ({stock, initialValue}) => {
    const[count, setCount] = useState(initialValue);

    const itemCount_button_add_handler = () => {
        if( count < stock )
        {
            setCount( count + 1 );
        }
    }

    const itemCount_button_remove_handler = () => {
        if( count > 0 )
        {
            setCount( count - 1);
        }
    }

    return( 
        <div>
            <button onClick={itemCount_button_add_handler} className="ItemCount_button">+</button>
            <p className="ItemCount_text">{count}</p>
            <button onClick={itemCount_button_remove_handler} className="ItemCount_button">-</button>
        </div>        
    );
};

export default ItemCount;