import AddDemande from '../screen/EmployeeScreen/AddDemande';
import Employee from '../screen/EmployeeScreen/Employee';
import dashboard from '../screen/Admin/DashboardScreen/Dashboard';
import ProfileScreen from '../screen/EmployeeScreen/ProfileScreen/ProfileScreen';


var EmployeeRoute  = [
    {
       path: '/profile',
        name: 'profile',
        component: Employee,
        Layout : "/Employee"
        

    },
    {
        path: '/Add',
        name: 'demande',
        component: dashboard,
        Layout : "/Employee"
    }
]
export default EmployeeRoute;