import './ItemDetail.css';

const ItemDetail = ({data}) => {
    return( 
        <div className='itemDetail_div'>

            <img className='itemDetail_img' src={data.img}/>

            <div className='itemDetail_div_text'>
                <p className='itemDetail_p'> <b> {data.nombre} </b> </p>
                <p className='itemDetail_p'> Modelo: {data.modelo} </p>
                <p className='itemDetail_p'> Categoria: {data.categoria} </p>
                <p className='itemDetail_p'> Estacion: {data.estacion} </p>
                <p className='itemDetail_p'> Talles: {data.talles} </p>
            </div>
        </div>
    );
};

export default ItemDetail;