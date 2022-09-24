import "./App.css";
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import React from 'react';
import Form from './Form'
import ToDoList from './ToDoList'
 
function Det(){
  return(
    <div>
      <div className='someClass'>
      <img src='sanaa.jpg' alt='image'></img>
        <h1>Developer site</h1>
       <p> This is my portfolio</p>
     </div>
  </div>
  );
}
function Site(){
  return(
  <div className='target'>
    <h1>Site analysis</h1>
  </div>
  );
}

function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes> 
        <Route path='/About'  element={ <About />}></Route>
        <Route path='/Contact' element={ <Contact />}></Route>
        <Route path='/Teams'   element={< Teams />}></Route>
        <Route path='/add-student' element={<add-student/>}></Route>
        <Route path='/toDolist' element={< ToDoList/>}></Route>
       
        
        
      </Routes>
      </BrowserRouter>
 </div>
 ); 
 }
 function NavBar(){
  return(
    <div>
      <Link to="/about"> About </Link>
      <Link to="/contact"> contact </Link>
      <Link to="/teams"> Teams </Link>
      <Link to="/add-student"> Add-student </Link>
      <Link to="/todolist"> ToDoList</Link>

      

      
      
    </div>
  )
 }

 function About(){
  return <div> This is my about Component</div>
 }

 function Teams(){
  return <div> This is my teams</div>
 }
 
 function Contact (){
  return <div> This is my Contact Component</div>
 }
 

  export default App;

