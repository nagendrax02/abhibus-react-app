import { Link } from "react-router-dom"
import '../Components/Header.css'
export const CheckOut = () => {
    return (
        <>
            <div className='header'>
                 <div className='logo'><Link to='/'><img src='https://static.abhibus.com/img/abhilogos/logo1.png' alt='logo'></img> </Link> </div>
                <div className='link-item'>
                    <div className='link'> <Link to='/offers'>Offers</Link>  </div>
                    <div className='link'> <Link to='/freeRides'>Free Rides</Link> </div>
                    <div className=' dropdown link'>
                        <Link className='dropBtn' to='/myBooking'> My Bookings
                            <div className='dropdown-content'>
                                <Link to='/printBooking'>Print Booking</Link>
                                <Link to='/cancelBooking'>Cancel Booking</Link>
                            </div>
                        </Link>
                    </div>
                    
                    <div>  <button className='loginBtn'> <img src='https://static.abhibus.com/assets/img/prime-user.png'></img>   Login / Register</button></div>
                </div>

            </div>
            <hr className='header-hr-line'></hr>
        </>
    )
}