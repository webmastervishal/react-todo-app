import React from 'react';
import Layout from './Layout';
import Todos from './Todos/Todos';

const Dashboard = (props) => {
    return <Layout>
        <Todos />
    </Layout>
}

export default Dashboard;