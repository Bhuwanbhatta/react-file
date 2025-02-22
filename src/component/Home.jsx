import React from 'react'
import productList from "./data"
import toast, { Toaster } from 'react-hot-toast';


function Home({setProductId}) {
  
  const handleAddToCart = (id) => {
    setProductId(id)
    toast.success('Product added Successfully !')
  }

  return (
    <>
      <div className="container-fluid px-5 py-3">
        <div className="row gap-4 justify-content-center">
          <Toaster />
          {
            productList.map((product, index) => {
              return (

                <div className="col-lg-2 border rounded-4 mt-2" key={product.id}>
                  <div className='d-flex justify-content-center p-1'>
                    <img src={product?.img} alt="" className='product-size' />
                  </div>
                  <div className='py-2'>
                    <div className='d-flex justify-content-between px-3'>
                      <p className='m-0 font-bold font-size-12'>{product?.brand}</p>
                      <p className='m-0 font-bold font-size-12'>{product?.model}</p>
                    </div>
                    <div className='px-3'>
                      <p className='m-0'><span className='font-bold'>₹ </span>{product?.price}</p>
                      <p className='m-0 text-hiding'>{product?.space}</p>
                    </div>

                    <div className='px-2 mt-1'>
                      <button className='btn btn-primary p-1 w-100' onClick={() => handleAddToCart(product?.id)}>Add to cart</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home
