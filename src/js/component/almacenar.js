import React from 'react';
import '../../css/panel.css';
import firebase from 'firebase';
import FileUpload from './FileUpload';

import Upload from '../../img/upload.png';

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



                    <FileUpload />

                </div>
            );
        } else {
            //Si no esta logeado
            return (
                <div>
                    <input color="primary" type="file" disabled onChange={this.handleUpload} />
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
            <div className='PanelD'>
                <div className="contenidoPanel">
                    <img src={Upload} />
                    <h2>Subir Foto</h2>
                    <p>Sube tus fotos y comparte tu experiencia con los demás</p>
                    
                        {this.renderLoginButton()}
                    

                </div>

            </div>
        )
    }
}
export default Panel;