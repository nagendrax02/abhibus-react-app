import { Link } from 'react-router-dom'
import './HotelList.css'

export const HotelList = ()=>{
    return (
        <>
  
        <div className='main-div'>
            <div className='location-text'><h5>Dehradun</h5>
                <p>215 Hotels found</p>
            </div>
            <div className='check-in-out-div'>
                <p>Check-in: Oct 1,2021</p>
                <p>Check-out: Oct 2, 2021</p>
                <span>.1 Room . 1 Adult</span>
                </div>
        </div>
        <div className='sort-by-section'><p>Sort by:</p>
            <select>
                <option value="">Recomended</option>
                <option value="">Price Low to High</option>
                <option value="">Price High to Low</option>

            </select>
        </div>
        <div className='container-1'>
            <div className='select-hotel'>
                <input className='hotel-input-name' placeholder='Search by hotel'></input>
                
                {/* drop down checkbox select start */}
                <div class="dropdown">
  <button  class="dropbtn">Locality</button>
  <div id="myDropdown" class="dropdown-content">
        <Link>link -1</Link>
        <Link>link -1</Link>
        <Link>link -1</Link>
        
  </div>
</div>
        {/* 2 */}
        <div class="dropdown">
  <button  class="dropbtn">Price Range</button>
  <div id="myDropdown" class="dropdown-content">
  <label for="points">₹ 747 - ₹ 8872</label>
<input type="range" id="points" name="points" min="747" max="8872"/>
        
  </div>
</div>
{/* 3 */}
<div class="dropdown">
  <button  class="dropbtn">Amenties</button>
  <div id="myDropdown" class="dropdown-content">
        <Link>link -1</Link>
        <Link>link -1</Link>
        <Link>link -1</Link>
        
  </div>
</div>
 {/* 4 */}
 <div class="dropdown">
  <button  class="dropbtn">Guest Rating</button>
  <div id="myDropdown" class="dropdown-content">
        <Link>link -1</Link>
        <Link>link -1</Link>
        <Link>link -1</Link>
        
  </div>
</div>
                {/* drop down checkbox select ends */}
            </div>
            <div className='ind-hotel'>
                    <div className='hotel-desc'><img className='hotel-image' src='https://images.oyoroomscdn.com/uploads/hotel_image/112419/small/875124747c7f5224.jpg'></img></div>
                    <div><p className='hotel-name'>SPOT ON 80671 Bakhtawar Guest H</p>
                        <p className='hotel-location'>Nakraunda, Dehradun, Uttarakhand, Dehradun </p>
                        <p className='check-in-out'>Check-in : 12:00 PM | Check-out : 11:00 AM</p>
                        <div className='amentity-div'>
                            <img className='amentity' src='https://www.svgrepo.com/show/274161/wifi.svg'></img>
                            <img className='amentity' src='https://www.svgrepo.com/show/133841/food.svg'></img>
                            <img className='amentity' src='https://www.svgrepo.com/show/125026/debit-card.svg'></img>
                            <img className='amentity' src='https://www.svgrepo.com/show/116198/parking.svg'></img>
                            
                        </div>
                    </div>
                    <div className='room-price'>
                        <p className='price'> ₹ &nbsp;800</p>
                            <button>reserve</button>
                            <p className='room-booked-for'> 1 room and 1 night</p>
                    </div>
            </div>
        </div>
        </>
    )
}