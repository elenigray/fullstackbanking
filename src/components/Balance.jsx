import React from 'react';
import axios from 'axios';
import Card from './Card';

function Balance() {
    const email = localStorage.getItem("email");
    const [user, setUser] = React.useState();
    React.useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("http://localhost:4000/user/" + localStorage.getItem("email"))
            setUser({...res.data});
            console.log(res);
            console.log(user);
            console.log(localStorage.getItem("email"));
        }
        fetchUser()
    }, [])

    return (email)?(
      <>
      <Card 
      title={<h1>Account Details</h1>}
      body={<table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {(user?user.history:[]).slice(0).reverse().map((elem, indx) => {
          return (
            <tr key={indx}>
              <td>{elem.timestamp}</td>
              <td>{elem.type}</td>
              <td>{elem.amount}</td>
              <td>{elem.balance}</td>
            </tr>
          );
        })}
      </tbody>
    </table>}></Card>
        
      </>
    ): (
      <h1>Please Login First</h1>
    )
  }
  
  export default Balance;