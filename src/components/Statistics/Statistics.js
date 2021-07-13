import PropTypes from 'prop-types';
import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => (
    <div className={s.container}>
        {title && <h3 className={s.title}>{title}</h3>}

        <ul className={s.list}>
            {stats.map(stat => {
                return (<li className={s.item} style={{backgroundColor: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}} key={stat.id}>
                    <span className={s.label}>{stat.label}</span>
                    <span className={s.value}>{stat.percentage}%</span>
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