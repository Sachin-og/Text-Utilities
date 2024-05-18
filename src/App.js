import React,{ useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

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
  const toggleBlueMode = () => {
    if(mode !=='#021057'){
      setMode('#021057');
      showAlert("Dark Blue mode has been enabled","success");
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
  const toggleRedMode = () => {
    if(mode !=='#a90000'){
      setMode('#a90000');
      showAlert("Dark Red mode has been enabled","success");
      setModex('light');
      document.body.style.backgroundColor = '#a90000';
    }
    else{
      setMode('light');
      setModex('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  const toggleGreenMode = () => {
    if(mode !=='#095100'){
      setMode('#095100');
      showAlert("Dark Green mode has been enabled","success");
      setModex('light');
      document.body.style.backgroundColor = '#095100';
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
     {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="Text Abouts" 
          mode={mode}
          modex ={modex}
          toggleBlueMode={toggleBlueMode}
          toggleRedMode={toggleRedMode}
          toggleGreenMode={toggleGreenMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <Routes>
            <Route exact path="/about" element={<About mode = {mode}/>}></Route>
            <Route
              exact path="/"
              element={ */}
                <TextForm
                  
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              {/* }
            ></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    
    </>
  );
}

export default App;

