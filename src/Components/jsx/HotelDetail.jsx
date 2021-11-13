import { Link } from 'react-router-dom'
import '../css/HotelDetail.css'

export const HotelDetail=()=>{

    return(
        <>
            <div className='container-1'>
                <div className='name-address'><h5>SPOT ON 80671 Bakhtawar Guest House</h5>
                    <div className='location'>
                    Nakraunda, Dehradun, Uttarakhand, Dehradun, Uttarakhand, India, Uttarakhand
                    </div>
                    <div className='check-in-out'>
                        <p className=''>Check-in : Sat, 02 Oct 12:00 PM</p>
                        <p>Check-out : Sun, 03 Oct 11:00 AM</p>
                        <p>, 1 Room , 1 Adult</p>
                    </div>
                </div>
                <div><p className='price'>₹999</p>
                    <p className='room-booked-for'>1 Room and 1 Night</p>
                    <button className='btn-select-room'>Select Room</button>
                </div>
                <div className='logo'>
                    <img src='https://static.abhibus.com/img/abhilogos/logo1.png'></img>
                </div>
            </div>
            <div className='detail-room-nav'>
                <div><Link>Room Type</Link></div>
                <div><Link>Amenities</Link></div>
                <div><Link>Policies</Link></div>
                <div><Link>About</Link></div>
                <div><Link>Booked Reviews</Link></div>
            </div>
        </>
    )
}