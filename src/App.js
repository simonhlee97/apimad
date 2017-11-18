import React, { Component } from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
    	<Main />
      
      	<Footer />
      </div>
    );
  }
}
// ES5 syntax
// const Button = function(props) {
//   return(
//     <button>Go</button>
//   );
// };

// ES6 syntax
// const Button = (props) => {
//   return(
//     <button>Go</button>
//   );
// };
export default App;
