import React , { Component } from 'react';
import Header from '../../utils/Header';
import Footer from '../../utils/Footer';
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
import NavBarEmployee from '../../utils/NavBarEmployee';
  class AddDemande extends Component {

    // state ={
    //   date_debut: '',
    //   date_fin: '',
    //   etat: '',
    //   user_id: '',
     
    // }
    // componentDidMount(){
    //   this.AddDemande();
    // }
    // AddDemande = async ()=>{

  
    //   let config = {
    //     method : 'POST', 
    //     url: 'http://127.0.0.1:8000/demande/' ,
    //     data: {
    //       date_debut: this.state.date_debut,
    //       date_fin: this.state.date_fin,
    //       etat: this.state.etat,
    //       user_id: this.state.user_id,
          
    //     }
    // } 
    // try{      
    //     const response =  await axios(config);
    //   console.log(response.data)
    
    // }  
    //   catch(err) {
    //     return err;
    //  } 
    // }

render () {
    return (
      <>
         {/* <div className="main-content" >

      <NavBarEmployee/>
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
                    Ajout demande
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            date_debut
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="lucky.jesse"
                            id="input-username"
                            placeholder="Username"
                            type="date"
                            onChange={(text)=>this.setState({date_debut:text.target.value})}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            date de fin
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder=""
                            type="date"
                            onChange={(text)=>this.setState({date_fin:text.target.value})}
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
                            etat
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Lucky"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                            onChange={(text)=>this.setState({etat:text.target.value})}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            id
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="number"
                            onChange={(text)=>this.setState({user_id:text.target.value})}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                
                  {/* Description */}
                  {/* <Button onClick= {()=>this.AddDemande()} > valider</Button>

                </Form>
              </CardBody>
            </Card>
          </Col>
          </Row>
        </Container>
        <Container fluid>
          <Footer />
        // </Container> */}
        </>
    // ); */}
// }
    )
  }
}
export default AddDemande;