import React,{useEffect, useState} from 'react'
import Table from '../TableComp';

const Student = () => {
  const [data,setData]=useState([])
 

 const fnStudentTable=async ()=>{
  try{
    const res =await fetch("https://jsonplaceholder.typicode.com/posts")
   const result =await res.json()
   setData(result)
  }            
  catch(ex){
    console.error("student_"+ex)
  }
  finally{
    console.log("executed")
  }
 }
useEffect(()=>{
  
  fnStudentTable()
},[])
  

  return (
    <div>
    <div style={{textAlign:'center',fontSize:'50px'}}><u><b>Student Data</b></u></div>
    <Table  headers = {["SNO","NAME","AGE","GRADE"]} columns={["userId","id","title","body"]} data={data}/>
    </div>

  )
}

export default Student
