import PropTypes from 'prop-types';
import randomColor from "../../utils/randomColor";
import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => (
    <div className={s.container}>
        {title && <h3 className={s.title}>{title}</h3>}

        <ul className={s.list}>
            {stats.map(({id,label,percentage}) => {
                return (<li className={s.item} style={{backgroundColor: randomColor()}} key={id}>
                    <span className={s.label}>{label}</span>
                    <span className={s.value}>{percentage}%</span>
                </li>)
            })}
        </ul>
    </div>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};

export default Statistics;