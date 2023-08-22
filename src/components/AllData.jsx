import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card';

function AllData() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
       const allData = async () => {
        let res = await axios.get("https://elenigrayexpressserver-a99ad020f881.herokuapp.com/alldata")
        setUsers(res.data);
       }
    allData();
    }, [])
  
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">All Data</h5>
          <p className="card-text">{JSON.stringify(users)}</p>
        </div>
      </div>
    );
  }

export default AllData;