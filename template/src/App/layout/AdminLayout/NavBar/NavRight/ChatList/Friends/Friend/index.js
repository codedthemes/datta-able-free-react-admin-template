import React from 'react';

import Aux from "../../../../../../../../hoc/_Aux";
import DEMO from "../../../../../../../../store/constant";
const images = require.context('../../../../../../../../assets/images/user', true);

const friend = (props) => {
    let photo = images(`./${props.data.photo}`);
    let timeClass = ['d-block'];
    if (props.data.status) {
        timeClass = [...timeClass, 'text-c-green'];
    } else {
        timeClass = [...timeClass, 'text-muted'];
    }

    let time = '';
    if (props.data.time) {
        time = <small className={timeClass.join(' ')}>{props.data.time}</small>;
    }

    let newFriend = '';
    if (props.data.new) {
        newFriend = <div className="live-status">{props.data.new}</div>;
    }

    return (
        <Aux>
            <div className={props.activeId === props.data.id ? 'media userlist-box ripple active' : 'media userlist-box ripple'} onClick={props.clicked}>
                <a className="media-left" href={DEMO.BLANK_LINK}> <img className="media-object img-radius" src={photo} alt={props.data.name}/>{newFriend}</a>
                <div className="media-body">
                    <h6 className="chat-header">{props.data.name}{time}</h6>
                </div>
            </div>
        </Aux>
    );
};

export default friend;