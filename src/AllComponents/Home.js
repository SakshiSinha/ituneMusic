import React, { Component } from 'react'
import { connect } from "react-redux";
import "./style.css"


export default class Home extends Component {
  constructor(props) {
        super(props);
        this.state = {
        
        };
      }

  render() {
    return (
      <div class="container-fluid">
      {/* ==========================PART 1====================== */}
        <div className="row wrapper ">

          <div class="col-6 " >
            <div class="float-left" style={{marginTop:"200px",marginLeft:"100px"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png" style={{width:"50px",height:"50px"}}></img>
            <h2 class="float-left font-weight-bold mt-2 p-1 ">Music</h2>
            <div>
            <h1 class="float-left font-weight-bold text-white">Lose yourself in 60 million songs.</h1>
            
            </div >

            </div>
          </div>
          <div class='col-6  mt-5 mb-5'>
           <img src="https://www.fonedog.com/images/mac/quick-fix-macbook-pro-black-screen.png" style={{width:"630px",height:"500px"}}></img>
          </div>
        </div>

        {/* ===========================PART 2====================== */}

 
        <div class="d-flex justify-content-center align-items-center mt-5" >

             <img src="https://i.pinimg.com/originals/59/f9/31/59f93175ba67187444ad6ae3b35e040f.png" style={{width:"70px",height:"70px"}} class="img-fluid" alt=""></img>
    </div>
    <div class="text-center font-weight-bold">
    <h1>Working with Apple Music.</h1>
    <h5>Discover all the ways you can showcase content on Apple Music.<br></br> Access MusicKit, RSS feeds, widgets, brand guidelines, badge art and more.</h5>

    </div>

      </div>
    )
  }
}

 

