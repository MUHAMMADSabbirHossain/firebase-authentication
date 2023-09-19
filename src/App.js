import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

const auth = getAuth(app);

function App() {

  // input usestate hooks
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

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
        setError(false);

      })
      .catch(error => {
        console.error(error.code);
        setError(true);
        setMessage(error.code);
      });
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
        <section className='my-5'>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onBlur={handleEmailInput} type="email" placeholder="Enter email" />
              <Form.Text className="text-white">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handlePasswordInput} type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I don't have any Accoutn yet." />
            </Form.Group>

            <>
              {
                error && <p className='text-danger'>{message}</p>
              }
              {
                !error && <p className='text-success'>You have successfully login</p>
              }
            </>

            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </section>
      </header>
    </div>
  );
}

export default App;
