import React, { Component } from 'react';
import axios from 'axios';

import './loginStyle.css';
import Header from '../../utils/Header';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Container
  } from "reactstrap";
  
import { Link } from 'react-router-dom';

   class Login extends Component{

state = {
  email:'',
  password:''
}
constructor() {
  super();
  this.login();
 
};

handleEmail(text){
  this.setState({email:text.target.value});
}

handlePassword(text){
  this.setState({password:text.target.value});
}

login = async ()=>{

  let config = {
    method : 'POST', 
    url: 'http://127.0.0.1:8000/auth/login' ,
    data: {
      email: this.state.email,
      password: this.state.password
    }
} 
try{      
    const response =  await axios(config);

if (response.data.roles=="ROLE_USER"){
  this.props?.history.push('/employee')
   localStorage.setItem("id", response.data.id)
   localStorage.setItem("email", response.data.email)
  localStorage.setItem("password", response.data.password)
   localStorage.setItem("adresse", response.data.adresse)
   localStorage.setItem("avatar", response.data.avatar)
   localStorage.setItem("name",response.data.name)
   localStorage.setItem("solde conges",response.data.solde_conges)






}
else if (response.data.roles=="ROLE_ADMIN"){
  this.props?.history.push('/admin')
}
else {
  this.props?.history.push('/login')
  alert("error");

}
}  
  catch(err) {
    return err;
 } 
// this.props?.history.push('/admin')

}
render(){
       return (
        <div className="main-content" >

         <Header/>
        <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
        <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={(text)=>{this.handleEmail(text)}}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(text)=>{this.handlePassword(text)}}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox" 
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Link >
                <Button onClick= {this.login}className="my-4" color="primary" type="button">
                  Sign in
                </Button>
                </Link>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
      </Row>
      </Container>
      </div>
      );
   }
   }
   export default Login;