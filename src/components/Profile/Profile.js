import PropTypes from 'prop-types';
import Container from "../Container/Container";
import s from "./Profile.module.css";

const Profile = ({ avatar, name, tag, location, stats: { followers, views, likes } }) => (
    <Container>
        <div className={s.card}>
            <div>
                <img className={s.imgProfile}
                    src={avatar}
                    alt={name}
                />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.list}>
                <li className={s.item}>
                    <span className={s.stat}>Followers</span>
                    <span className={s.statValue}>{followers}</span>
                </li>
                <li className={s.item}>
                    <span className={s.stat}>Views</span>
                    <span className={s.statValue}>{views}</span>
                </li>
                <li className={s.item}>
                    <span className={s.stat}>Likes</span>
                    <span className={s.statValue}>{likes}</span>
                </li>
            </ul>
        </div>
    </Container>
);

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,

    }).isRequired,
};

export default Profile;