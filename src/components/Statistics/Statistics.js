import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
    <>
        {title && <h3>{title}</h3>}

        <ul>
            {stats.map(stat => {
                return (<li key={stat.id}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}%</span>
                </li>)
            })}
        </ul>
    </>
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