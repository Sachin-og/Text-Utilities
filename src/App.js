import React,{ useState} from 'react';
import './App.css';
import About from './components/About'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');/*Weather dark mode is enabled or not*/
  const [modex , setModex] = useState('dark');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if(mode !=='#021057'){
      setMode('#021057');
      showAlert("Dark  mode has been enabled","success");
      setModex('light');
      document.body.style.backgroundColor = '#021057';
    }
    else{
      setMode('light');
      setModex('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  
  return (
    <>
     <Router>
        <Navbar
          title="TextUtils"
          aboutText="Text Abouts" 
          mode={mode}
          modex ={modex}
          toggleBlueMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/Text-Utilities/about" element={<About mode = {mode}/>}></Route>
            <Route
              exact path="/Text-Utilities"
              element={
                <TextForm
                  
                  heading="Enter Text to analyze "
                  mode={mode}
                  showAlert={showAlert}
                />
               }
            ></Route>
          </Routes> 
        </div>
       </Router> 
    
    </>
  );
}

export default App;

