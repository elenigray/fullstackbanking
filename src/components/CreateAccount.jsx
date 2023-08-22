import React from "react";
import axios from "axios";
import Card from "./Card";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  async function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    await axios.post("https://elenigrayexpressserver-a99ad020f881.herokuapp.com/create-account/", {
      name,
      email,
      password,
    });
    // ctx.setUsers([{ name, email, password, balance: 0, history: [] }, ...ctx.users]);
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <>
      <div className="d-flex justify-content-center account">
        <div className="card w-50">
          <div className="card-header">Create Account</div>
          <div className="card-body cardbackground">
            {show ? (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="input"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="input"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                  {password.length < 8 && (
                    <div className="alert alert-danger mt-3">
                      Password must be at least 8 characters long.
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={handleCreate}
                  disabled={!name || !email || !password}
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                <h5>Success</h5>
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={clearForm}
                >
                  Add another account
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// function CreateAccount() {
//   return (
//     <div className="container mt-5">
//       <UserContext.Provider value={{ users: [] }}>
//         <CreateAccount />
//       </UserContext.Provider>
//     </div>
//   );
// }

export default CreateAccount;
