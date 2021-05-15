import React , { Component } from 'react';
import Header from '../../../utils/Header';
import Footer from '../../../utils/Footer';
import axios from 'axios';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    
  } from "reactstrap";
import NavBar from '../../../utils/NavBar';
  class AddUser extends Component {

    state ={
      name: '',
      email: '',
      password: '',
      avatar: '',
      adresse: '',
      solde_conges: ''
    }
    componentDidMount(){
      this.AddUser();
    }
    AddUser = async ()=>{

  
      let config = {
        method : 'POST', 
        url: 'http://127.0.0.1:8000/users/' ,
        data: {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          avatar: this.state.avatar,
          adresse: this.state.adresse,
          solde_conges: this.state.solde_conges
        }
    } 
    try{      
        const response =  await axios(config);
      console.log(response.data)
    
    }  
      catch(err) {
        return err;
     } 
    }

render () {
    return (
      <>
         <div className="main-content" >

      <NavBar/>
      </div>
      <Header/>
      <Container className="mt--7" fluid>
      <Row style ={{paddingLeft:"25%"}}>
      <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="lucky.jesse"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                            onChange={(text)=>this.setState({name:text.target.value})}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                            onChange={(text)=>this.setState({email:text.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            password
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Lucky"
                            id="input-first-name"
                            placeholder="First name"
                            type="password"
                            onChange={(text)=>this.setState({password:text.target.value})}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            adresse
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                            onChange={(text)=>this.setState({adresse:text.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            photo
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                            onChange={(text)=>this.setState({avatar:text.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                         
                        <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Solde Conges
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                            onChange={(text)=>this.setState({solde_conges:text.target.value})}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                        
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                         
                        
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <Button onClick= {()=>this.AddUser()} > valider</Button>

                </Form>
              </CardBody>
            </Card>
          </Col>
          </Row>
        </Container>
        <Container fluid>
          <Footer />
        </Container>
        </>
    );
}
  }
export default AddUser;