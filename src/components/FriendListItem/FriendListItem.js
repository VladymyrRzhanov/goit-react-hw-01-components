import PropTypes from 'prop-types';
import s from "./FriendListItem.module.css";

const FriendListItem = ({ friend: { isOnline, avatar, name } }) => (
    <li className={s.item}>
        <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
        <img className={s.itemImage} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
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