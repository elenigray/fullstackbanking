import React from 'react';
import axios from 'axios'

function Deposit() {
    const [amount, setAmount] = React.useState(0);
    const [successMessage, setSuccessMessage] = React.useState('');
    const [user, setUser] = React.useState();
    const [email, setEmail] = React.useState();
    const [balance, setBalance] = React.useState(user ? user.balance: 0);
    React.useEffect(() => {
        setEmail(localStorage.getItem("email"));
        const fetchUser = async () => {
            console.log("email", localStorage.getItem("email"));
            if (localStorage.getItem("email") === null)
            {
                return
            }
            const res = await axios.get("http://localhost:4000/user/" + localStorage.getItem("email"))
            setUser(res.data);
            console.log(res);
            console.log(user);
            setBalance(res.data.balance);
        }
        fetchUser()
    }, [])
  
    function onChange(event) {
      setAmount(+event.target.value);
    }
  
    async function handleDeposit () {
    await axios.put("http://localhost:4000/deposit", {
        email: user.email, amount
    })  
    setBalance(balance + amount);
    setSuccessMessage(`Deposit of $${amount} processed successfully.`);
      setAmount(0);
    }
  
    return email ? (
      <div className="card w-50 deposit">
        <div className="card-body deposit-body">
          <h2 className="card-title">Deposit</h2>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <span className="card-text">
            Amount: {amount}, Balance: {balance}
          </span>
          <div className="form-group">
            <label htmlFor="number-input">Amount:</label>
            <input
              id="number-input"
              className="form-control"
              type="number"
              value={amount ? amount : ''}
              onChange={onChange}
            />
          </div>
          <button
            className="btn btn-light submit-deposit"
            disabled={amount <= 0}
            onClick={handleDeposit}
          >
            Submit
          </button>
        </div>
      </div>
    ) : (
      <h1>Please Login First</h1>
    );
  }

  export default Deposit;