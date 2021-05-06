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

class Demandes extends Component {
state = {
  Donnes : []
};
  constructor() {
    super();
   
  };
  async componentDidMount (){
   const res = await api.get('/')
   this.setState({Donnes : res.data});
  
  };
 

  render (){
  return (
<>
<Header/>
<Container className="mt--7" fluid>

<Tables Donnes={this.state.Donnes} />
<TableHistorique donnesHistorique={this.state.Donnes}/>
</Container>
    
      </>
  );
};
};
export default Demandes;
