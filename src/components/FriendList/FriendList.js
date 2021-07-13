import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => (
    <ul className={s.list}>
        {friends.map(friend =>
            <div className={s.itemWrapper} key={friend.id}>
                <FriendListItem friend={friend} />
            </div>
        )}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
};

export default FriendList;
