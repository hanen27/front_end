import React from 'react';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import NavBarEmployee from '../../utils/NavBarEmployee';
import Header from '../../utils/Header';
import SideBar from '../../utils/SideBar';
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import AddDemande from './AddDemande';
import EmployeeRoute from '../../Routes/EmployeeRoute';
import Footer from '../../utils/Footer';
import { Container } from "reactstrap";



const Employee = ()=>{
    const mainContent = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContent.current.scrollTop = 0;
    }, [location]);
    const getRoutes = (EmployeeRoute) => {
        return EmployeeRoute.map((prop) => {
          if (prop.layout == "/Employee"){
            return (

              <Route
                path={prop.layout + prop.path}
                component={prop.component}
               
              />
            );
          }
          else {
            console.log (prop.name)
          }
        });
      };
    return (
        <div className="main-content" ref={mainContent}>
           <NavBarEmployee/>
           <Header/>

           <Switch>
          {getRoutes(EmployeeRoute)}
        </Switch>
        <Container fluid>
          <Footer />
        </Container>
        </div>
    )
}
export default Employee;