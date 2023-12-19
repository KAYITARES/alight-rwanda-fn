import React from "react";
import HeaderDash from "./header";
import DashHome from "./dashhome";
import Sidebar from "./sidebar";
import { useState } from "react";


export default function Dashboard(){
const [OPensidebar,SetOpensidebar] = useState(false)

const HandleOPenSidebar = () => {
    SetOpensidebar(!OPensidebar)
}
    return (
        <>
            <div className="dashboard-container">
            <HeaderDash HandleOPenSidebar= {HandleOPenSidebar}/>
            <Sidebar OPensidebar={OPensidebar}/>
            <DashHome/>
            
            </div>
                
           
        </>
    )
}