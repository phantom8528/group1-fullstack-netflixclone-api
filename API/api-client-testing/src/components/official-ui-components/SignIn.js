import React from 'react';
import './SignIn.css';
import axios from 'axios';

class SignIn extends React.Component {

    // 1. This will hold all of out login data (i.e. email, passwords)
    constructor(props){
        super(props);
        this.state = {
            email: props.initialText || ``,
            password: props.initialText || ``,
            loginStatus: ``
        }
    }

    _handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    _handleLogin = (event) => {
        event.preventDefault(); //<-- prevents the page from refreshing
        // console.log(event.target)
        // console.log(this.state);
        axios.post('http://127.0.0.1:5000/', this.state)
            .then(response => {
                console.log(response)
                if(response.data.message){
                    this.setState({loginStatus: response.data.message})
                    console.log(response.data.message)
                }
            })

    }



    render() {
        const {email, password, loginStatus} = this.state;
        return (
            <div className="main-container">
            <img className="bk-img" src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"/>
                <div className="header">
                    <img className="logo" src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress"/>
                </div>
                <div>
                    <div className="input-container" >
                        <h3>Sign In</h3>
                            <form className="centered-input" onSubmit={this._handleLogin}>
                            <input 
                                type="text"
                                placeholder="Enter email"
                                name="email"
                                value={email} onChange={this._handleChange}
                            />
                            <div>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password} onChange={this._handleChange}
                                // value={props.value}
                                // onChange={event => console.log("value changed!")}
                            />
                            </div>
                            <div className="centered-btn">
                            <button className="btn">
                                Sign in
                            </button>

                            <button className="btn" >
                                Sign up
                            </button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default SignIn; 


