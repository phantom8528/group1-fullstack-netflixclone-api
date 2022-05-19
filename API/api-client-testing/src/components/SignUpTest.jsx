import React from "react";
import axios from 'axios';
// import { response } from "express";
// import e from "express";

class SignUpTest extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            first_name: props.initialText || ` `,
            last_name: props.initialText || ` `,
            email: props.initialText || ` `,
            password: props.initialText || ` `
        }
    }

    _handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault(); //<-- prevents the page from refreshing
        // console.log(event.target)
        // console.log(this.state);
        axios.post('http://127.0.0.1:5000/signup', this.state)
            .then(response => {
                console.log(response)
            })
    }


    render(){
        const {first_name, last_name, email, password} = this.state;
        return(
            <div>
                <form onSubmit={this._handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="first_name" value={first_name} onChange={this._handleChange}></input>
                        {/* <input type="text" name="first_name" value={first_name} /> */}

                    </div>

                    <div>
                        <label>Last Name</label>
                        <input type="text" name="last_name" value={last_name} onChange={this._handleChange}></input>
                        {/* <input type="text" name="last_name" value={last_name} /> */}

                    </div>

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
                        <button type="submit">Create Users</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpTest;