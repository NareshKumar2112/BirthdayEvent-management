import React from 'react'
import "../assets/css/Service.css"
import cake1 from"../assets/images/cake1.jpg"
import cake2 from"../assets/images/cake2.jpg"
import cake3 from"../assets/images/cake3.jpg"
import cake4 from "../assets/images/cake4.jpg"
import food1 from "../assets/images/vegmeal.jpg"
import food2 from "../assets/images/nonvegmeal.jpg"
import act1 from "../assets/images/gameshow.jpg"
import act2 from "../assets/images/djshow.jpg"
import act3 from "../assets/images/danceshow.jpg"
import act4 from "../assets/images/magicshow.jpg"
import hall1 from "../assets/images/hall1.jpg"
import hall2 from "../assets/images/hall2.jpg"
import hall3 from "../assets/images/hall3.jpg"
import hall4 from "../assets/images/hall4.jpg"
import hall5 from "../assets/images/hall5.jpg"
import hall6 from "../assets/images/hall6.jpg"
import { Link } from '@mui/material'
import Navbar from '../components/Navbar'
import { Navigate, useNavigate } from 'react-router-dom';

function Services() {

    const navigate=useNavigate();
    const handleNav=()=>
    {
        navigate("/booking")

    }
  return (
    <div>
    <Navbar/>
    <div className='title-heading'>
    <h1>Cakes</h1>
    </div>
    <div className='cake-container'>
    <div className='cake-sub-container'>
    <img src={cake1}/>
    <h1>Multi-layer Cake</h1>
    <p>Looking for some eye-catching and mouth-watering birthday cakes for your child’s birthday? 
    Too many options out there ending up in a confusion? Here is Birthday Bumps,
     your event planners who’ll arrange it for you. If there are any options from your side</p>
     <button>Place</button>
    </div>
    <div className='cake-sub-container' style={{marginLeft:"2cm"}}>
    <img src={cake2}/>
    <h1>Icecream Cake</h1>
    <p>Birthday Bumps specialize in cakes for birthday parties. We have a range of lip-smacking 
    cakes to please all your little guests. Either choose from our exquisite range or we can have the cakes customized,
     at Birthday Bumps imagination run wilds in all.</p>
     <button>Place</button>
    </div>
    <div className='cake-sub-container' style={{marginRight:"2cm"}}>
    <img src={cake3}/>
    <h1>Cup Cake</h1>
    <p>A dash of decoration here and there on a cupcake, enough to make it look cute, 
    that’s how we Birthday Bumps make cupcakes. Since a child’s birthday happens to come only once a year,
     it has to have the most innovative of the cupcakes the guests have ever had.</p>
     <button>Place</button>
    </div>
    <div className='cake-sub-container'>
    <img src={cake4}/>
    <h1>Chocolate Cake</h1>
    <p>Ask any child what is his favorite dish and without giving a second thought he'd say chocolates. 
    After cakes, in a birthday party the most alluring thing for children is chocolates. 
    It would be an amazing idea to come up with fancy chocolates.</p>
    <button>Place</button>
    </div>
    </div>
    <div className='title-heading'>
    <h1>Party Hall</h1>
    </div>
    <div className='hall-container'>
    <div className='hall-sub-container'>
    <img src={hall1}/>
    <h1>Nk Hall</h1>
    <p>
    Street:  3078 Echo Lane<br></br>

City:  Riverside<br></br>

State/province/area:   Michigan<br></br>

Phone number:  269-849-0443<br></br>


Country:  United States
    </p>
    <button>Place</button>
    </div>
    <div className='hall-sub-container'>
    <img src={hall2}/>
    <h1>Wonderland Hall</h1>
    <p>
    Street:  2186 Tail Ends Road<br></br>

    City:  Port Hueneme Cbc Base<br></br>
    
    State/province/area:   California<br></br>
    
    Phone number:  920-558-2798<br></br>


Country:  United States
    </p>
    <button>Place</button>
    </div>
    <div className='hall-sub-container'>
    <img src={hall3}/>
    <h1>Ben Party Hall</h1>
    <p>
    Street:  1432 Dogwood Lane<br></br>

City:  Tucson<br></br>

State/province/area:   Arizona<br></br>

Phone number:  520-618-5912<br></br>


Country:  United States
    </p>
    <button>Place</button>
    </div>
    <div className='hall-sub-container'>
    <img src={hall4}/>
    <h1>AS Party Hall</h1>
    <p>
    Street:  2481 Briercliff Road<br></br>

    City:  Bronx<br></br>
    
    State/province/area:   New York<br></br>
    
    Phone number:  718-618-1513<br></br>


Country:  United States
    </p>
    <button>Place</button>
    </div>
    <div className='hall-sub-container'>
    <img src={hall5}/>
    <h1>SJ Hall</h1>
    <p>
    Street:  3932 Woodland Terrace<br></br>

    City:  Fair Oaks<br></br>
    
    State/province/area:   California<br></br>
    
    Phone number:  916-962-8978<br></br>


Country:  United States
    </p>
    <button>Place</button>
    </div>
    <div className='hall-sub-container'>
    <img src={hall6}/>
    <h1>Tower Hall</h1>
    <p>
    Street:  3078 Echo Lane<br></br>

City:  Riverside<br></br>

State/province/area:   Michigan<br></br>

Phone number:  269-849-0443<br></br>


Country:  United States<br></br>
    </p>
    <button>Place</button>
    </div>

    </div>
    <div className='title-heading'>
    <h1>Food</h1>
    </div>
    <div className='food-container'>
    <div className='food-sub-container'>
    <img src={food1}/>
    <h1>Veg Meals</h1>
    <div className='list-menu'>
    <li>Veg Briyani, Panner Tikka</li>
    <li>Tikka Masala, Mushroom Masala</li>
    <li>Panner Butter Masala, Fruit Salad</li>
    <li>Chapathi, Payasam</li>
    <li>Parota, Veg Masala</li>
    </div>
    <button>Place</button>
    </div>
    <div className='food-sub-container'>
    <img src={food2}/>
    <h1>Non-veg Meals</h1>
    <div className='list-menu'>
    <li>Chicken Briyani, Parota</li>
    <li>Chicken 65, Mutton Dry</li>
    <li>Fish Fry, Pepper Chicken</li>
    <li>Chapathi, Chicken Rice</li>
    <li>Chicken Gravy, Egg Masala</li>
    </div>
    <button>Place</button>
    </div>
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div className='title-heading'>
    <h1>Activity</h1>
    </div>
    <div className='activity-container'>
    <div className='activity-sub-container' style={{marginRight:"2cm"}}>
    <img src={act1}/>
    <h1>Fun Games</h1>
    <button>Place</button>
    </div>
    <div className='activity-sub-container'>
    <img src={act2}/>
    <h1>DJ Party</h1>
    <button>Place</button>
    </div>
    <div className='activity-sub-container' style={{marginRight:"2cm",marginTop:"2cm"}}>
    <img src={act3}/>
    <h1>Dancing Show</h1>
    <button>Place</button>
    </div>
    <div className='activity-sub-container' style={{marginTop:"2cm"}}>
    <img src={act4}/>
    <h1>Magic Show</h1>
    <button>Place</button>
    </div>
    </div>
    <div className='proceed-container'>
    <button onClick={()=>{handleNav()}}>Proceed Here</button>
    </div>
    </div>
  )
}

export default Services