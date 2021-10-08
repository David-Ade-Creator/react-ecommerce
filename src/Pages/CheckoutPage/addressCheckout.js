import { Col, Row } from 'antd';
import React from 'react'
import PageLayout from '../../Components/Layout';
import CheckoutProductCard from '../Bag/checkoutProductCard';
import PriceDetailCard from '../Bag/priceDetailCard';
import AddressComponent from '../Profile/AddressComponent';

function AddressCheckoutPage() {
    return (
        <PageLayout>
        <div className="container mt-3 mb-3">
            <Row>
                <Col lg={16}>
                <AddressComponent />
                <CheckoutProductCard /> 
                </Col>
                <Col lg={8}>
                <PriceDetailCard />  
                </Col>
            </Row>
        </div>
        </PageLayout>
    )
}

export default AddressCheckoutPage;
