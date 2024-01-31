import React from 'react'
import AdminNav from '../components/AdminNav'
import dash1 from "../assets/images/dash1.png"
import dash2 from "../assets/images/dash2.png"
import dash3 from "../assets/images/dash3.png"
import { useState } from 'react';
import CollegeList from '../pages/CollegeList';
import "../assets/css/Admin.css"
function Admin() {

  const [colleges, setColleges] = useState([
    {
      id: 1,
      name: 'Avengers based Theme',
      image: 'https://woogle.co.in/cdn/shop/files/avengers-party-theme-185_1024x1024.webp?v=1683089456',
      description:
        'Transform your birthday celebration into an epic adventure with an Avengers-themed party! Assemble your friends and family to embark on a day filled with superhero excitement. Decorate your space with vibrant colors, action-packed banners, and iconic symbols of Earths mightiest heroes. Imagine the thrill as young partygoers discover a world where Spider-Man swings from the walls, Iron Mans suit gleams in the party lights, and Captain Americas shield stands tall as a centerpiece.',
    },
    {
      id: 2,
      name: 'Jungle based theme',
      image: 'https://lh3.googleusercontent.com/proxy/p2OEdXy-tSl-LXpKH5K7biBtBvQRG-elfxQpVyPSlbsHvI-VMF82r9dOM_6kGYRY2WrOnBmqLtk9N1EQKTLJnAcBDXcw21uuxLDcciYEDbLTY76kbYaRod3eN3HQDw_QhtCcuKByhZFIzqcHcH2vZ9mu87tYW4cGWrjsSyo1yxb2aOYePGm3zHfqbGkDiPW-VpWi2XcS',
      description:
        ' Step into a world of enchantment and elegance with a Barbie-themed birthday celebration fit for a princess! Transform your party venue into a dreamy pink paradise adorned with Barbies signature glamor. From shimmering decorations to Barbies iconic silhouette, every detail creates a magical ambiance The venue is transformed into a dreamy pink paradise, adorned with shimmering decorations, balloons, and elegant touches reminiscent of Barbies world. Guests, dressed in their finest attire, are welcomed to partake in a day of enchantment and wonder The air is filled with laughter and joy as activities such as a fashion show, doll-themed crafts.',
    },
    {
      id: 3,
      name: 'Barbie based theme',
      image: 'https://d259o9es2o749h.cloudfront.net/wp-content/uploads/2023/06/02084212/YEC_5524-1024x683.jpg',
      description:
        ' Step into a world of enchantment and elegance with a Barbie-themed birthday celebration fit for a princess! Transform your party venue into a dreamy pink paradise adorned with Barbies signature glamor. From shimmering decorations to Barbies iconic silhouette, every detail creates a magical ambiance The venue is transformed into a dreamy pink paradise, adorned with shimmering decorations, balloons, and elegant touches reminiscent of Barbies world. Guests, dressed in their finest attire, are welcomed to partake in a day of enchantment and wonder The air is filled with laughter and joy as activities such as a fashion show, doll-themed crafts.',
    },
    {
      id: 4,
      name: 'Teddy based theme',
      image: 'https://frillx.com/cdn/shop/products/forest-theme-birthday-party-decorations-for-kids-77-pcs-combo-bunting-animal-face-shape-foil-chrome-balloons-jungle-theme-984071_533x.jpg?v=1646290483',
      description:
        ' Step into a world of enchantment and elegance with a Barbie-themed birthday celebration fit for a princess! Transform your party venue into a dreamy pink paradise adorned with Barbies signature glamor. From shimmering decorations to Barbies iconic silhouette, every detail creates a magical ambiance The venue is transformed into a dreamy pink paradise, adorned with shimmering decorations, balloons, and elegant touches reminiscent of Barbies world. Guests, dressed in their finest attire, are welcomed to partake in a day of enchantment and wonder The air is filled with laughter and joy as activities such as a fashion show, doll-themed crafts.',
    },
    
  ]);

  const handleAddCollege = () => {
    const newCollege = {
      id: Date.now(),
      name: prompt('Enter new name:'),
      image: prompt('Enter new image URL:'),
      description: prompt('Enter new description:'),
    };

    setColleges([...colleges, newCollege]);
  };

  // Function to handle college deletion
  const handleDeleteCollege = (id) => {
    const updatedColleges = colleges.filter((college) => college.id !== id);
    setColleges(updatedColleges);
  };

  // Function to handle college update
  const handleUpdateCollege = (id, newName, newImage, newDescription) => {
    const updatedColleges = colleges.map((college) =>
      college.id === id
        ? {
            ...college,
            name: newName,
            image: newImage,
            description: newDescription,
          }
        : college
    );
    setColleges(updatedColleges);
  };

  return (

    <div>
    <AdminNav/>
    <div>
    <div className='dddash-topcontainer'>
    <div className='dddash-subcontainer1'>
    <img src={dash2}/>
    <h1>Events Booked</h1>
    <h2>20</h2>
    </div>
    <div className='dddash-subcontainer1' style={{backgroundColor:"rgb(80, 27, 80)"}}>
    <img src={dash3}/>
    <h1>Upcoming Events</h1>
    <h2>8</h2>
    </div>
    <div className='dddash-subcontainer1' style={{backgroundColor:"rgb(0, 71, 30)"}}>
    <img src={dash1}/>
    <h1>Events History</h1>
    <h2>26</h2>
    </div>
    <div className='dddash-subcontainer1' style={{backgroundColor:"rgb(25, 20, 9)"}}>
    <img src={dash2}/>
    <h1>Events Canceled</h1>
    <h2>10</h2>
    </div>
    </div>
    <div className='ddash-bottomcontainer' >
    <div className="card-container" style={{display:"flex",flexWrap:"nowrap"}}>
    {colleges.map((college) => (
      <div key={college.id} className="card">
        <img src={college.image} alt={college.name} />
        <h2>{college.name}</h2>
        <p>{college.description}</p>
        <div className="card-actions">
          <button onClick={() => handleUpdateCollege(college.id, prompt('Enter new name:'), prompt('Enter new image URL:'), prompt('Enter new description:'))}>Edit</button><br></br>
          <button onClick={() => handleDeleteCollege(college.id)}>Delete</button>
        </div>
      </div>
    ))}
  </div>
  <div className="add-button">
    
    <button onClick={handleAddCollege}>Add</button>
  </div>
    </div>
    </div>
    </div>
  )
}

export default Admin