import { Button, Card, Divider } from 'antd'
import React from 'react'

function PriceDetailCard() {
    return (
        <Card>
                    <div>
                        <div>
                            <h6>PRICE DETAILS (1 Item)</h6>
                            <Divider/>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <span><p>Total MRP</p></span> <span><p>$11,999</p></span>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <span><p>Shipping Fee</p></span> <span><p>$19</p></span>
                            </div>
                            <Divider/>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <span><h6>Total Amount</h6></span> <span><h6>$11,999</h6></span>
                            </div>
                        </div>
                        {/* <Button style={{width:"100%", marginTop:"2rem"}} type="danger">PLACE ORDER</Button> */}
                    </div>
                </Card>
    )
}

export default PriceDetailCard
