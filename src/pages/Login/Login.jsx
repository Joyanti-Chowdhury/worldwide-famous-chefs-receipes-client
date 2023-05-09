import React, { useContext, useEffect ,} from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const {signIn,user} = useContext(AuthContext);
  const navigate  = useNavigate()
  const location = useLocation();
  console.log('login',location);
  const from = location.state?.from?.pathname || '/home';


  
    const handleLogin = event => {
       event.preventDefault();
       const from = event.target;
      const email = from.email.value;
      const password = from.password.value;
      console.log(email,password);


      signIn(email,password)
      .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser);
          // navigate(from ,{ replace :true});
      })
      .catch(error =>{
        console.log(error);
      })

    }

    useEffect(()=>{
      if(user){
      navigate(from,{replace:true})
      }
      },[user])

    return (
        <Container className='mx-auto w-25'>
          <h3>Please Login</h3>
        <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password"  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button  variant="info" type="submit">
      Log In
      </Button>
      <br></br>
      <Form.Text className="text-muted">
        Don't Have an account?    <Link to="/register">Register</Link>
       </Form.Text>
      <Form.Text className="text-success">
       
       </Form.Text>
       <Form.Text className="text-danger">
       
       </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;