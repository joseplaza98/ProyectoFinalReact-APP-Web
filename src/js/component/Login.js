import React from 'react';
import '../../css/panel.css';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';


import Login from '../../img/login.png';

class Panel extends React.Component {

    constructor() {
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

    //Alertas
    state = {
        open: false,
      };
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };


    renderLoginButton() {
        //Si el usuario esta logueado
        if (this.state.user) {
            return (
                <div class="gridLogin">

                    <img src={this.state.user.photoURL} alt={this.state.user.displayName} className="userImage" />
                    <p >{this.state.user.displayName}</p>
                    <Button color="primary" onClick={this.handleLogout}>Logout</Button>
                    

                </div>
            );
        } else {
            //Si no esta logeado
            return (
                <div>
                    <Button  color="primary" onClick={this.handleAuth}>Login</Button>
                    <Button  color="primary">Registrar</Button>
                    
                </div>

            );
        }

    }

    render() {
        const style = {
            img: {
                width: 50,
                height: 50,
                textAlign: 'center'
            }
        }
        return (
            <div className='Panel'>
                <img src={Login} />
                <h2>Inicio sesión</h2>
                <p>Bienvenido a Global Learning</p>
                {this.renderLoginButton()}
            </div>
        )
    }
}
export default Panel;