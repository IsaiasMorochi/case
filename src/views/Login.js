import React from 'react'
import app from "../base";
class Login extends React.Component {
    constructor(props){
        super(props)
    }

    handleSignUp = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          const user = await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
            localStorage.setItem('user',JSON.stringify(user));
          this.props.history.push("/profile");
        console.log(user)
        } catch (error) {
          alert(error);
        }
        
      };
    render(){
      
        return (
            <div className="col-xs-12 col-sm-6">
        <h1>Log in</h1>
        <form className="form-control " onSubmit={this.handleSignUp}>
          <label>
            Email
            <input
              style={{ width: "100%" }}
              name="email"
              type="email"
              placeholder="Ingrese su email..."
            />
          </label>

          <label>
            Password
            <input
              style={{ width: "100%" }}
              name="password"
              type="password"
              placeholder="Ingrese su contrasena"
            />
          </label>

          <button className="btn btn-success" type="submit">
            Ingresar
          </button>
        </form>
      </div>
        )
    }
}

export default Login