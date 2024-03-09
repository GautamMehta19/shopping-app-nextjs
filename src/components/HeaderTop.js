import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, } from 'react-icons/bs'

const HeaderTop = () => {
    return (
        <div className='border-b border-gray-200 hidden sm:block'>
            
            <div className='container py-4'>

                <div className='flex justify-around items-center'>

                    <div className='hidden lg:flex gap-1'>
                        <div className='header_top__icon_wrapper'>
                            <BsFacebook />
                        </div>
                        <div className='header_top__icon_wrapper'>
                            <BsTwitter />
                        </div>
                        <div className='header_top__icon_wrapper'>
                            <BsInstagram />
                        </div>
                        <div className='header_top__icon_wrapper'>
                            <BsLinkedin />
                        </div>
                    </div>

                    <div className='text-gray-500 text-[12px]'>
                        <strong>FREE SHIPING </strong>
                        THIS WEEK ORDER OVER- $99
                    </div>

                    <div className='flex gap-4'>
                        <select name='currency' id='currency' className='text-grey-500 text-[12px] w-[70px]'>
                            <option value='USD $'>USD $</option>
                            <option value='EUR €'>EUR €</option>
                            <option value='INR ₹'>INR ₹</option>
                        </select>

                        <select name='language' id='language' className='text-grey-500 text-[12px] w-[80px]'>
                            <option value='english'>English</option>
                            <option value='hindi'>Hindi</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderTop