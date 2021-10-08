import React from "react";
import { Button, Card } from "antd";
import "./style.css";
import { Link } from "react-router-dom";

function Listing({orderComponent}) {

  return (
    <div style={{ display: "flex", justifyContent: "center" }} className="container">
      {/* filter comes here */}
      <div style={{ flexBasis: "100%" }}>
        <div className="container-fluid p-4">
          <div className="row">
         {!orderComponent ? <div className="col-lg-2 col-md-4 col-sm-4 col-6 mb-2">
           <Link to={`/product/${"1234"}`}>
              <Card
                bordered={false}
                bodyStyle={{ padding: ".5rem" }}
                cover={
                  <img
                    alt="example"
                    src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg"
                    className="card-img"
                    style={{ borderRadius: "5px" }}
                  />
                }
              >
                <h6 style={{ margin: "0" }}>Huetrap</h6>
                <p style={{ margin: "0" }}>Men Printed T-Shirts</p>
                <div className="price-wish">
                  <span>$45</span>
                  <span>$45</span>
                </div>
              </Card>
              </Link>
            </div> : <div className="col-lg-3 col-md-4 col-sm-4 col-6 mb-2">
            <Link to={`/product/${"1234"}`}>
              <Card
                bordered={false}
                bodyStyle={{ padding: ".5rem" }}
                cover={
                  <img
                    alt="example"
                    src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg"
                    className="card-img"
                    style={{ borderRadius: "5px" }}
                  />
                }
              >
                <h6 style={{ margin: "0" }}>Huetrap</h6>
                <p style={{ margin: "0" }}>Men Printed T-Shirts</p>
                <div className="price-wish">
                <Button>Track Order</Button>
                  <Button>Cancel Order</Button>
                </div>
              </Card>
              </Link>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
