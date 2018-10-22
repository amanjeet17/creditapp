import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class All extends Component{
  constructor(props){
    super(props)
    this.state={
      institutes:[]
    }
  }

  onInsti=(e)=>{
    const hit=e.target.id;
    console.log("HIT URL",hit);
  }
  componentDidMount(){
    const Institutes=  axios.get('/api/resume/all')
                      .then(res =>{
                        console.log("Get all response",res.data);
                        this.setState({
                          institutes:res.data
                        })
                      })
                      .catch(err =>{
                        console.log("Get All error",err);
                      });
  }

  render(){
  return(
      <div className="main">
      <div className="table-responsive" style={{    width: "100%"}}>
         <table className="table table-hover">
           <thead>
             <tr>
               <th>S.No</th>
               <th>Institute Name</th>
               <th>City</th>
               <th>Contact</th>
               <th> View</th>
             </tr>
           </thead>
           <tbody>
           {
             this.state.institutes.map((institute,index)=>{
               return(
                 <tr key={index} id={institute._id}  onClick={this.Insti}>
                   <td>{index+1}</td>
                   <td>{institute.name} </td>
                   <td>{institute.city}</td>
                   <td>{institute.contactdetails[0].number}</td>

                   <td><a href={`/one/${institute._id}`} ><button type="button" className="btn btn-success">View</button></a></td>

                 </tr>

               )
             })
           }
           </tbody>
         </table>
         </div>
      </div>
    )
  }
}
export default All;
