import React from 'react';
import axios from 'axios';

import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Button,
  } from "reactstrap";
  const apiUpdate = axios.create({
   baseURL: 'http://127.0.0.1:8000/updatedemande'
  })
const Ligne =(props)=>{
    
    const item  = props.DATAtoLigne;
    function handleClick(e) {
        e.preventDefault();
      }
   const acceptDemande = (id) =>{
        const resultat =  apiUpdate.put(`/${id}`, {"etat":"accepter"})
        
        
        
    }
    const rejeterDemande = (id) =>{
        const resultat =  apiUpdate.put(`/${id}`, {"etat":"rejeter"})
    }
        return (
           
          <>
                    <tbody>
                      <tr>
                        <th scope="row">
                          {item.utlisateur}
                        </th>
                        <td>{item.date_debut}</td>
                        
                        <td>
                         {item.date_fin}
                        </td>
                        <td>
                          {item.etat}
                        </td>
                        <td className="text-right">
                        <Button
                    className="float-right"
                    color="secondary"
                    
                    onClick={rejeterDemande(item.id) }          
                             size="sm"
                  >
                    Rejeter
                  </Button>
                  <Button
                    className="float-right"
                    color="success"
                   
                    onClick={acceptDemande(item.id) }          

                    size="sm"
                 >
                      
                    Accepter
                  </Button>
                        </td>
                      </tr>
                     
                    
                    </tbody>
                    </>
                
            
        
        )
  
    
}
export default Ligne;