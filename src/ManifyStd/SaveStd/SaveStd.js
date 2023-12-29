import React, { useEffect, useState } from 'react'
import {Input} from '../../Components/InputCom/Input'
import  inputControls from "./configuration.json"
export const SaveStd = () => {
 
  const [inputControl,setInputControl] = useState(inputControls)
  const [request,setRequest]=useState('')

  const fnField=(eve,inputControl)=>{

    const {value,id}=eve.target;
    console.log(id,value)
    let _data=[...inputControl]
    const inputControlObj=_data.find((obj)=>{
      return obj.id===id;
     })
     inputControlObj.isShownErr=value?false:true;
     inputControlObj.value=value;
     return _data;
    
  }
  const fnChange=(eve)=>{
const cloneInput = fnField(eve,inputControl)
    
     setInputControl(cloneInput)
    
  }
  const fnStdClick=()=>{
    let isStdValid = true;
    let objStd = {};
    let _data = [...inputControl];
    _data.forEach((obj)=>{
objStd[obj.name]=obj.value;
if(!obj.value){
  isStdValid=false;
  obj.isShownErr=true;
}
if(!isStdValid){
  setInputControl(_data)
}
setRequest(JSON.stringify(objStd))
console.log(request)
    })

  }
  
  return <div>
   
    {
    inputControl.map((obj,ind)=>{
      return <Input  key={`inp_${ind}`} {...obj} fnChange={fnChange}/>
    })}
    
<div style={{textAlign:'center'}}><button className='btn btn-primary ' onClick={fnStdClick}>Save</button></div>
   
  </div>
}
