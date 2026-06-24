import {useState} from 'react';

const Billing = () => {
  const [billAmount, setBillAmount] = useState("");
  const [cashAmount, setCashAmount] = useState("");
  const [upiAmount, setUpiAmount] = useState("");

  const bill = Number(billAmount) || 0;
  const cash = Number(cashAmount) || 0;
  const upi = Number(upiAmount) || 0;

  const totalPaid = cash + upi;
  const change = totalPaid > bill ? totalPaid - bill : 0;
  const balance = bill - totalPaid;

  return (
    <div>

      <h1>Cash Management System</h1>

      <div>
        <label htmlFor="billAmount">Bill Amount</label>
        <input
          type="number"
          id="billAmount"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cashAmount">Cash Amount</label>
        <input
          type="number"
          id="cashAmount"
          value={cashAmount}
          onChange={(e) => setCashAmount(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="upiAmount">UPI Amount</label>
        <input
          type="number"
          id="upiAmount"
          value={upiAmount}
          onChange={(e) => setUpiAmount(e.target.value)}
        />
      </div>

      <div>
        <p>Total Paid: {totalPaid.toFixed(2)}</p>
        <p>Change: {change.toFixed(2)}</p>
        <p>Balance: {balance.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Billing