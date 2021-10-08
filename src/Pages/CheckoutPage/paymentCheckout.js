import { Col, Row, Tabs } from 'antd';
import React from 'react'
import PageLayout from '../../Components/Layout';
import PriceDetailCard from '../Bag/priceDetailCard';

const { TabPane } = Tabs;

function PaymentCheckoutPage() {
    return (
        <PageLayout>
        <div className="container mt-3 mb-3">
            <Row>
                <Col lg={16}>
                    <div className="container">
                <Tabs tabPosition='top'>
          <TabPane tab="CASH ON DELIVERY" key="1">
           
          </TabPane>
          <TabPane tab="CREDIT/DEBIT CARD" key="2">
           
          </TabPane>
          <TabPane tab="PAYTM" key="3">
           
          </TabPane>
        </Tabs>
        </div>
                </Col>
                <Col lg={8}>
                <PriceDetailCard />  
                </Col>
            </Row>
        </div>
        </PageLayout>
    )
}

export default PaymentCheckoutPage;
