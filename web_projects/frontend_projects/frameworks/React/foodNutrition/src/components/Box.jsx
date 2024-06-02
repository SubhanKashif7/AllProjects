import React from 'react';
import axios from 'axios';

const Box = () => {
    const [foodName, setFoodName] = React.useState('');
    const [data, setData] = React.useState([]);

    const handleButtonClick = async () => {
        const response = await axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${foodName}`, {
            headers: {
                "X-Api-Key": "WvN7UBmzmUbNYSMYEGqNdg40eJ3p199mYTwHnc1J"
            }
        });

        setData(response.data);
        console.log(response.data);
    }

    return (
        <div className='bg-white px-3 py-2 rounded-md flex justify-center items-center flex-col mt-3 mb-3'>
            <div className='flex justify-center items-center flex-row mb-4'>
                <input 
                    type="text" 
                    placeholder='Enter Your Food name' 
                    className='px-3 py-2 bg-gray-200 rounded-sm border-none outline-none'
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                />
                <button 
                    className='ml-2 bg-yellow-300 py-1.5 px-3 rounded-sm cursor-pointer'
                    onClick={handleButtonClick}
                >
                    See Info
                </button>
            </div>

            <div className='mt-2 flex gap-2 justify-center items-center w-full flex-col'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='bg-gray-100 p-4 mb-4 w-3/4 rounded-md shadow-md'>
                            <h1 className='text-xl font-bold mb-2'>{item.name}</h1>
                            <p className='text-gray-700'>Calories: <span className='font-medium'>{item.calories}</span></p>
                            <p className='text-gray-700'>Carbohydrates: <span className='font-medium'>{item.carbohydrates_total_g} g</span></p>
                            <p className='text-gray-700'>Cholesterol: <span className='font-medium'>{item.cholesterol_mg} mg</span></p>
                            <p className='text-gray-700'>Fat (Saturated): <span className='font-medium'>{item.fat_saturated_g} g</span></p>
                            <p className='text-gray-700'>Fat (Total): <span className='font-medium'>{item.fat_total_g} g</span></p>
                            <p className='text-gray-700'>Fiber: <span className='font-medium'>{item.fiber_g} g</span></p>
                            <p className='text-gray-700'>Potassium: <span className='font-medium'>{item.potassium_mg} mg</span></p>
                            <p className='text-gray-700'>Protein: <span className='font-medium'>{item.protein_g} g</span></p>
                            <p className='text-gray-700'>Serving Size: <span className='font-medium'>{item.serving_size_g} g</span></p>
                            <p className='text-gray-700'>Sodium: <span className='font-medium'>{item.sodium_mg} mg</span></p>
                            <p className='text-gray-700'>Sugar: <span className='font-medium'>{item.sugar_g} g</span></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Box;
