import React from "react";
import axios from 'axios';

class SignInTest extends React.Component{

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

    render(){
        const {email, password, loginStatus} = this.state;
        return(
            <div>
                <h1>This is the Sign-In Page</h1>
                <form onSubmit={this._handleLogin}>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={this._handleChange}></input>
                        {/* <input type="text" name="email" value={email} /> */}

                    </div>

                    <div>
                        <label>Password</label>
                        <input type="text" name="password" value={password} onChange={this._handleChange}></input>
                        {/* <input type="text" name="password" value={password} /> */}

                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>

                    <div>
                        <h2>{loginStatus}</h2>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInTest;

