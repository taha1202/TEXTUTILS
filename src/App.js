import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
//import About from './components/About';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
   const [mode,setMode] = useState('light');
   const [alert,setAlert] = useState(null);
   const ShowAlert = (message,type)=>{
      setAlert({
        msg: message,
        type:type
      })
      setTimeout(()=> {
        setAlert(null);
      }, 2000)
   }
    const toggleMode = ()=>{
      if (mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = 'grey';
        ShowAlert("Dark mode has been enabled" , "success");
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        ShowAlert("Light mode has been enabled" , "success");
      }
    }
  return  (
    <>
     {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3" >
    
    <Form heading="Enter The Text to Analyze" ShowAlert={ShowAlert} mode ={mode}/>
      {/* <Routes>
      <Route path="/about" element={<About />} />   
      <Route path="/" element= {<Form heading="Enter The Text to Analyze" ShowAlert={ShowAlert} mode ={mode}/>}/>
            
      </Routes> */}
           
    </div>
    {/* </Router> */}
    </>
    
  );
}

export default App;
