import React,{Component} from 'react';
import axios from 'axios';
import { addinstitute } from '../actions/creditap';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const fields ={};
let phn=[];
let institutes =[];
let adclik=0
class Add extends Component{
  constructor(props){
    super(props)
    this.state={
      phn:[]
    }
  }
  componentDidMount(prevProps,prevtate){


  }
  componentDidUpdate(prevProps,prevtate){

  }
  handleAddOption = (e) => {
  e.preventDefault();
  fields.name  = e.target.elements.name.value.trim();
  e.target.elements.name.value='';
  fields.email  = e.target.elements.email.value.trim();
  e.target.elements.email.value='';
  fields.addressline1  = e.target.elements.line1.value.trim();
  e.target.elements.line1.value='';
  fields.addressline2  = e.target.elements.line2.value.trim();
  e.target.elements.line2.value='';
  fields.city  = e.target.elements.city.value.trim();
  e.target.elements.city.value='';
  fields.state  = e.target.elements.state.value.trim();
  e.target.elements.state.value='';
  fields.locality  = e.target.elements.locality.value.trim();
  e.target.elements.locality.value='';
  fields.pincode  = e.target.elements.pincode.value.trim();
  e.target.elements.pincode.value='';
  if(adclik>0){
    fields.contactdetails  = phn
  }
  else{
    let phnobj={}
    phnobj.phntype = document.getElementById('Phn').value.trim();
    phnobj.number = document.getElementById('PhnNo').value.trim();
    phn.push(phnobj);
    fields.contactdetails  = phn
    document.getElementById('Phn').value='';
    document.getElementById('PhnNo').value='';
  }
  // console.log("Fields",fields);
  institutes.push(fields);
  phn=[]
  // console.log(localStorage.getItem('Institutes'));
  this.setState({
    phn:phn
  });
  axios.post('/api/resume/submit', fields)
    .then(res => 'hi')
    .catch(err =>{
      // console.log("Error in POST",err);
    });

}
 addPhn = (e) =>{
   adclik++;
   let Obj={};
   if(adclik==1){
     document.getElementById("Phn").required = false;
     document.getElementById("PhnNo").required = false;
   }
    Obj.phntype = document.getElementById('Phn').value.trim();
    Obj.number = document.getElementById('PhnNo').value.trim();
    if(Obj.phntype && Obj.number){


   document.getElementById('Phn').value='';
   document.getElementById('PhnNo').value='';
   // console.log("OBJ",Obj);
   phn.push(Obj);
   // console.log("phn",phn);
   this.setState({
     phn:phn
   })
   }
 }
 delPhn = (e)=>{
   adclik--;
   // console.log("id=",e);
   var filtered = phn.filter(function(value, index, arr){
     // console.log("value",value);
     // console.log("Arr",arr);
     return value.number != e;

    });
    if(adclik==0){
      document.getElementById("Phn").required = true;
      document.getElementById("PhnNo").required = true;
    }
    phn = filtered
    console.log("filtered",filtered);
    this.setState({
      phn:filtered
    })

   console.log("phn",this.state.phn);
 }
 clear =(e)=>{
   if(adclik){
     document.getElementById("Phn").required = true;
     document.getElementById("PhnNo").required = true;

   }
   adclik=0;
     phn=[];
   this.setState({
     phn:phn
   })
 }


 render(){
  return(
      <div>
      <h2>Add Institution</h2>
      <form onSubmit={this.handleAddOption}>
      <div className="col-xs-12 gap" >
        <div className="col-xs-12 col-sm-2 labele">
          <label >Name : </label>
        </div>
        <div className="col-xs-12 col-sm-10">
          <input className="gap" type="text" placeholder="Name" required name="name" />
        </div>
      </div>
      <div className="col-xs-12 gap" >
        <div className="col-xs-12 col-sm-2 labele">
          <label >Email : </label>
        </div>
        <div className="col-xs-12 col-sm-10">
          <input className="gap" type="text" placeholder="Email" required name="email" />
        </div>
      </div>

      <div className="col-xs-12 gap">
        <div className="col-xs-12 col-sm-2 labele">
          <label >Address : </label>
        </div>
        <div className="col-xs-12 col-sm-10">
          <input className="gap" type="text" placeholder="Line 1" required name="line1" />
          <input className="gap" type="text" placeholder="Line 2" required name="line2" />
          <div className="col-xs-12 col-sm-6 padl" >
            <input className="gap" type="text" placeholder="City" required name="city" />
          </div>
          <div className="col-xs-12 col-sm-6 padr" >
            <input className="gap" type="text" placeholder="State" required name="state" />
          </div>
          <div className="col-xs-12 col-sm-6 padl" >
            <input className="gap" type="text" placeholder="Locality" required name="locality" />
          </div>
          <div className="col-xs-12 col-sm-6 padr" >
            <input className="gap" type="number" placeholder="Pincode" required name="pincode" />
          </div>
        </div>
      </div>
      <div className="col-xs-12 gap">
        <div className="col-xs-12 col-sm-2 labele">
          <label >Contact : </label>
        </div>
        <div className="col-xs-12 col-sm-10">
        <div className="col-xs-12 col-sm-3 padl" >
            <select id="Phn" className="gap"required >
              <option value=''></option>
              <option value='Telephone'>Telephone</option>
              <option value='Mobile No.'>Mobile No.</option>
            </select>
            <div className="phnerror"></div>
        </div>
        <div className="col-xs-10 col-sm-5 padr" >
            <input className="gap" type="number" placeholder="Number" required id="PhnNo" />
            <div className="numbererror"></div>
        </div>
        <div className="col-xs-2 col-sm-4" style={{padding: "8px 20px",cursor: "pointer"}}>
            <button onClick={this.addPhn} required type="button" className="btn btn-success"> <i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>

        {
          this.state.phn.map((record)=>{
            return(
            <div id={record.number} key={record.number}>
              <div className="col-sm-3 col-xs-12 padl" style={{paddingLeft:"0px"}}>
                <input className="gap" value={record.phntype} disabled/>
              </div>
              <div className="col-sm-5 col-xs-9 padr" style={{paddingRight:"0px"}}>
                <input className="gap" value={record.number} disabled/>
              </div>
              <div className="col-sm-4 col-xs-3" style={{padding: "8px 20px",cursor: "pointer"}}>
                <button onClick={()=>this.delPhn(record.number)} type="button" className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
              </div>
            </div>
            )
          })
        }
        </div>
      </div>
      <div className="col-xs-12" >
    <button  type="submit" className="btn btn-success btnsub">Success</button>
    <button  type="reset" onClick={this.clear} className="btn btn-danger btnsub">Clear</button>

      </div>
        </form>

      </div>
    )
  }
}
export default Add;
