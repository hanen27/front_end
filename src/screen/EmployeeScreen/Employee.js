import React from 'react';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import NavBar from '../../utils/NavBar';
import Header from '../../utils/Header';
import SideBar from '../../utils/SideBar';

const Employee = ()=>{
    const mainContent = React.useRef(null);

    return (
        <div className="main-content" ref={mainContent}>
           <NavBar/>
           <Header/>
<ProfileScreen/>
        </div>
    )
}
export default Employee;