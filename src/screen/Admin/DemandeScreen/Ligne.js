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
  
  
const Ligne =(props)=>{
    
    const item  = props.DATAtoLigne;

  
  
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
                    
                             size="sm"
                             onClick={()=>props.rejeter(item.id) }          

                  >
                    Rejeter
                  </Button>
                  <Button
                    className="float-right"
                    color="success"
                   
                    onClick={()=>props.accepter(item.id) }          

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