import React , { Component } from 'react';
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

  const api = axios.create({
    
    baseURL: 'http://127.0.0.1:8000/user'
  })
class ProfileScreen extends Component{
  state ={
    name: '',
    email: '',
    password: '',
    avatar: '',
    adresse: '',
    name:'',
    solde_conges: ''
  }
  componentDidMount(){
   
    this.getData();
    this.Update();
  }
  async getData (){
    var id = localStorage.getItem("id")

    const  res = await api.get(`/${id}`)
    this.setState({name : res.data.utlisateur, email: res.data.email, password: res.data.password,
    avatar: res.data.avatar, adresse: res.data.adresse, solde_conges: res.data.solde_conges});

    }
  Update = async ()=>{
var id = localStorage.getItem("id")
    let config = {
      method : 'PUT', 
      url: `http://127.0.0.1:8000/update/${id}` ,
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
      const res =  await axios(config);
      this.setState({name : res.data.utlisateur, email: res.data.email, password: res.data.password,
        avatar: res.data.avatar, adresse: res.data.adresse, solde_conges: res.data.solde_conges});
        console.log(this.state)
  
  }  
    catch(err) {
      return err;
   } 
  }
  render(){
    return (
        
       
         <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
               
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                       
                      </div>
                      <div>
                        
                      </div>
                      <div>
                        
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                  {this.state.name}

                    <span className="font-weight-light"></span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {this.state.email}
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    {this.state.adresse}

                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Solde Conges :  {this.state.solde_conges}

                  </div>
                  <hr className="my-4" />
                  <p>
                    
                   
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    
                  </Col>
                  <Col className="text-right" xs="4">
                    
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Modifier Profil
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            placeholder={this.state.name}
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
                            Email 
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder={this.state.email}
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
                            id="input-first-name"
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
                            Adresse
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder={this.state.adresse}
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
                            
                            id="input-address"
                            placeholder={this.state.avatar}
                            type="text"
                            onChange={(text)=>this.setState({avatar:text.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                        
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                         <Button onClick= {()=>this.Update()}>Modifier</Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                 
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>  
      
    )
}
}
export default ProfileScreen;