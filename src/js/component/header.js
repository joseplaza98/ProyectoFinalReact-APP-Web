import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../../css/panel.css';
import Logo from '../../img/logo.png';
/** import firebase from 'firebase';*/



class Header extends React.Component {
/**
 *  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);


  }


  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    })
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log('${result.user.email} ha iniciado sesion'))
      .catch(error => console.log('Error ${error.code}: ${error.message}'));


  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log('${result.user.email} ha cerrado la sesion'))
      .catch(error => console.log('Error ${error.code}: ${error.message}'));
  }

  renderLoginButton() {
    //Si el usuario esta logueado
    if (this.state.user) {
      return (
        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName}></img>
          <p>hola{this.state.user.displayName}</p>
          <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
        </div>
      );
    } else {
      //Si no esta logeado
      return (
        <Button color="inherit" onClick={this.handleAuth}>Login</Button>
      );
    }

  }

 */

  render() {

    return (
      <div className='root'>
        <AppBar position="static">
          <Toolbar>
            <IconButton className='menuButton' color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className='grow'>
              Global Learning
              </Typography>
              
              <img src={Logo} class="logo"/>
            
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
export default Header;