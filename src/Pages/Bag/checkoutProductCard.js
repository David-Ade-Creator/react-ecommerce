import { Card, Divider, Space } from 'antd';
import React from 'react'

function CheckoutProductCard() {
    return (
        <div className="container-fluid">
            <Card>
                <div style={{ display: "flex", width: "100%" }}>
                  <div style={{ padding: "0 .3rem", width: "20%" }}>
                    <img
                      src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f99bfa61-a98c-4a84-95ef-232f7a690b26/flow-2020-ispa-shoes-TGfS4n.png"
                      alt="no-loaded"
                      style={{
                        width: "100%",
                        height: "120px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div style={{display:"flex", alignItems:"center", justifyContent:"center",width: "100%"}}>
                      <p>Estimated Delivery by <strong>1 Oct 2021</strong></p>
                  </div>
                  {/* <div style={{ padding: "0 .5rem", width: "80%" }}>
                    <h6 style={{ padding: "0", margin: "0" }}>
                      ADIDAS ORIGINALS
                    </h6>
                    <p style={{ padding: "0", margin: "0" }}>
                      Sold by: Bryan Jeanstall
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                        <div>
                            <Space>
                        <span>
                        <strong>Size:10</strong>
                      </span>
                      <span>
                        <strong>Qty:10</strong>
                      </span>
                      </Space>
                      </div>
                      <span>
                        <h6>$2,996</h6>
                      </span>
                    </div>
                  </div> */}
                </div>
                {/* <Divider />
                <Space size={10}>
                  <span style={{cursor:"pointer"}}>REMOVE</span> |<span style={{cursor:"pointer"}}>MOVE TO WISHLIST</span>
                </Space> */}
              </Card>
        </div>
    )
}

export default CheckoutProductCard;
