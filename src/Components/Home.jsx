import React from 'react';
import ChefSection from './ChefSection';

const Home = () => {


    return (
        <div>
            <div style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/asian-food-variety-generative-ai_860599-127.jpg?size=626&ext=jpg&ga=GA1.1.563423901.1680299072&semt=robertav1_2_sidr")` }} className="hero min-h-screen" >
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
            <div className='my-20'>
                <ChefSection></ChefSection>
            </div>
        </div>
    );
};

export default Home;




