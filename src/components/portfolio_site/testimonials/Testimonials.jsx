import "./testimonials.scss"
import { Component } from 'react';

export default function Testimonials() {
const data=[ 
    {
        id:1,
        name:"Gaurav Rizal",
        title:"Group Member",
        img:"assets/travel.jpg",
        icon:"assets/twitter.png",
        desc:"He is a great developer."

    },
    {
        id:2,
        name:"Manish Baral",
        title:"Group Member",
        img:"assets/travel.jpg",
        icon:"assets/linkedin.png",
        desc:"Good to work with in the team.",
        featured:true
    },
    {
        id:3,
        name:"Sumit Khanal",
        title:"Group Member",
        img:"assets/travel.jpg",
        icon:"assets/linkedin.png",
        desc:"He can deliver scalable apps."
    },
    // {
    //     id:4,
    //     name:"Buddha Gautam",
    //     title:"Group Member",
    //     img:"assets/travel.jpg",
    //     icon:"assets/youtube.png",
    //     desc:"He can deliver scalable apps."
    // },
]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>( 
                    <div className={d.featured ? "card featured": "card"}>
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
    )
}
