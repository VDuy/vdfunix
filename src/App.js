import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import "./App.css";
import Homepage from "./homepage/Homepage"
export default function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <header className="=App-hearder">
        
        </header>

        <Routes>
          <Route path="/excel">
            {/* <ExcelView /> */}
          </Route>
         
          <Route path="/" exact element={
          <Homepage />}
           />
        </Routes>
      </div>
    </BrowserRouter>
  )
}