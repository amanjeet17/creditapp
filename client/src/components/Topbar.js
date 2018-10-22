import React,{Component} from 'react';

class Topbar extends Component{
  constructor(props){
    super(props)
  }

  openNav = () => {
    document.getElementById("mySidebar").style.width = "61%";
    document.getElementById("mySidebar").style.display = "block";
}

closeNav = () => {
    document.getElementById("mySidebar").style.display = "none";
}
  render(){
  return(
      <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">CrediTap</a>
          <span className="w3-button w3-top w3-white riteside w3-hover-text-black" style={{width:"auto",right:"0"}} onClick={this.openNav}><i className="fa fa-bars"></i></span>

        </div>
      </div>
    </nav>
    <nav className="w3-sidebar w3-black w3-animate-right w3-xxlarge" style={{display:"none",paddingTop:"80px",right:"0",zIndex:"2"}} id="mySidebar">
        <a href="javascript:void(0)" onClick={this.closeNav} className="w3-button w3-black w3-xxxlarge w3-display-topright" style={{padding:"0 12px"}}>
          <i className="fa fa-remove"></i>
        </a>
        <div className="w3-bar-block w3-center">
          <a href="/all" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={this.closeNav}>All</a>
          <a href="/add" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={this.closeNav}>Add</a>

        </div>
      </nav>
      </div>
    )
    }
}
export default Topbar;
