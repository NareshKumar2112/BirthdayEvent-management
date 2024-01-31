import React from 'react'
import dash1 from "../assets/images/dash1.png"
import dash2 from "../assets/images/dash2.png"
import dash3 from "../assets/images/dash3.png"
import dashimg from "../assets/images/dashimage.jpg"
import Navbar from '../components/Navbar'
import del from "../assets/images/delete.png"
import "../assets/css/Dashboard.css"
export default function Dashboard() {
  return (
    <div>
    <Navbar/>
    <div className='dash-topcontainer'>
    <div className='dash-subcontainer1'>
    <img src={dash2}/>
    <h1>Events Booked</h1>
    <h2>10</h2>
    </div>
    <div className='dash-subcontainer1' style={{backgroundColor:"rgb(80, 27, 80)",boxShadow:"10px 10px rgb(250, 183, 248)"}}>
    <img src={dash3}/>
    <h1>Upcoming Events</h1>
    <h2>7</h2>
    </div>
    <div className='dash-subcontainer1' style={{backgroundColor:"rgb(0, 71, 30)",boxShadow:"10px 10px rgb(133, 233, 133)"}}>
    <img src={dash1}/>
    <h1>Events History</h1>
    <h2>15</h2>
    </div>
    </div>
    <div className='dash-sidepanel'>
    <h1>View events</h1>
    <h1>Profile</h1>
    <h1>History</h1>
    <h1>Logout</h1>
    </div>
    <div className='dash-container'>
    <div className='dash-subcontainer2'>
    <div className='dash-design'>
    <h2>1</h2>
    <h2>event1</h2>
    <h2>21/12/2012</h2>
    <h2>9 days to go</h2>
    <button>Location</button>
    <img src={del}/>
    </div>
    </div>
    <div className='dash-subcontainer2'>
    <div className='dash-design'>
    <h2>1</h2>
    <h2>event1</h2>
    <h2>21/12/2012</h2>
    <h2>9 days to go</h2>
    <button>Location</button>
    <img src={del}/>
    </div>
    </div>
    <div className='dash-subcontainer2'>
    <div className='dash-design'>
    <h2>1</h2>
    <h2>event1</h2>
    <h2>21/12/2012</h2>
    <h2>9 days to go</h2>
    <button>Location</button>
    <img src={del}/>
    </div>
    </div>
    <div className='dash-subcontainer2'>
    <div className='dash-design'>
    <h2>1</h2>
    <h2>event1</h2>
    <h2>21/12/2012</h2>
    <h2>9 days to go</h2>
    <button>Location</button>
    <img src={del}/>
    </div>
    </div>
    <div className='dash-subcontainer2'>
    <div className='dash-design'>
    <h2>1</h2>
    <h2>event1</h2>
    <h2>21/12/2012</h2>
    <h2>9 days to go</h2>
    <button>Location</button>
    <img src={del}/>
    </div>
    </div>
    <div className='dash-subcontainer2'>
    
    </div>
    <div className='dash-subcontainer2'>
    
    </div>
    <div className='dash-subcontainer2'>
    
    </div>
    
    </div>
    </div>
  )
}
