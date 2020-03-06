import { BaseIcon,IBaseIconProperties } from "./inheritance";
const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra' ,label: 'Orchestra' } 
  ];
  

  export default class  Bar extends BaseIcon {
    constructor(props: IBaseIconProperties) {
      super(props);
      this.state = {
          //initialize state here, respecting the state type of the base class
      };
    }
    
    public render() {
       return this.baseRender(options);
    }
    }