import { Component } from "react";
import Select from 'react-select';
import React from "react";
import Appmodel from "./Appmodels";

export interface IBaseIconProperties {

    arr : Appmodel[];
}
var options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' } 
  ];
  

export  abstract class BaseIcon extends Component<IBaseIconProperties, any> {
    public baseRender(arr:Appmodel[]) {
        return (
            <Select options = {arr}>
               
            </Select>
        );
    }

    //put other useful base class methods here
}


export default class  Bar extends BaseIcon {
/* constructor(props: IBaseIconProperties) {
  super(props);
  this.state = {
      //initialize state here, respecting the state type of the base class
  };
} */

public render() {
   return this.baseRender(options);
}
}