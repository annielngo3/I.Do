import React, { Component } from "react";
// import API from "../utils/API";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import "../components/Nav/";
import "../components/Nav/style.css";
import Container from "../components/Container";
// import API from "../utils/API";
import axios from 'axios';

class Users extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        isUserSignUp: false,
        loginemail: "",
        loginpassword: ""
    };

    // componentDidMount() {
    //   this.loadBooks();
    // }

    // loadBooks = () => {
    //   API.getBooks()
    //     .then(res =>
    //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //     )
    //     .catch(err => console.log(err));
    // };

    // deleteBook = id => {
    //   API.deleteBook(id)
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignUpForm = event => {
        this.setState({ isUserSignUp: !this.state.isUserSignUp });
    }


    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.password === this.state.password2) {
    //         // alert("Passwords Match!");
    //         let userInfo = {
    //             firstName: this.state.firstName, 
    //             lastName: this.state.lastName,
    //             email: this.state.email,
    //             password: this.state.password
    //             };
    //             // console.log(userInfo);
    //         API.createUser(userInfo, function(result){
    //             console.log("result on handleFormSubmit result");
    //             // return result
    //         }); 
            
    //     } else {
    //         alert("Pleas have matching passwords!")
    //     }
      
    // }
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.password === this.state.password2) {
            // alert("Passwords Match!");
            let userInfo = {
                firstName: this.state.firstName, 
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
                };
                console.log(userInfo);
            axios.post(`/api/v1/users`, userInfo, function(results){
                console.log(results)
            }).then(res =>{
                console.log("res.data on handleformsubmit",res.data);
            })
            
        } else {
            alert("Pleas have matching passwords!")
        }
      
    }

    handleFormLogin = event => {
        event.preventDefault();
            alert("Congratualations! You're the one!");
    }

    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   if (this.state.title && this.state.author) {
    //     API.saveBook({
    //       title: this.state.title,
    //       author: this.state.author,
    //       synopsis: this.state.synopsis
    //     })
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   }
    // };

    render() {
        return (
            <div>
               <Container>
                    <h2>{this.state.isUserSignUp ? "sign up with i.Do to get started!" : "login to your account"}</h2>
                        <Button
                            onClick={this.handleSignUpForm}
                        >
                        {this.state.isUserSignUp ? "Login" : "Sign Up"}
                        </Button>   

                            {this.state.isUserSignUp ?
                                <form className="formClass" id="createAccountForm">
                                    <Input
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        name="firstName"
                                        placeholder="First Name (required)"
                                    />
                                    <Input
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        name="lastName"
                                        placeholder="Last Name (required)"
                                    />
                                    <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        placeholder="Email (required)"
                                    />
                                    <Input
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        placeholder="Password (required)"
                                    />
                                    <Input
                                        value={this.state.password2}
                                        onChange={this.handleInputChange}
                                        name="password2"
                                        placeholder="Re-enter Password"
                                    />
                                    <Button id="createAccountButton"
                                        disabled={!(this.state.firstName && this.state.email)}
                                        onClick={this.handleFormSubmit}
                                    >
                                        Submit
                                    </Button>
                                </form>
                                :  
                                <form className="formClass" id="loginForm">
                                    {/* Login */}
                                    <Input
                                        value={this.state.loginemail}
                                        onChange={this.handleInputChange}
                                        name="loginemail"
                                        placeholder="Email (required)"
                                    />
                                    <Input
                                        value={this.state.loginpassword}
                                        onChange={this.handleInputChange}
                                        name="loginpassword"
                                        placeholder="Password (required)"
                                    />
                                    <Button id="loginButton"
                                        disabled={!(this.state.loginemail && this.state.loginpassword)}
                                        onClick={this.handleFormLogin}
                                    >
                                        Login
                                    </Button>
                                </form>
                             }
                </Container>
            </div>
        )
    }
};



export default Users;
