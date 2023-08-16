import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <h1 className="titlebank"> M & O BANK </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/home/"
              id="home-link"
              data-toggle="tooltip"
              title="Home Page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/create-account/"
              id="create-account-link"
              data-toggle="tooltip"
              title="Please have your email and password ready to Create Account."
            >
              Create Account
            </Link>
          </li>
          {!localStorage.getItem("email") ? (
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login/"
                id="login-link"
                data-toggle="tooltip"
                title="To View your Account, Please Login First"
              >
                Login
              </Link>
            </li>
          ) : (
            <li
              onClick={() => {
                localStorage.removeItem("email");
                navigate("/home/");
              }}
            >
              <Link
                className="nav-link"
                to="/home/"
                id="logout-link"
                data-toggle="tooltip"
                title="Logout"
              >
                Logout
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/deposit/"
              id="deposit-link"
              data-toggle="tooltip"
              title="Deposit Funds Here"
            >
              Deposit
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/withdraw/"
              id="withdraw-link"
              data-toggle="tooltip"
              title="Withdraw Funds Here"
            >
              Withdraw
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/balance/"
              id="balance-link"
              data-toggle="tooltip"
              title="View Recent Transactions"
            >
              Account Details
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/alldata/"
              id="alldata-link"
              data-toggle="tooltip"
              title="All Data Page"
            >
              All Data
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
