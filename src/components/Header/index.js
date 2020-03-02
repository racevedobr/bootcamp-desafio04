import React, { Component } from 'react';
import './styles.css'
import Logo from '../../assets/facebook-1.png'

class Header extends Component {
  render() {
    return(
      <>
      <header id="header">
        <nav>
        <img src={Logo} alt="Facebook" />
      <a href="">Meu perfil</a>
        </nav>

      </header>

      </>
    )
  }
}

export default Header;