import React from 'react';

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
  const LigneHistorique=(props)=>{
    const item1  = props.DataHistorique;

return (
    
    <tbody>
    <tr>
      <th scope="row">
        {item1.utlisateur}
      </th>
      <td>{item1.date_debut}</td>
      <td>
       {item1.date_fin}
      </td>
      <td>
        {item1.etat}
      </td>
      <td className="text-right">
  
      </td>
    </tr>
   
  </tbody>

)
  }
  export default LigneHistorique;