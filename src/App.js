import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {

  // input usestate hooks
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // button usestate hooks
  // const [register, setRegister] = useState();


  // handle input
  const handleNameInput = event => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleEmailInput = event => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordInput = event => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(result => {
    //     console.log(result.user);
    //   })
    //   .catch(error => {
    //     console.error(error.code)
    //       ;
    //   })


    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error.code);
      })
  };




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* vanila css */}
        {/* <section>
          <form onSubmit={handleFormSubmit} action="" >
            <h2>Register Project!!!</h2>

            <div className='input-container'>
              <input onBlur={handleNameInput} type="text" name="" id="" placeholder='User name' />
              <input onBlur={handleEmailInput} type="email" name="" id="" placeholder='User email' />
              <input onBlur={handlePasswordInput} type="password" name="" id="" placeholder='password' />
            </div>

            <div>
              <button type="submit">Register</button>
              <button type="submit">Log In</button>
            </div>
          </form>
        </section> */}


        {/* bootstrap css */}


      </header>
    </div>
  );
}

export default App;
