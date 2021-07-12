import PropTypes from 'prop-types';

const FriendListItem = ({ friend: { isOnline, avatar, name } }) => (
    <li>
        <span>{isOnline}</span>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
    </li>
);

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};

export default FriendListItem;