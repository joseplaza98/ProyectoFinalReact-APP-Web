import React, { Component } from "react";
import firebase from 'firebase';



class ChatRoom extends Component {

    constructor() {
        super();
        this.state = {
            message: '',
            messages: [

            ]
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log('enter');
        const list = this.state.messages;
        const newMessage ={
            id: this.state.messages.length,
            text: this.state.message
        };
        //list.push(newMessage);
        //this.setState({messages: list});

        //window.firebase...
        firebase.database().ref(`messages/${newMessage.id}`).set(newMessage);
        this.setState({message: ''});
        //this.state({message: ''});
    }

    updateMessage(e) {
        this.setState({ message: e.target.value });
        console.log(this.state.message);
    }

    componentDidMount(){
        //window.firebase...
       firebase.database().ref('messages/').on('value',snap => {

            const currentesssages = snap.val();

            if (currentesssages !== null){
                this.setState({
                //this.state({
                    messages: currentesssages
                });
            }
        });
    }

    render() {

        const { messages } = this.state;
        const messagesList = messages.map(message => {
            return <li key={message.id}>{message.text}</li>
        });

        return (
            <div>
                <ul>
                    {messagesList}
                </ul>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        value={this.state.message}
                        onChange={this.updateMessage.bind(this)}
                    />
                    <button type="submit">
                        Send
                    </button>
                    
                </form>
                <br/>
            </div>
            

        )
    }
}

export default ChatRoom;