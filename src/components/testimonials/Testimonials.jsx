import React, { useState, useEffect } from 'react';
import './testimonials.scss';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: 'Rustam Pradhananga',
      title: 'Client',
      img: 'assets/travel.jpg',
      icon: 'assets/twitter.png',
      desc: 'His technical ability and attention to detail is outstanding.',
    },
    {
      id: 2,
      name: 'Manish Baral',
      title: 'Group Member',
      img: 'assets/travel.jpg',
      icon: 'assets/linkedin.png',
      desc: 'Great to work with in the team.Amazing problem-solver.',
      featured: true,
    },
    {
      id: 3,
      name: 'Sumit Khanal',
      title: 'Group Member',
      img: 'assets/travel.jpg',
      icon: 'assets/linkedin.png',
      desc: 'He can deliver scalable apps.',
    },
    // Add more data items as needed
  ];

  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setItemsToShow(2);
      } else {
        setItemsToShow(data.length);
      }
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [data]);

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.slice(0, itemsToShow).map((d) => (
          <div className={d.featured ? 'card featured' : 'card'} key={d.id}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
