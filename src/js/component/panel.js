import React from 'react';
import '../../css/panel.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';

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

    renderLoginButton() {
        //Si el usuario esta logueado
        if (this.state.user) {
            return (
                <div class="gridLogin">
                   
                        <img src={this.state.user.photoURL} alt={this.state.user.displayName} className="userImage"/>
                    

                    <p >hola{this.state.user.displayName}</p>
                    <div class="button">
                    <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
                    </div>
                </div>
            );
        } else {
            //Si no esta logeado
            return (
                <div>
                <Button class="button" color="primary" onClick={this.handleAuth}>Login</Button>
                <Button class="button" color="primary">Registrar</Button>
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
                <img src={this.props.img} style={style.img} />
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
                {this.renderLoginButton()}
            </div>
        )
    }
}
Panel.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
}
export default Panel;