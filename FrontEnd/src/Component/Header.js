import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Input, Label } from 'reactstrap';
import {Form, FormControl, FormGroup} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const navcomp = {
  position : "absolute",
  right: 50
}

class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
               <Navbar dark expand="md">
                    <div className = "container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"> 
                        <img src="assets/images/logo.png" height="30" width="41" alt="Restaurant"/>
                    </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar pullRight style={navcomp}>
                               
                                <Form inline >
                                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                  
                                </Form>
                                
                            </Nav>
                            
                        </Collapse>   
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className= "col-12 col-sm-6">
                                <h1 style={{color:"black"}}>Conferences</h1>
                                <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius in augue id imperdiet. Pellentesque gravida risus eget feugiat condimentum!</p>
                            </div>
                        </div>
                    </div>

                </Jumbotron>
            </React.Fragment>
        ); 
    }
}
export default Header;