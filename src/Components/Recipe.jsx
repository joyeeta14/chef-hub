import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaBeer } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";


const Recipe = () => {

    const recipe = useLoaderData();
    const { cooking_method1, cooking_method2, cooking_method3, item1_Pic, item1_ingredients, item1_name, item1_rating, item2_Pic, item3_Pic, item2_ingredients, item3_ingredients, item2_name, item3_name, item2_rating, item3_rating } = recipe;


    const [isClicked,  setClicked] = useState(false);


    return (
        <div className='my-20 grid grid-cols-3 ms-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item1_Pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item1_name}
                        <div className="badge badge-secondary">Yummy!</div>
                    </h2>
                    <p><span className='font-medium'>Ingredients :</span> {item1_ingredients.map(i =>
                        <li>{i}</li>
                    )} </p>
                    <p><span className='font-medium'>How to cook: </span> <br /> {cooking_method1}</p>
                    <div className="card-actions justify-end">
                        <div title='Rating' className="badge badge-outline">{item1_rating} </div>

                        {
                            isClicked ? <div className='hidden'>
                            
                            </div> :<div className="badge badge-outline">
                                <HiHeart />
                            </div> 
                        }
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item2_Pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item2_name}
                        <div className="badge badge-secondary">Yummy!</div>
                    </h2>
                    <p><span className='font-medium'>Ingredients :</span> {item2_ingredients.map(i =>
                        <li>{i}</li>
                    )} </p>
                    <p><span className='font-medium'>How to cook: </span> <br /> {cooking_method2}</p>
                    <div className="card-actions justify-end">
                        <div title='Rating' className="badge badge-outline">{item2_rating} </div>
                        <div  className="badge badge-outline">
                        <HiHeart/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img  src={item3_Pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item3_name}
                        <div className="badge badge-secondary">Yummy!</div>
                    </h2>
                    <p><span className='font-medium'>Ingredients :</span> {item3_ingredients.map(i =>
                        <li>{i}</li>
                    )} </p>
                    <p><span className='font-medium'>How to cook: </span> <br /> {cooking_method3}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{item3_rating} </div>
                        <div className="badge badge-outline">
                        <HiHeart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;