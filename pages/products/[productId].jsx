import React from 'react'

// will get all the ids for you
export async function getStaticPath () {
  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json()

  const paths = products.map((product) => {
    return {
      params: { productId: product.id },
    };
  });

  return {
    paths,
  };
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`
  );
  const product = await res.json();
  return {
    props:{
      product,
    }
  }
}
  
const ProductDetails = ({ product }) => {
    return (
      <div>
        <h3>{product.title}</h3>
        <p3>{product.price}</p3>
      </div>
    )
  }




const ProductDetails = () => {
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails