import React from 'react';
import Nav from '../Nav/Nav';

const Navbar = () => {
    const navBars = [
        
        {
            id: 1,
            name: 'Hiking Adventure',
            image: 'https://example.com/images/hiking.jpg',
            path: '/hiking-adventure',
            date: '2022-05-10'
        },
        {
            id: 2,
            name: 'Beach Getaway',
            image: 'https://example.com/images/beach.jpg',
            path: '/beach-getaway',
            date: '2022-06-01'
        },
        {
            id: 3,
            name: 'City Tour',
            image: 'https://example.com/images/city.jpg',
            path: '/city-tour',
            date: '2022-07-05'
        },
        {
            id: 4,
            name: 'Mountain Retreat',
            image: 'https://example.com/images/mountain.jpg',
            path: '/mountain-retreat',
            date: '2022-08-15'
        },
        {
            id: 5,
            name: 'Historic Trail',
            image: 'https://example.com/images/historic.jpg',
            path: '/historic-trail',
            date: '2022-09-20'
        },
        {
            id: 6,
            name: 'Foodie Adventure',
            image: 'https://example.com/images/foodie.jpg',
            path: '/foodie-adventure',
            date: '2022-10-10'
        },
        {
            id: 7,
            name: 'Wilderness Escape',
            image: 'https://example.com/images/wilderness.jpg',
            path: '/wilderness-escape',
            date: '2022-11-05'
        },
        {
            id: 8,
            name: 'Island Paradise',
            image: 'https://example.com/images/island.jpg',
            path: '/island-paradise',
            date: '2022-12-01'
        },
        {
            id: 9,
            name: 'Road Trip',
            image: 'https://example.com/images/roadtrip.jpg',
            path: '/road-trip',
            date: '2023-01-10'
        },
        {
            id: 10,
            name: 'Ski Adventure',
            image: 'https://example.com/images/ski.jpg',
            path: '/ski-adventure',
            date: '2023-02-15'
        }

    ];
    const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Products", path: "/products" },
  { id: 5, name: "Blog", path: "/blog" },
];

    return (
        <>
            <ul className='md:flex'>
                {
                routes.map(route => <Nav route={route}></Nav>)
         }   
            </ul>
        </>
    );
};

export default Navbar;