"use client";
import { useState, useEffect } from "react";

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
    <main className="h-screen  p-20 ">
      <h1>Product List</h1>
      {products.map((item) => (
        <h3 key={item.id}>Name : {item.title}</h3> // Added key to each item
      ))}
    </main>
  );
}
