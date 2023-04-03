import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Phonebar = () => {
    const [phones, setPhones] = useState([])

    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //         .then(res => res.json())
    //         .then(data => setPhones(data))
    // },[])
    axios('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
        // console.log(data);
            const loadData = data.data.data;
            console.log(loadData);
            const phonesData = loadData.map(phone => {
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            setPhones(phonesData);

    })
    return (
        <div className='flex justify-center items-center my-4'>
            <BarChart width={500} height={300} data={phones} >
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="price" fill="#82ca9d" />
                {/* <Bar dataKey="name" fill="#82ca" /> */}
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="price"></YAxis>
            </BarChart>
        </div>
    );
};

export default Phonebar;