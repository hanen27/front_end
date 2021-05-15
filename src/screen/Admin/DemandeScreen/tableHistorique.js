import React from 'react';
import LigneHistorique from './LigneHistorique';
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
  } from "reactstrap";
const TableHistorique =(props)=>{
    const Data = props.donnesHistorique
    return (
        <Row className="mt-5">
        <div className="col">
          <Card className="bg-default shadow">
            <CardHeader className="bg-transparent border-0">
              <h3 className="text-white mb-0">Historique</h3>
            </CardHeader>
            <Table
              className="align-items-center table-dark table-flush"
              responsive>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Nom</th>
                  <th scope="col">date début</th>
                  <th scope="col">date fin</th>
                  <th scope="col">etat</th>
                  <th scope="col"></th>
                  <th scope="col" />
                </tr>
              </thead>
              <>
                  {Data.map((item1)=> item1.etat !="encours" &&  <LigneHistorique DataHistorique={item1}/>
                 
                   
                
                 )

}
</>
              </Table>
                </Card>
              </div>
            </Row>
               
           
    )
};
export default TableHistorique;