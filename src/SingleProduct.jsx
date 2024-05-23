

const SingleProduct = ({props, handleAddCart}) => {
    return (
        <div>
            <div className="card space-y-4">
              <div className='img-div'>
                <img className='card-img' src={props.image} alt="" />
              </div>
              <h1>{props.title.slice(0,10)}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error, sit delectus unde enim illum?</p>
              <div className="card-footer">
                <h1>{props.price}</h1>
                <button onClick={(event)=>handleAddCart(props)} className='add-btn'>Add to cart</button>
              </div>
            </div>
        </div>
    );
};



export default SingleProduct;