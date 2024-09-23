import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
//import TextForm2 from './components/TextForm2';
import React , {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Router, Routes,  Route, Link} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); 
  const[alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
setAlert({
  msg: message,
  type: type
    })
    setTimeout(()=> {
      setAlert(null);
    } , 1500);
  }

 const toggleMode = ()=> {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'rgb(1 23 46)';
    showAlert("Dark mode has been enabled", "success");
  //   document.title='TextUtils - DarkMode';
  //   setInterval(()=> {
  //     document.title = 'TextUtils is Amazing';
  //   }, 2000);
  
  // setInterval(()=> {
  //   document.title = 'Install TextUtils Now';
  // }, 1500);
}
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled", "success");
    //document.title='TextUtils - LightMode';
  }
  }


  return (
    <>  
<Router> 
<Navbar title = "textutils" aboutText ="About Us" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>

{/* <div className= "container my-3">
<TextForm2 />
</div> */}
+
<div className= "container my-3">

<Routes>
<Route  path='/about' element={<About mode={mode}/>} />
<Route  path='/' element= {<TextForm showAlert={showAlert} heading="Try TextUtils-Word counter, Character counter, Remove extra spaces" mode={mode} />} /> 
</Routes>

</div>
</Router>



{/*<div className="container my-3">
  <About/>
</div>*/}

  </>
  );
}

export default App;
