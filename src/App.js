import React, { Component } from "react"
import "./App.css"
import SmoothieForm from "./SmoothieForm"
import SmoothieList from "./SmoothieList"
import Recipe from "./recipe";


class App extends Component
{
  constructor(props)
  {
    super(props); 
  }

  render()
  {
    
    return(
    <div className="body">
    <center>
      <h1 className="title">Smoothies Made Easy</h1>
        <React.Fragment>
          <SmoothieList/>
        </React.Fragment>
    </center>
    </div>
    )
  }
}

export default App; 


 