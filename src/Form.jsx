import React, {useState} from 'react';

function Form() {
  const [name, setName]=useState('');
  const[email,setEmail]=useState('');
  const[USN,setUSN]=useState('');
  const[phoneNumber,setphoneNumber]=useState('');
  const handleSumbit=(e) =>{
    console.preventDefault();
    const data={
      name:name,
      email:email,
      phoneNumber:phoneNumber
    } 
    console.log(data);
  };
    

  return (
    <div>
      <form onSumbit={handleSumbit}>
        <input type="text" value={name} 
        placeholder="student name" onChange={(e)=> setName(e.target.value)}/><br></br>

        <input type="email" value={email}
        placeholder="email" onChange={(e)=>setEmail(e.target.email)}/><br></br>

        <input type="text" value={USN}
         placeholder="USN" onChange={(e)=> setUSN(e.target.USN)}/><br></br>

         <input type="phoneNumber" value={phoneNumber}
         placeholder="phoneNumber" onChange={(e)=> setphoneNumber(e.target.phoneNumber)}/><br></br>

         <input type="Button" value="Sumbit"/>
           </form>

    </div>
  );
  }

export default Form;