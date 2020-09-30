import React from 'react';
import FriendIcon from './FriendIcon/FriendIcon';
import s from './Friends.module.css';

const Friends = (props) => {

    let drawFriends = props.friends.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
    });

    drawFriends = drawFriends.map(el => {
        if (el.avatar == '') {
            el.avatar = "https://www.vippng.com/png/full/416-4161690_empty-profile-picture-blank-avatar-image-circle.png";
        }
        return <FriendIcon name={el.name} surname={el.surname} avatar={el.avatar} />;
    });

    return (
        <div>
            <h2>Friendlist:</h2>
            {drawFriends}
        </div>
    );
};

export default Friends;