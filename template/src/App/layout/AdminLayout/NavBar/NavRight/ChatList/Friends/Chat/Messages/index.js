import React from 'react';

import Aux from "../../../../../../../../../hoc/_Aux";
import DEMO from "../../../../../../../../../store/constant";
const images = require.context('../../../../../../../../../assets/images/user', true);

const messages = (props) => {
    let image = '';
    if (props.message.type) {
        image = (
            <a className="media-left photo-table" href={DEMO.BLANK_LINK}>
                <img className="media-object img-radius img-radius m-t-5" src={images(`./${props.photo}`)} alt={props.name} />
            </a>
        );
    }

    let msgClass = ['media-body'];
    if(props.message.type) {
        msgClass = [...msgClass, 'chat-menu-content'];
    } else {
        msgClass = [...msgClass, 'chat-menu-reply'];
    }

    return (
        <Aux>
            <div className="media chat-messages">
                {image}
                <div className={msgClass.join(' ')}>
                    <div className="">
                        <p className="chat-cont">{props.message.msg}</p>
                    </div>
                    <p className="chat-time">{props.message.time}</p>
                </div>
            </div>
        </Aux>
    );
};

export default messages;