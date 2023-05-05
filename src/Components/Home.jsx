import React from 'react';
import ChefSection from './ChefSection';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
    
    const chefData = useLoaderData();

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
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 ms-2'> {chefData.map(data =>
                    <ChefSection
                        key={data.id}
                        data={data} ></ChefSection>
                )} </div>
            </div>

            <div className='my-10 mb-40 lg:mb-0'>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Heres An Amazing Offfer for you to grab.
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>
                            Learn cooking professionally
                            by our amazing and popular chefs wherever you want. We are launching a special course for beginners to start their passion for cooking into the business world.You can learn Cooking online at your own pace. Start today and improve your skills. Join millions of learners from around the world already learning on Chef-Hub. 
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;




