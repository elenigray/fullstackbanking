import React from "react";
// import Card from "./Card";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center card-container">
      <div className="col-md-8 col-lg-6">
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              {" "}
              <h1>Welcome to M & O Bank</h1>{" "}
            </Card.Title>
            <Card.Text className="text-center">
              To get started, please create an account or login using the
              navigation bar.
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="/happy.jpg" />
        </Card>

        {/* <Card
          class="card text-bg-danger mb-3" style="max-width: 100%"
          title={<h1>Welcome</h1>}
          text="To get started, please create an account or login using the navigation bar."
          body={<img src="/happy.jpg" className="img-fluid" alt="Responsive" />}
        /> */}
      </div>
    </div>
  );
}

export default Home;
