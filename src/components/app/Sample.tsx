import Select from 'react-select';
import {availableProjects} from './App1';
import React, { Component } from 'react';
import ddmodel from './Ddmodels';


let values:ddmodel[] = [];

export  class Samples extends Component {
  
 
   render(){
       
    return (
      <Select options = {values} />
    );
   }



}

export default class Dropdown extends Component{
    componentDidMount() {
      
        availableProjects()
           .then(res => {
               res.forEach((element: any) => {
    
                   values.push(new ddmodel(element.projectId, element.projectName,element.projectGitUrl));
                  
               });
              
         
           });      
      }
       render(){
        return (
          <Samples  />
        );
       }
    
}