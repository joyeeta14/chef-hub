import React, { useEffect } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefRecipe = () => {

  const navigation = useNavigation();

  const recipeData = useLoaderData();
  const { chefName, id, experience, Numbers_of_recipes, description, chefPicture, likes } = recipeData;

  return (
    <div>
      <div>
      {navigation.state === ' loading' && <progress className="progress w-56"></progress>}
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          
        <div>
    <LazyLoad height={200}>
    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
    </LazyLoad>
  </div>
          
          <div>
            <h1 className="text-3xl mt-14 font-bold">{chefName}</h1>
            <p className="py-1">{description}</p>
            <p className="py-1">Number of Recipes:       {Numbers_of_recipes}</p>
            <p className="py-1">Years of Experience {experience}</p>
            <p className="py-1">Likes :  {likes}</p>
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

