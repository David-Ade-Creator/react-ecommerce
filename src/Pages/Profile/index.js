import React from 'react';
import { Divider, Tabs } from 'antd';
import PageLayout from '../../Components/Layout';
import ProfileComponent from './ProfileComponent';
import OrderComponent from './OrderComponent';
import AddressComponent from './AddressComponent';

const { TabPane } = Tabs;

function ProfilePage() {
    return (
        <PageLayout>
        <div className="container pt-4">
            <div style={{padding:"0 1.5rem"}}>
            <h6><strong>Account</strong></h6>
            <p>Bryan Gills</p>
            </div>
            <Divider/>
           <Tabs tabPosition='left'>
          <TabPane tab="Profile" key="1">
            <ProfileComponent/>
          </TabPane>
          <TabPane tab="Orders & Returns" key="2">
            <OrderComponent/>
          </TabPane>
          <TabPane tab="Addresses" key="3">
            <AddressComponent />
          </TabPane>
        </Tabs>
        </div>
        </PageLayout>
    )
}

export default ProfilePage;
