import React, {Component} from 'react'

export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            show: true,
        }
    }
    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a cclassName="navbar-brand text-info" href="#">PJANE</a>
              <button className="navbar-toggler"  onClick={() =>{ this.setState({show: !this.state.show})} }>
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="me-auto navbar-nav ">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Admin</a>
                        </li>        
                    </ul>   
                </div>
              </div>
            </div>
          </nav>  
          <h1>{this.state.show}</h1>
          </> 
        )
    }
}