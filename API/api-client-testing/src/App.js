import React from 'react';
// import SignInTest from './components/SignInTest';
import SignUpTest from './components/SignUpTest';
import './App.css';
// import HomepageTest from './components/HomepageTest';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link

// } from 'react-router-dom';

class App extends React.Component {

  render(){
    return(
      <div className='App'>
        {/* <h1>This is my App</h1> */}
        
        <SignUpTest />

      </div>
    )
  }
}

export default App;