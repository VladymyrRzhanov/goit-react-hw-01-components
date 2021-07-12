import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => (
    <ul>
        {friends.map(friend =>
            <div key={friend.id}>
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
