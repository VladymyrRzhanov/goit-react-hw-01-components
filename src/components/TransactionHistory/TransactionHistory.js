import PropTypes from 'prop-types';
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
    <table className={s.table}>
        <thead className={s.thead}>
            <tr>
                <th className={s.heading}>Type</th>
                <th className={s.heading}>Amount</th>
                <th className={s.heading}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr className={s.tableRow} key={id}>
                    <td className={s.tableData}>{type}</td>
                    <td className={s.tableData}>{amount}</td>
                    <td className={s.tableData}>{currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
};

export default TransactionHistory;