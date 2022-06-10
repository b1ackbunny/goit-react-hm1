import s from "./Transactions.module.css"
export function TransactionsHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
          {items.map((item) => (
                      <tr key={item.id}>
                      <td>{item.type}</td>
                      <td>{item.amount}</td>
                      <td>{item.currency}</td>
                    </tr>
          ))}
      </tbody>
    </table>
  );
}
