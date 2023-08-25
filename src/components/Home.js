import React,{useState} from 'react'
import MySlilder from '../MySlider'
import { useCart } from 'react-use-cart'
import {productData} from './ProductData'
import {FcLike}  from 'react-icons/fc';
import {BsCartCheck } from 'react-icons/bs';


const Home = () => {
  const {addItem}=useCart();

  const [data, setData]=React.useState(productData);
  const [productList, setProductList]=useState(productData);

  const filterResult=(cartItem)=>{
    const result=data.filter((currentData)=>{
      return currentData.category===cartItem;
    })
    setProductList(result); 
    console.log(setData);
  }

  const filterPrice=(cartItem)=>{
    const result=data.filter((currentData)=>{
      return currentData.priceCategory===cartItem;
    })
    setProductList(result); 
  }


  return (
   
    <>
    <div>
    <MySlilder/>
    </div>
    <h1 className='text-center mt-5 p-2' >Available Foods List</h1>
    <div className='container-fluid mx-2'>
    <div className='row mt-5 mx-2'> 
    <legend>Select A Category</legend>
    <div className='col-md-2'>
    <button className='btn btn-warning w-100 mb-2'
     onClick={()=>setProductList(data)}>All </button>
    <button className='btn btn-warning w-100 mb-2'
    onClick={()=>filterResult('everydayvalue')}>Every Day value</button>
    <button className='btn btn-warning w-100 mb-2'
     onClick={()=>filterResult('makeitmeal')}>Make it a Meal</button>
    <button className='btn btn-warning w-100 mb-2'
     onClick={()=>filterResult('Snacks')}>Snacks</button>
    <button className='btn btn-warning w-100 mb-2'
     onClick={()=>filterResult('midnightdeal')}>Mid Night Deals</button>
  
     <br/>  
     <br/> 
       <legend>Custome Price</legend>
      <p>Select Price Range:</p>
  
        <button className='btn btn-outline-info w-100 mb-2'
     onClick={()=>filterPrice('lessfrom500')}>Price Rs.( 100 - 500 ) </button>
    
     <button className='btn btn-outline-info w-100 mb-2'
     onClick={()=>filterPrice('lessfrom1000')}>Price Rs.(600 - 1000)</button>
      
      <button className='btn btn-outline-info w-100 mb-2'
     onClick={()=>filterPrice('lessfrom1000')}>Price Rs.(1000-5000)</button>
        
      </div>

   
    <div className='col-md-10' >
        <div className='row justify-content-center'>
          {productList.map((values) => {
            const {id, img, title, desc, price,quantity}=values
            return (
            <>
            <div className='col-sm-12 col-md-6 col-lg-3 mb-3' key={id}>
    <div className='card p-0 overflow-hidden h-60 shadow'>
         <div className='card-body' >
         <img  src={img} alt='card-img' className='card-img-top img-fluid' />
              <h5 className='card-title' >{title}</h5>
              <p className='card-text' style={{fontSize:"10px", width:"180px", height:"30px"}}>{desc}</p>
              <p className='card-text'>Rs./ <b>{price} Quatntity:{quantity}</b></p>
              <button className='btn btn-outline-success btn-md'
              onClick={()=>addItem(values)}  
              >Cart < BsCartCheck/></button>
              <button  className='btn btn-outline-danger btn-md' style={{margin: "5px"}}
              onClick={()=>addItem(values)} 
              >Favorite <FcLike style={{color:"red"}}/></button>
         </div>
    </div>  
</div>
            </>
            )
          })}
        </div>
    </div>
    </div>
    </div>
      
    </>
  )
}

export default Home