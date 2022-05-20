import React from "react";
import ContentPageTest from "./ContentPageTest";
import './Homepage.css';

class HomepageTest extends React.Component{
    render(){
        return(
            <div >
                {/* <h1>The is the User's Homepage</h1> */}
                <div className="homepage-container">
                    <ContentPageTest />
                </div>


            </div>
        )
    }
}


export default HomepageTest;