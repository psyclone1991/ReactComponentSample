import React from 'react';
import Select from 'react-select';
import ddmodel from './Ddmodels';
import { render } from '@testing-library/react';
let val:ddmodel[] = [];
type NewType = {
    message: React.ReactNode;
};
const customStyles = {
    option: (provided: any, state: { isFocused: any; }) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isFocused ? 'blue' : 'black',
      padding: 20,

    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided: any, state: { isDisabled: any; }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

  
 const Dropdown = (props:any) => {
     
     
      return(
        
          <Select options ={props.opinion}  styles={customStyles}/>
    );

}

export default Dropdown;
