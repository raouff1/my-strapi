import React from 'react';

const Cv = () => {
    return (
        <div className='w-full bg-[#f9f9f9] py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 gap-8 px-4 text-black'>
                    <div className='bg-white rounded-x1 overflow-hidden drop-shadow-md'>
                        <img className='h-56 w-full object-cover' src={"https://cdn.dribbble.com/users/111430/screenshots/12956412/media/25c5233ded91916b5d598be7931b9ab4.png?compress=1&resize=1600x1200&vertical=top"}/>
                        <div className='p-8'>
                            <h3 className='font-bold text-2x1 my-1'>Mitt Cv</h3>
                            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, id necessitatibus! Explicabo ex eveniet blanditiis. Tempore iusto repellat at optio tenetur. Iusto nisi explicabo dolorem sit facilis, magni cum non?</p>

                        </div>


                    </div>

                </div>

            </div>



        </div>
    )
}

export default Cv