import React, { Component } from "react"
import "./SignIn.scss"
import FormInput from "../form-input/FormInput"
import CustomButton from "../../components/custom-button/CustomButton"

import { signInWithGoogle } from "../../firebase/firebase.utils"

export class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ email: "", password: "" })
  }

  // [Name] in this function is a dynamic property value it takes the name= from both inputs so it can be repurposed
  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput label="Email" name="email" type="email" value={this.state.email} handleChange={this.handleChange} required />

          <FormInput label="Password" name="password" type="password" value={this.state.password} handleChange={this.handleChange} required />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
