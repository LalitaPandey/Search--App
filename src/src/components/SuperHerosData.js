import React,{useState,useEffect} from 'react'
import "./SuperHerosData.css"

function SuperHerosData() {
const[data,setData]=useState([])

const apidatas =()=>{
fetch("https://akabab.github.io/superhero-api/api/all.json").then((res)=>{
    return res.json()
}).then(data=>{
console.log(data,"datas")
setData(data)

})
}
useEffect(()=>{
})

const handleApi=()=>{
    apidatas()

}

  return (
    <div className='container'>
   

{data.map(item =>(
    <>
    <div className="superhero-api-container">
    <h1>{item.id}. name :{item.name}</h1>
    <h1> powerstats speed:{item.powerstats.speed}, power: {item.powerstats.power} </h1>

    </div>
    </>
))
}

<div className="container-btn">
<h2>SuperHerose details</h2>
<button onClick={handleApi} className="btn-data">Data</button>
</div>
    </div>
  )
}

export default SuperHerosData;