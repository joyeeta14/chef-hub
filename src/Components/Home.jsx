import React from 'react';
import ChefSection from './ChefSection';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const chefData =  useLoaderData();

    return (
        <div>
            <div style={{ backgroundImage: `url("https://i.ibb.co/D88xDrw/bgggggggg.png")` }} className="hero min-h-screen" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-left text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold inline-block">Welcome To <br /> Chef-Hub</h1>
                        <p className="mb-5"> 
                        At Chef-Hub, you will find every thai-chef you would want to find and their recipes. Not only you can hire them, you can  also offer the chefs many recipes that are hard to find here. We always have favourite chef ideas. Do check Extra Recipe page.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="my-20">
        <div className="text-center font-semibold text-3xl mb-10">
            Our Chefs
        </div>
            <div  className='grid grid-cols-3 gap-5 ms-10'> {chefData.map(data => 
                <ChefSection
                key={data.id}
                 data={data} ></ChefSection>
                )} </div>
            </div>


        </div>
    );
};

export default Home;




