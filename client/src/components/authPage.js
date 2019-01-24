import React, { Component } from "react";

export class authPage extends Component {
  state = {
    email: "",
    password: "",
    cpassword: "",
    activeTab: "1",
    name: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onLogIn = async e => {
    e.preventDefault();
    try {
      await this.props.logIn(this.state.email, this.state.password);
      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      });
    } catch (err) {
      console.log(err);
      alert("ERROR");
    }
  };
  onSignUp = async e => {
    e.preventDefault();
    if (this.state.password !== this.state.cpassword) {
      alert("Password not matching");
    } else {
      try {
        await this.props.signUp(
          this.state.firstname,
          this.state.lastname,
          this.state.email,
          this.state.password
        );
        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          password: ""
        });
        alert("Registered! now sign In");
      } catch (err) {
        console.log(err);
        alert("Error");
      }
    }
  };

  render() {
    return (
      <div>
        <p>Login</p>
      </div>
    );
  }
}

export default authPage;
