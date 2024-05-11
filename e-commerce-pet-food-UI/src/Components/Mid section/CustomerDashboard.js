import { FaUserCircle, FaBox, FaHeart } from 'react-icons/fa';
import '../../CSS/Mid Section/CustomerDashboard.css'
import { useLocation } from 'react-router-dom';


const CustomerDashboard = ({deleteLogedInUser}) => {

    const location = useLocation();

    const { customer } = location.state || JSON.parse(localStorage.getItem('user'));

    return (
        <main className="customer-dashboard">
            <header>
                <h1>My Dashboard</h1>

                <div className="header-actions">
                    <button className='editProfileBtn'>Edit Profile</button>
                    <button onClick={deleteLogedInUser} className='logoutBtn'>Logout</button>
                </div>

            </header>

            <section className="profile">
                <h3>Profile</h3>

                <div className="profile-card">
                    <div className="avatar">
                        <FaUserCircle size={60} />
                    </div>

                    <div>
                        <h3>{`${customer.firstName} ${customer.lastName}`}</h3>
                        <p>{customer.email}</p>
                    </div>

                </div>

            </section>

            <section className="quick-links">
                <div className="link-card">
                    <FaBox size={40} />
                    <h3>Orders</h3>
                </div>

                <div className="link-card">
                    <FaHeart size={40} />
                    <h3>Wishlist</h3>
                </div>
            </section>

        </main>
    );

}

export default CustomerDashboard;