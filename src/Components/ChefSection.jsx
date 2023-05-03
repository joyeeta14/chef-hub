import React from 'react';

const ChefSection = () => {
    return (
        <div>
            <div className="text-center font-semibold text-3xl mb-10">
                Our Chefs
            </div>
            <div className='grid grid-cols-3 gap-5 ms-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefSection;