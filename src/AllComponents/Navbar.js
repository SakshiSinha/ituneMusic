import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-dark navbar-expand-lg  bg-warning">
          <ul className="navbar-nav">
            <img src="https://cdn2.iconfinder.com/data/icons/unigrid-phantom-multimedia-vol-1/60/020_004_music_note_key_song_tone_2-128.png"  alt="img" style={{width:"50px", height:"50px"}}/>
           


            <li className="nav-item">
              <Link to="/contact" className="navbar-brand  ml-5 mr-3">
                Mac
              </Link>
            </li>


            <li className="nav-item">
              <Link to="/contact" className="navbar-brand  ml-5 mr-3">
                iPhone
              </Link>
            </li>


            <li className="nav-item">
              <Link to="/contact" className="navbar-brand  ml-5 mr-3">
                iPad
              </Link>
            </li>


            <li className="nav-item">
              <Link to="/contact" className="navbar-brand  ml-5 mr-3">
                watch
              </Link>
            </li>
 

          
            <li className="nav-item">
              <Link to="/contact" className="navbar-brand  ml-5 mr-3">
                Tv
              </Link>
            </li>


            <li className="nav-item">
              <Link to="/music" className="navbar-brand  ml-5 mr-3">
                Music 
              </Link>
            </li>
 

            <li className="nav-item">
              <Link to="/contact" className="navbar-brand  ml-5 mr-3">
                Support
              </Link>
            </li>
 
 

            <li className="nav-item m">
              <Link to="/" exact className="navbar-brand  ml-5 mr-3">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="navbar-brand  ml-5 mr-3">
                Contact Us
              </Link>
            </li>


            <li className="nav-item">
              <Link to="/help" className="navbar-brand ml-5 mr-3">
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}