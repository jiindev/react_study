import React, {Component} from 'react';
import MyComponent from './MyComponent';

class App extends Component{
  render(){
    return(
      <MyComponent name = 'React' age={3}/>
    );
  }
}
export default App;