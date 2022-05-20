import React from 'react';
import './App.css';
// import HomepageTest from './components/HomepageTest';
import SignIn from '/Users/corcoding/Desktop/projects/group1-fullstack-netflixclone-api/API/api-client-testing/src/components/official-ui-components/SignIn.js';
import SignUp from '/Users/corcoding/Desktop/projects/group1-fullstack-netflixclone-api/API/api-client-testing/src/components/official-ui-components/SignUp.js';



class App extends React.Component {

  render(){
    return(
      <div className='App'>
        <SignIn />
        <SignUp />
      </div>
    )
  }
}

export default App;

