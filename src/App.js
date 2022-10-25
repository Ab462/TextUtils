import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnText, setBtnText] = useState("Enable dark Mode");
  const showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Disable dark Mode");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert('Success: Dark mode has been Enabled','success');
    } else {
      setMode("light");
      setBtnText("Enable dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#042743";
      showAlert('Success: Light mode has been Enabled','success');
    }
  };
  return (
    <>
      <Navbar title="TextUtils" homeText="Home" aboutText="About Us" mode={mode}  toggleMode={toggleMode} switchtext={btnText}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>
      {/* <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>}/> */}
        {/* <Route path="/about" element ={<About/>}/> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
