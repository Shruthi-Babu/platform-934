import React, { useEffect, useState } from 'react'

function Catalogue() {

  const [data, setData] = useState();

  useEffect(()=>{
    fetch('/api/products', {method:"GET",})
    .then(res=>res.json())
    .then(response => {
      setData(response);
      console.log("data: ", data)
    } )    
  })
  
  return (
    <div>
      Catalogue
      {data.products.map(p=>p.title)}
    </div>
    
  )
}

export default Catalogue