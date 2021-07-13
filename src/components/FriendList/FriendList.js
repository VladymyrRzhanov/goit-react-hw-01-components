import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";
import React from 'react'

const FriendList = ({ friends }) => (
    <ul className={s.list}>
        {friends.map(friend =>
            <React.Fragment  key = {friend.id}>
                <FriendListItem friend={friend}/>
            </React.Fragment>
        )}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
};

export default FriendList;
