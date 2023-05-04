import React from 'react';
import { Link } from 'react-router-dom';

const ChefSection = ({data}) => {
    

    const {id ,chefName, experience, chefPicture, likes,Numbers_of_recipes} = data;

    console.log(data);

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={chefPicture} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{chefName}</h2>
        <p>Likes : {likes}</p>
        <p>Experience : {experience}</p>
        <p>Numbers of recipes : {Numbers_of_recipes}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">
            <Link to={`/chef/${id}`}>View Recipes</Link>
                </button>
            </div>
       
        </div>
    </div>
    );
};

export default ChefSection;