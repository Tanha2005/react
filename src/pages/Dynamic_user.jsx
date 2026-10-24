import React from 'react'
import { data, useLocation, useParams,useNavigate } from "react-router-dom";

const Dynamic_user = () => {
  // console.log("useparam ",useParams())
const {slug} = useParams();
 const user = [
        { id: 1, name: "tanha", gmail: "tanha@gmail.com", age: 20 },
        { id: 2, name: "tanha1", gmail: "tanha1@gmail.com", age: 21 },
        { id: 3, name: "tanha2", gmail: "tanha2@gmail.com", age: 22 },
        { id: 4, name: "tanha3", gmail: "tanha3@gmail.com", age: 23 },
    ];
    const specific_user = user.find(data=>data.id == slug)
    // console.log(useLocation())

const location = useLocation();
const navigate = useNavigate();

  return (
    <div>
  <h1>name = {specific_user.name}</h1>  
    <h1>gmail = {specific_user.gmail}</h1>  
  <h1>age = {specific_user.age}</h1>  

{location.pathname=="/user/3"&&<div><h1>hello{specific_user.name}</h1></div>}
   
   <div>
    <button onClick={()=>navigate('/')}>go to home</button>
   </div>
   
   
    </div>
  )
}

export default Dynamic_user
