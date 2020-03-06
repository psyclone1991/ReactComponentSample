import React, { Component } from 'react'
import ChildComponent from './child';
import { availableProjects } from './App1';
import ddmodel from './Ddmodels';
import Dropdown from './child';
import Select from 'react-select';
import Jobmodel from './JobModels';


let val:ddmodel[] = [];

class ParentComponent extends Component {
   
        
    

       componentDidMount() {
      
        availableProjects()
           .then(res => {
               res.forEach((element: any) => {
    
                val.push(new ddmodel(element.projectId, element.projectName,element.projectGitUrl));
                  
               });
              
         
           });  

      }
    
render(){
    console.log(val);
    return(
       
    <div>
      
        <Dropdown opinion ={val} ></Dropdown>
    </div>
      );
   }
}

export default ParentComponent;