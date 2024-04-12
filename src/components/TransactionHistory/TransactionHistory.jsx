import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items } = itemsObj) {
    return (
        <table className={css.table}>
            <thead className={css.thread}>
                <tr>
                <th className={css.title}>Type</th>
                <th className={css.title}>Amount</th>
                <th className={css.title}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr className={css.item} key={item.id}>
                        <td className={css.text}>{item.type}</td>
                        <td className={css.text}>{item.amount}</td>
                        <td className={css.text}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}