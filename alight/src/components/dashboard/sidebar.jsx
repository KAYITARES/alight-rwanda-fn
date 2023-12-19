import React from "react";
import {BsCart3} from 'react-icons/bs';
import GridViewIcon from '@mui/icons-material/GridView';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button } from "@mui/material";
export default function Sidebar({OPensidebar}){
    return(
        <>
        <aside id="sidebar" className={OPensidebar ? 'sidebar-responsive' :""}>
        <div className="sidebar-title">
        <div className="sidebar-brand">
        <b> <img src="https://media.licdn.com/dms/image/D4D0BAQG2nVRtKzmAvQ/company-logo_200_200/0/1683013988731?e=2147483647&v=beta&t=xBmpo-7nZLp42UIwjUrkfWsBbvc7B3tOdorYbqIB1jA" alt="alight"/>ALIGHT-RWANDA</b>
        </div>
        <span className="icon icon_close">X</span>
        </div>
        <ul className="sidebar-list">
            <li className="side-list-items">
                <a href="@" className="item">
                    <GridViewIcon className="icon"/>DASHBOARD
                </a>
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <PersonIcon className="icon"/>USER
                </a>
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <BookIcon className="icon"/>BLOGS<ArrowDropDownIcon className="icon"/>
                </a>
                <ul className="dropdowns">
                <li><a href="@" className="items">Post-blogs</a></li>
                <li><a href="@" className="items">GetAll-blogs</a></li>
                <li><a href="@" className="items">Comment</a></li>
                </ul>
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <TextFieldsIcon className="icon"/>FORMS<ArrowDropDownIcon className="icon"/>
                    
                </a>
                <ul className="dropdowns">
                <li><a href="@" className="items">blog-form</a></li>
                <li><a href="@" className="items">Job-form</a></li>
                <li><a href="@" className="items">program form</a></li>
                </ul>
                
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <MonetizationOnIcon className="icon"/>BUDGET
                </a>
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <BsCart3 className="icon"/>WARE-HOUSE<ArrowDropDownIcon className="icon"/>
                </a>
                <ul className="dropdowns">
                <li><a href="@" className="items">Import products</a></li>
                <li><a href="@" className="items">Export products</a></li>
                <li><a href="@" className="items">Income</a></li>
                </ul>
            </li>
            <li className="side-list-items">
                <a href="@" className="item">
                    <SettingsIcon className="icon"/>SETTINGS
                </a>
            </li>
        </ul>
        <div className="side-btn">
        <Button className="btn">sign out</Button>
        </div>
        
        </aside>
           
        </>
    )
}