import s from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ title, children }) => (
    <section className={s.section}>
        <div className={s.container}>
            <h2 className={s.title}>
                {title}
            </h2>
            {children}
        </div>
    </section>
);

Container.propTypes = {
    title: PropTypes.string,
};

export default Container;