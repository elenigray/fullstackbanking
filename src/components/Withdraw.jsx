import React from 'react';
import axios from 'axios';

function Withdraw() {
    const [amount, setAmount] = React.useState(0);
    const [successMessage, setSuccessMessage] = React.useState('');
    const [user, setUser] = React.useState();
    const [email, setEmail] = React.useState();
    const [balance, setBalance] = React.useState(user ? user.balance: 0);
    React.useEffect(() => {
        setEmail(localStorage.getItem("email"));
        const fetchUser = async () => {
            if (localStorage.getItem("email") === null)
            {
                return
            }
            const res = await axios.get("https://elenigrayexpressserver-a99ad020f881.herokuapp.com/user/" + localStorage.getItem("email"))
            console.log(email);
            setUser(res.data);
            console.log(res.data);
            setBalance(res.data.balance);
            console.log("user", user);
        }
        fetchUser()
        console.log(user);
    }, [])


    function onChange(event) {
      setAmount(event.target.value);
    }
  
    async function handleWithdrawal() {
      console.log('Handle withdrawal called.');
    
  
      if (isNaN(amount)) {
        alert('Please enter a valid number.');
        return;
      }
  
      const withdrawAmount = parseFloat(amount);
  
      if (withdrawAmount <= 0) {
        alert('Please enter a positive amount.');
        return;
      }
  
      if (withdrawAmount > balance) {
        alert('Account balance is insufficient for withdrawal.');
        return;
      }
  await axios.put("https://elenigrayexpressserver-a99ad020f881.herokuapp.com/withdraw", {
    amount, email: user.email
  })
    //   ctx.user.history.push({
    //     timestamp: new Date(),
    //     type: 'withdrawal',
    //     amount: withdrawAmount,
    //     balance: newBalance,
    //   });

    setBalance(balance - withdrawAmount);
  
      setSuccessMessage(`Withdrawal of $${withdrawAmount} processed successfully.`);
      setAmount('');
    }
  
    return email ? (
      <div className="card w-50 withdraw">
        <div className="card-body withdraw-body">
          <h2 className="card-title">Withdraw</h2>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <span className="card-text">
            Amount = {amount}, Balance = {balance}
          </span>
          <div className="form-group">
            <label htmlFor="number-input">Amount:</label>
            <input
              id="number-input"
              className="form-control"
              type="number"
              value={amount}
              onChange={onChange}
            />
          </div>
          <button
            className="btn btn-light submit-withdraw"
            disabled={!amount}
            onClick={handleWithdrawal}
          >
            Submit
          </button>
        </div>
      </div>
    ) : (
      <h1>Please Login First</h1>
    );
  }

export default Withdraw;