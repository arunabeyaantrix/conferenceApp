import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props){
    const footer ={
        backgroundColor: "#D1C4E9",
        padding: 20,
        paddingTop: 20
    }
    return(  
        
             <div style={footer}>
                <div className="container">
                    <div className="row justify-content-center">             
                        <div className="col-4 offset-1 col-sm-2">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Conferences</li>
                                <li>Contact</li>
                            </ul>
                        </div> 
                        <div className="col-7 col-sm-5">
                            <h5>Our Address</h5>
                            <address>
                            121, Neatwork Road<br />
                            Kollam, Kerala<br />
                            India<br />
                            <i className="fa fa-phone fa-lg"></i>: +91 987654321<br />
                            <i className="fa fa-fax fa-lg"></i>: +91 8989764653<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                                conferences@confo.net</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                
                                <a className="btn btn-social-icon btn-facebook mr-2" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin mr-2" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter mr-2" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google mr-2" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon mr-2" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">             
                        <div className="col-auto">
                            <p>© Copyright 2020 Conderences</p>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}
export default Footer;