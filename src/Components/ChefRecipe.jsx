import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {

    const recipeData = useLoaderData();
    const {chefName, id, experience, Numbers_of_recipes, description, chefPicture, likes} = recipeData;
    console.log(recipeData);

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{chefName}</h1>
      <p className="py-6">{description}</p>
      <p className="py-6">Number of Recipes:       {Numbers_of_recipes}</p>
      <p className="py-6">Years of Experience {experience}</p>
      <p className="py-6">Likes :  {likes}</p>
      <button className="btn btn-primary">
        <Link to={`/recipe/${id}`}>Recipes</Link>
        </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefRecipe;