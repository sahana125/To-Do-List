import React from 'react'

function Welcome( Props) {
  return (
    <div> 
        <h1>Name {Props.name}</h1>
        <h1> email {Props.email} </h1>
    </div>
  );
}

function Props(){
    return(
        <div>
            <Welcome name="sana"/>
            <Welcome email="sahananaik176@gmail.com"/>
        </div>
    );
}
export default Props ;

