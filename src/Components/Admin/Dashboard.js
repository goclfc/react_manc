import React from 'react'
import AdminLayout from '../../Hoc/AdminLayout';
const Dashboard = (props) => {
    return (
        <AdminLayout title="Dashboard">
            <div className='user_dashboard'>
                <div>
                    This is Dashboard
                </div>
            </div>
        </AdminLayout>
    )
}
export default Dashboard;