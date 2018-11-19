import React, { Component } from 'react';
import firebase from 'firebase';
import '../../css/panel.css';

class FileUpload extends Component {
    constructor() {
        super();
        this.state = {

            uploadValue: 0,
            picture: null
        };

        this.handleUpload = this.handleUpload.bind(this);

    }

    handleUpload(event) {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/Fotos/${file.name}`);
        const task = storageRef.put(file);

        task.on('state_changed',snapshot => {
            let percentage = (snapshot.bytesTransderred / snapshot.totalBytes)*100;
            this.setState({
                uploadValue: percentage
            })
        }, error => {
            console.log(error.message)
        }, () => {
            this.setState({
                uploadValue:100,
                picture: task.snapshot.downloadURL
            });
        });
    }


    render() {
        return (
            <div className="contenidoPanel">
                <progress value={this.state.uploadValue} max="100" ></progress>
                <br />
                <br />
                <br />
                <input type="file" onChange={this.handleUpload} />
                <br />
                <br/>
                <img className="imgUpload" src={this.state.picture} alt="" />
            </div>
        );

    }
}

export default FileUpload;