"use client";
import { useState, useEffect } from "react";
import Product from "./product";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        console.log(data);
        setProducts(data.products); // Corrected from data.product to data.products
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="h-screen ml-20 mt-6 ">
      <h1>Product List</h1>

      {products.map((item) => (
        <div>
        <h3 key={item.id}>Name : {item.title}</h3> 
        <h4> <Product price={item.price}/> </h4>
        </div>
      ))}
    </main>
  );
}
