
import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from './SingleProduct'
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState([])//this is call from OnClick button

  useEffect(()=>{
      fetch('./fakeData.json')
        .then(response => response.json())
        .then(data => setProduct(data))
  }, [])


  // this is Add Cart button 
  const handleAddCart =(p)=>{
    const isExist = cart.find(pd => pd.id == p.id);
    if(!isExist){
      setCart([...cart, p])
    }
    else{
      alert('Already in Cart')
    }
  };


  //Delete unwanted Cart
  const handleDeleteCart =(id)=>{
    const newCart = cart.filter(item => item.id != id)
    setCart(newCart);
  }

  return (
    <>
    {/* This is Main Container  */}
     <div className="main-container">
      {/* this is Cards container  */}
        <div className="cards-container grid grid-cols-2 gap-10">

          {
            product.map((pd, index) => <SingleProduct 
              key={index}
              handleAddCart={handleAddCart} 
              props={pd}
            ></SingleProduct>)
          }
            
        </div>


      {/* this is Cart container  */}
        <div className="cart-container">
          <h1 className='text-2xl font-bold text-center my-4'>This is cart container</h1>
          <div className='flex justify-around'>
              <h5>Name</h5>
              <h5>Price</h5>
          </div>
          <div>
            {cart.map((item, index) =>(
                <div className='cart-info' key={index}>
                    <p>{index+1}</p>
                    <h5>{item.title.slice(0,10)}</h5>
                    <h5>{item.price}</h5>
                    <button onClick={()=>handleDeleteCart(item.id)}><MdDeleteForever /></button>
                </div>
            ))}
          </div>
        </div>
     </div>
    </>
  )
}

export default App
