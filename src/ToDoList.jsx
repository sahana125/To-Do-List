import React from 'react'
import Header from'./ToDoList/Header';
import List from'./ToDoList/List';
import Form from'./ToDoList/Form';

function ToDoList() {
  return (
    <div>
      <Header/>
      <List/>
      <Form/>
    </div>
  )
}


export default ToDoList;