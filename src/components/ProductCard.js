import Image from 'next/image'
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const ProductCard = ({ img, desc, title, rating, price }) => {

    // Generate an array of stars based on rating
    const generateRating = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<AiFillStar key={i} />); // Add unique key (i) to each star
        }
        for (let i = rating; i < 5; i++) {
            stars.push(<AiOutlineStar key={i + 5} />); // Add unique key (i + 5) to empty stars
        }
        return stars;
    };

    return (
        <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
            <div>
                <Image src={img} width={200} height={300} alt={title} />
            </div>

            <div className='space-y-2 py-2'>
                <h2 className='text-accent font-medium uppercase'>{title}</h2>
                <p className='text-gray-500 max-w-[150px]'>{desc}</p>
                <div>
                    {generateRating(rating)}
                </div>

                <div className='font-bold flex gap-4'>
                    ${price}
                    <del className='text-gray-500 font-normal'>${parseInt(price) + 50}.00</del>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
