import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [darkmode, setDarkMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (darkmode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
     <Router>
      <Navbar
        title="Text-Utils"
        about="About"
        mode={darkmode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container my-4">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Text Manipulation & Counter"
                mode={darkmode}
              />
            }
          ></Route>
          <Route exact path="/about" element={<About mode={darkmode}/>}></Route>
        </Routes> 
      </div>
  </Router>
    </>
  );
}
export default App;
