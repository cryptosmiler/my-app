import React , { Component } from "react";

class Navber extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li><a href="#home">Logo</a></li>
                        <li style={{float: right}}><a href="#home">Home</a></li>
                        <li style={{float: right}}><a href="#news">News</a></li>
                        <li style={{float: right}}><a href="#about">About</a></li>
                        <li style={{float: right}}><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}