"use client"

export default function Product({price}) {
    console.log(price);

  return (
    <div>
        <button onClick={()=>alert(price)} className=" bg-blue-300 p-3 "> check price</button>
    </div>
  )
}
