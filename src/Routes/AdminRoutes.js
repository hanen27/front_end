import Demandes from '../screen/Admin/DemandeScreen/Demandes' 
import AddUser from '../screen/Admin/AddUseScreen/AddUser'
import Dashboard from '../screen/Admin/DashboardScreen/Dashboard'
import Login from '../screen/loginScreen/login';
var routes = [
    {
        path: "/demandes",
        name: "Demandes",
        component: Demandes ,
        Layout : "/admin"
    },
    {
        path: "/AddUser",
        name: "AddUser",
        component: AddUser ,
        Layout : "/admin"

        
    },
    
]

export default  routes;
