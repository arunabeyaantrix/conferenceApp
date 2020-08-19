import React, {Component} from 'react';
import Loading from './LoadingComponent';
import Footer from './Footer';
import Header from './Header'
import { Input, Media,Button} from 'reactstrap';


function RenderConference({item,search}){
		// if(search !== "" && item.confName.toLowerCase().indexOf(search.toLowerCase) === -1){
		//	return null;
		// }
		return(
			<>
				<div  className="col-12 mt-5">
					<Media tag="li">
						<Media left middle>
	                 	   <Media object width="500" src={item.imageURL} alt="Image Not Loaded..!!"/>
	                	</Media>
	                	<Media body className="ml-5">
	                    	<Media heading>{item.confName}</Media>
	                    	<p>Start Date : {item.confStartDate} </p>
	                    	<p>End Date : {item.confEndDate}</p>
	                    	<p>Venue &nbsp;: &nbsp; {item.venue} </p>
	                    	<p>Entry Type : {item.entryType}</p>
	                    	<p>City : {item.city} </p>
	                    	<div className="row">
	                    		<div className="col-4">
	                    		    <a href={item.confRegUrl} target="_blank"><Button color="primary">Register Now !</Button></a>
	                    			
	                    		</div>
	                    		<div className="col-4">
	                    			 <a href={item.confUrl} target="_blank"><Button color="success">View More !</Button></a>
	                    		</div>
	                    	</div>
	                    	
	                    	
	                	</Media>
					</Media>
				</div>
			</>
		);

		
	}


class Main extends Component{
	constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
            search : ""
        }
    }
    onchange = e =>{
    	this.setState({search: e.target.value})
    }
    
    componentDidMount() {
        fetch('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences')
            .then((response) => response.json())
            .then(json => {
            	
                this.setState({
                    isLoaded: true,
                    data: json.free
                })

            });
    }	
	render(){
    	var { isLoaded, data } = this.state;
    	var arr = []
    	Object.keys(data).forEach(function(key) {
	      arr.push(data[key]);
	    });
	    console.log(data)
		if (!isLoaded) {
            return (
            	<Loading />
            	);
        }
		else{
			return(
				<>
					<Header />
					<div className= "container">	
					    
						<div className="row">
							<div className="col-12">
								<Media list>
									{arr.map((item) => <RenderConference key={item.conference_id} item={item} search ={this.state}/>)}
								</Media>
							</div> 
			       		</div>
		       		</div>


		       		<Footer />
		       	</>
			);
		
		}
	}
}
export default Main;