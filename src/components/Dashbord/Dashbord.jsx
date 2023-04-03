import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashbord = () => {
    const students = [
  {
    id: 1,
    name: "John",
    phy: 75,
    chem: 80,
    math: 85,
  },
  {
    id: 2,
    name: "Sarah",
    phy: 90,
    chem: 85,
    math: 95,
  },
  {
    id: 3,
    name: "David",
    phy: 80,
    chem: 70,
    math: 75,
  },
  {
    id: 4,
    name: "Emily",
    phy: 65,
    chem: 75,
    math: 80,
  },
  {
    id: 5,
    name: "James",
    phy: 85,
    chem: 90,
    math: 95,
  },
  {
    id: 6,
    name: "Amy",
    phy: 95,
    chem: 85,
    math: 80,
  },
  {
    id: 7,
    name: "Michael",
    phy: 70,
    chem: 75,
    math: 70,
  },
  {
    id: 8,
    name: "Emma",
    phy: 90,
    chem: 80,
    math: 95,
  },
  {
    id: 9,
    name: "Luke",
    phy: 80,
    chem: 85,
    math: 90,
  },
  {
    id: 10,
    name: "Olivia",
    phy: 75,
    chem: 70,
    math: 80,
  },
  {
    id: 11,
    name: "Jacob",
    phy: 85,
    chem: 90,
    math: 95,
  },
  {
    id: 12,
    name: "Sophie",
    phy: 95,
    chem: 80,
    math: 85,
  }
];

    return (
        <div className='flex justify-center items-center py-5 bg-slate-200 rounded md:mx-32 lg:mx-64'>
            <LineChart
            width={600}
            height={300}
            data={students}
            >
                <Line dataKey="phy" stroke='blue' ></Line>
                <Line dataKey="chem" stroke='tomato'></Line>
                <Line dataKey="math" stroke='green'></Line>
                <XAxis dataKey="name" />
                {/* <YAxis dataKey="name" /> */}
                {/* <YAxis dataKey="marks"></YAxis> */}
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashbord;