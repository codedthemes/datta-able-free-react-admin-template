import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'

import chatMsg from './chat';
import Messages from './Messages';
import Aux from "../../../../../../../../hoc/_Aux";
import DEMO from "../../../../../../../../store/constant";

const chat = (props) => {
    let chatClass = ['header-chat'];
    if (props.chatOpen && props.listOpen) {
        chatClass = [...chatClass, 'open'];
    }

    let message = (
        <div className="media chat-messages text-center">
            <div className="media-body chat-menu-content">
                <div className="">
                    <p className="chat-cont">CHAT NOT FOUND</p>
                </div>
            </div>
        </div>
    );

    chatMsg.filter(chats => {
        if (chats.friend_id === props.user.id) {
            message = (chats.messages).map((msg, index) => {
                return <Messages key={index} message={msg} name={props.user.name} photo={chats.friend_photo} />;
            });
        }
        return false;
    });

    return (
        <Aux>
            <div className={chatClass.join(' ')}>
                <div className="h-list-header">
                    <h6>{props.user.name}</h6>
                    <a href={DEMO.BLANK_LINK} className="h-back-user-list" onClick={props.closed}><i className="feather icon-chevron-left" /></a>
                </div>
                <div className="h-list-body">
                    <div className="main-chat-cont">
                        <PerfectScrollbar>
                            <div className="main-friend-chat">
                                {message}
                            </div>
                        </PerfectScrollbar>
                    </div>
                </div>
                <div className="h-list-footer">
                    <div className="input-group">
                        <input type="file" className="chat-attach" style={{display: 'none'}} />
                        <a href={DEMO.BLANK_LINK} className="input-group-prepend btn btn-success btn-attach">
                            <i className="feather icon-paperclip" />
                        </a>
                        <input type="text" name="h-chat-text" className="form-control h-send-chat" placeholder="Write hear . . " />
                        <button type="submit" className="input-group-append btn-send btn btn-primary">
                            <i className="feather icon-message-circle" />
                        </button>
                    </div>
                </div>
            </div>
        </Aux>
    );
};

export default chat;