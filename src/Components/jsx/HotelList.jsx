import { Link, useLocation } from "react-router-dom";
import "../css/HotelList.css";
import axios from "axios";
import { useEffect, useState } from "react";
export const HotelList = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("city");
  const u = new URLSearchParams(search).get("date");
  const v = new URLSearchParams(search).get("date1");
  console.log(name, u, v);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3004/hotels`)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <>
      <div className="main-div" style={{ paddingTop: "60px" }}>
        <div className="location-text">
          <h5>Dehradun</h5>
          <p>215 Hotels found</p>
        </div>
        <div className="check-in-out-div">
          <p>Check-in: {u}</p>
          <p>Check-out: {v}</p>
          <span>.1 Room . 1 Adult</span>
        </div>
      </div>
      <div className="sort-by-section">
        <p>Sort by:</p>
        <select
          onInputCapture={(e) => {
            console.log(e.target.value);
            let y = e.target.value;
            axios
              .get(`http://localhost:3004/hotels?_sort=price&_order=${y}`)
              .then(function (res) {
                setData(res.data);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          <option value="dsfsdf">Recomended</option>
          <option value="asc">Price Low to High</option>
          <option value="desc">Price High to Low</option>
        </select>
      </div>
      <div style={{ width: "100%", display: "block" }} className="container-1">
        <div style={{ width: "20%", float: "left" }} className="select-hotel">
       
          <input
            onChange={(e) => {
              axios
                .get(`http://localhost:3004/hotels?name=${e.target.value}`)
                .then(function (res) {
                  setData(res.data);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
            className="hotel-input-name"
            placeholder="Search by hotel"
          ></input>
          {/* drop down checkbox select start */}
         <div id="input_box" style={{paddingLeft:"40px",width:"100%",backgroundColor:"",textAlign:"left"}}>
         <div>
         {/* "AC": true,
          "Wifi": true,
          "Breakfast": true,
          "Restaurant": true,
          "Swimming pool": true,
          "ATM": true,
          "Card Payment": true,
          "Gym": true,
          "Parking": true,
          "Bar": false,
          "Banquet hall": false,
          "Conference room": false,
          "Gym": false,
          "Spa": false */}
            <input
              onClick={(e) => {
                if (e.target.checked) {
                    axios
                    .get(`http://localhost:3004/hotels?${e.target.value}=true`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }else{
                    axios
                    .get(`http://localhost:3004/hotels`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }console.log(e.target.value)
              }}
              type="checkbox"
              id="Wifi"
              name="interest"
             
            />
            <label for="Wifi">Wifi</label>
          </div>
          <div>
            <input  onClick={(e) => {
                if (e.target.checked) {
                    axios
                    .get(`http://localhost:3004/hotels?${e.target.value}=true`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }else{
                    axios
                    .get(`http://localhost:3004/hotels`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }console.log(e.target.value)
              }} type="checkbox" id="Breakfast" name="interest" value="Breakfast" />
            <label for="Breakfast">Breakfast</label>
          </div>{" "}
          <div>
            <input
              onClick={(e) => {
                if (e.target.checked) {
                    axios
                    .get(`http://localhost:3004/hotels?${e.target.value}=true`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }else{
                    axios
                    .get(`http://localhost:3004/hotels`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }console.log(e.target.value)
              }}
              type="checkbox"
              id="coding"
              name="interest"
              value="ATM"
            />
            <label for="ATM">ATM</label>
          </div>
          <div>
            <input  onClick={(e) => {
                if (e.target.checked) {
                    axios
                    .get(`http://localhost:3004/hotels?${e.target.value}=true`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }else{
                    axios
                    .get(`http://localhost:3004/hotels`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }console.log(e.target.value)
              }} type="checkbox" id="music" name="interest" value="Spa" />
            <label for="Spa">Spa</label>
          </div>{" "}
          <div>
            <input
              onClick={(e) => {
                if (e.target.checked) {
                    axios
                    .get(`http://localhost:3004/hotels?${e.target.value}=true`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }else{
                    axios
                    .get(`http://localhost:3004/hotels`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }console.log(e.target.value)
              }}
              type="checkbox"
              id="coding"
              name="interest"
              value="Gym"
            />
            <label for="Gym">Gym</label>
          </div>
          <div>
            <input  onClick={(e) => {
                if (e.target.checked) {
                    axios
                    .get(`http://localhost:3004/hotels?${e.target.value}=true`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }else{
                    axios
                    .get(`http://localhost:3004/hotels`)
                    .then(function (res) {
                      setData(res.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }console.log(e.target.value)
              }} type="checkbox" id="music" name="interest" value="Bar" />
            <label for="Bar">Bar</label>
          </div>
         </div>
          {/* drop down checkbox select ends */}
        </div>
        <div
          className="example"
          style={{
            float: "right",
            display: "block",
            width: "69%",
            marginRight: "2%",
            marginBottom:"50px",
            overflow: "auto",
            height: "850px",
          
          }}
        >
          {data.map((e) => {
            return (
              <div
                style={{
                  display: "block",
                  width: "100%",
                  height: "180px",
                  border: "0.09px solid rgb(214, 214, 214)",

                  marginBottom: "22px",
                  paddingRight: "15px",
                }}
              >
                <div style={{ width: "32%", float: "left", height: "100%" }}>
                  <img className="hotel-image" src={e.images[0]}></img>
                </div>
                <div style={{ paddingLeft: "20px", textAlign: "left" }}>
                  <p style={{ paddingLeft: "20px" }} className="hotel-name">
                    {e.name}
                  </p>
                  <p style={{ paddingLeft: "90px" }} className="hotel-location">
                    {e.location}{" "}
                  </p>
                  <p className="check-in-out">
                    Check-in : 12:00 PM | Check-out : 11:00 AM
                  </p>
                  <div style={{ marginTop: "40px" }} className="amentity-div">
                    <img
                      className="amentity"
                      src="https://www.svgrepo.com/show/274161/wifi.svg"
                    ></img>
                    <img
                      className="amentity"
                      src="https://www.svgrepo.com/show/133841/food.svg"
                    ></img>
                    <img
                      className="amentity"
                      src="https://www.svgrepo.com/show/125026/debit-card.svg"
                    ></img>
                    <img
                      className="amentity"
                      src="https://www.svgrepo.com/show/116198/parking.svg"
                    ></img>
                  </div>
                </div>
                <div style={{ marginTop: "-90px" }} className="room-price">
                  <p className="price"> ₹ &nbsp;{e.price}</p>
                  <Link to={`/Payment/${e.id}`}><button>reserve</button></Link>     
                  <p className="room-booked-for"> 1 room and 1 night</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
