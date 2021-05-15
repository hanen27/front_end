import React, { Component } from "react";
import Header from "../../../utils/Header";
import Tables from './tables';
import TableHistorique from './tableHistorique';
// reactstrap components

import axios from 'axios';
import { Container } from "reactstrap";
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/alldemande'
})
const apiUpdate = axios.create({
   baseURL: 'http://127.0.0.1:8000/updatedemande'
  })
class Demandes extends Component {
state = {
  Donnes : []
};
  constructor() {
    super();
   
  };
  async getData (){
  const  res = await api.get('/')
   this.setState({Donnes : res.data});
  }
   componentDidMount (){
   this.getData();
  
  };
   acceptDemande = (id) =>{
    apiUpdate.put(`/${id}`, {"etat":"accepter"}) 
    this.getData();
   
}
  rejeterDemande = (id) =>{
    apiUpdate.put(`/${id}`, {"etat":"rejeter"})
this.getData();

}
 

  render (){
  return (
<>
<Header/>
<Container className="mt--7" fluid>

<Tables Donnes={this.state.Donnes} actionAccpte={this.acceptDemande} actionRejter={this.rejeterDemande} />
<TableHistorique donnesHistorique={this.state.Donnes} />
</Container>
    
      </>
  );
};
};
export default Demandes;
