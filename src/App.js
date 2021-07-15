import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CookieConsent from "react-cookie-consent";
import ClockLoader from "react-spinners/ClockLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Router>
      {loading ? (
        <ClockLoader
          classname="loader"
          color={"#DECD87"}
          loading={loading}
          size={600}
        />
      ) : (
        <>
          <Home />
          <CookieConsent debug={true} buttonText="Olen teadlik!">
            See lehekülg kasutab küpsiseid.
          </CookieConsent>
        </>
      )}
    </Router>
  );
}
export default App;
