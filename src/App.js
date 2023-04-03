import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      picture: "",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        this.setState({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          phone: user.phone,
          picture: user.picture.large,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClick = (event) => {
    const type = event.target.name;
    let value;
    switch (type) {
      case "email":
        value = this.state.email;
        break;
      case "phone":
        value = this.state.phone;
        break;
      case "happybirth":
        value = "12 de Febrero";
        break;
      case "name":
        value = this.state.name;
        break;
      case "address":
        value = "Calle 19A #45-67";
        break;
      case "password":
        value = "Gatito1";
        break;
      default:
        value = "";
        break;
    }
    this.setState({ type, value });
  };

  render() {
    const { type, value, picture } = this.state;
    return (
      <div className="container">
        <img
          src={picture}
          alt="profile"
          className="profile-image"
        />
        <h2 className="email-title">My email address is:</h2>
        <h1 className="email">{value}</h1>
        <div className="button-container">
          <button className="button" name="name" onClick={this.handleClick}>
            Nombre
          </button>
          <button className="button" name="email" onClick={this.handleClick}>
            Correo
          </button>
          <button className="button" name="happybirth" onClick={this.handleClick}>
            Cumpleaños
          </button>
          <button className="button" name="address" onClick={this.handleClick}>
            Direccion
          </button>
          <button className="button" name="phone" onClick={this.handleClick}>
            Telefono
          </button>
          <button className="button" name="password" onClick={this.handleClick}>
            Contraseña
          </button>
        </div>
      </div>
    );
  }
}

export default App;