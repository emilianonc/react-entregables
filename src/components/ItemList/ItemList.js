import Item from '../Item/Item.js';

const ItemList = ({data=[]}) => {
    return( 
        data.map( producto => <Item data={producto} key={producto.id}/> )
    );
};

export default ItemList;