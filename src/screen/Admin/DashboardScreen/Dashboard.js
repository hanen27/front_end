import React from 'react';
import SideBar from '../../../utils/SideBar';
import Demandes from '../DemandeScreen/Demandes';
import NavBar from '../../../utils/NavBar';
import { Row } from 'reactstrap';
import Footer from '../../../utils/Footer';
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Container } from "reactstrap";
import Header from '../../../utils/Header';
import routes from '../../../Routes/AdminRoutes';
import AddUser from '../AddUseScreen/AddUser';
  const Admin=(props)=> {
    const mainContent = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContent.current.scrollTop = 0;
    }, [location]);
    const getRoutes = (routes) => {
      return routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        } else {
          console.log('heyy')
        }
      
      });

    };
  
    
  
  
    return (
   
   
   <div className="main-content" ref={mainContent}>
        <NavBar
       
       />
          <Switch>
          {getRoutes(routes)}
        </Switch>
        <Container fluid>
          <Footer />
        </Container>
     </div>  
    )};
    export default Admin;