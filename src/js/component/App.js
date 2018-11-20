import React, { Component } from 'react';
import ChatRoom from './ChatRoom.js';
import '../../css/panel.css';
import Chat from '../../img/chat.png';

class App extends Component {
    render() {
        return (
            <div className='PanelD'>
                <div>
                    <img src={Chat} />
                    <h1>Sala de Chat</h1>
                    <div className='chat'>
                        <ChatRoom />
                    </div>

                </div>
            </div>


        )
    }
}

export default App;