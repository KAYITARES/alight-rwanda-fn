import React from "react";
import Blogs from "../components/blogs";
import NavBar from "../components/navbar";
import Footer from "../components/footer";


export default function Blog(){
return (
    <>
    <NavBar/>
    <div className="blogs-all">
    <div className="blogs-head">
    <h1>TRENDING NEWS IN ALIGHT ORGANISATION</h1>
    <p>‘’ Alight it opened a news school of coding in 2 camps 
it called nyabiheke coding school and also opened in 
mahampa coding school at gatsibo district and kirehe
district for more info read more ’’</p>
    </div>
   
    <div className="blogs">
        <Blogs title = 'nyabiheke coding' desc = 'hafuguwe ishuli rishya nyabiheke'/>
        <Blogs title = 'nyabiheke coding' desc = 'hafuguwe ishuli rishya nyabiheke'/>
        <Blogs title = 'nyabiheke coding' desc = 'hafuguwe ishuli rishya nyabiheke'/>
        <Blogs title = 'nyabiheke coding' desc = 'hafuguwe ishuli rishya nyabiheke'/>
        <Blogs title = 'nyabiheke coding' desc = 'hafuguwe ishuli rishya nyabiheke'/>
        <Blogs title = 'nyabiheke coding' desc = 'hafuguwe ishuli rishya nyabiheke'/>
    </div>
    </div>
    
        <Footer/>
    </>
)
}