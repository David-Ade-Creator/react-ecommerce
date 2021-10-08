import React from 'react';
import { Button, Card, Divider, Space } from "antd";
import PageLayout from '../../Components/Layout';
import PriceDetailCard from './priceDetailCard';
import CheckoutProductCard from './checkoutProductCard';

function BagPage() {
    return (
        <PageLayout>
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-7">
              <Card>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p style={{ margin: "0", padding: "0" }}>
                      Deliver to : <strong>David, 560097</strong>
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
                      Anuradha Nilayem Bangalore ...
                    </p>
                  </div>
                  <Button type="dashed">CHANGE ADDRESS</Button>
                </div>
              </Card>
              <div
                className="mt-3 mb-1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>
                  <h6>My Shopping Bag (1 Item)</h6>
                </span>
                <span>
                  <h6>Total : $ 2,996</h6>
                </span>
              </div>
              
              <CheckoutProductCard />
            </div>
            <div className="col-lg-5">
                <PriceDetailCard />
            </div>
          </div>
        </div>
        </PageLayout>
    )
}

export default BagPage
