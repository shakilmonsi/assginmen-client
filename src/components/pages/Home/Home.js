import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceItem from './ServiceItem';
import Banner from './Banner';
import LetsTalk from './LetsTalk';
import Package from './Package';
import {Helmet} from "react-helmet";


const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <div className='pt-28 pb-10 services-section max-w-7xl m-auto text-center px-4'>
                <h1 className='text-4xl font-bold uppercase  mb-16'>My Services</h1>
                <div className='grid lg:grid-cols-3 grid-cols-[420px] justify-center md:grid-cols-2 gap-5 text-left'>
                    {
                        services.map(serviceItem => <ServiceItem key={services._id} serviceItem={serviceItem}  />)
                    }
                </div>
                <Link to='/services' className='text-center mt-20 inline-block'>
                    <button className='btn pb-0 pt-1 text-[18px]  w-80 rounded bg-gray-800 text-white border-0'>See All</button>
                </Link>
            </div>
            <div className='package-section'>
                <Package />
            </div>
            <div className='lets-talk-section'>
                <LetsTalk />
            </div>
        </div>
    );
};

export default Home;