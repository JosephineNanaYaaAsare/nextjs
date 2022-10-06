import React from "react";
import Link from "next/link"

 export async function getStaticProps () {
     const res = await fetch("https://fakestoreapi.com/products")
     const products = await res.json()

     return {
      props: {
        products,
      }
     }
 } 

const Products = ({products}) => {
  return (
    <div>
      {products.map((product , idx) => (
        <div>
      <Link href={`/products/${product.id}`} key={idx}>
         {product.title}
         </Link>
         </div>
      ))}
    </div>
  );
};

export default Products;