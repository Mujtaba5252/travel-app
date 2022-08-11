import React from 'react';

const Signup = () => {
    return (
        <div>
            <div className=' relative   lg:mr-10'>

                <form className='lg:mt-16 mt-[230px] '>
                    <div className=''>
                        <div className='flex justify-evenly mb-2'>
                            <a href='/Loginform'><h1 className='text-lg  text-color1 font-Rubik font-bold '>Login</h1></a>
                            <a href='/Signup'><h1 className='text-lg  text-color1 font-Rubik font-bold '>Sign up</h1></a>
                        </div>
                        <h1 className='text-3xl  text-color1 font-Rubik font-bold '>Create new account</h1>
                        <p className='text-sm text-color2 font-Rubik font-normal my-5 '>Create new account to login</p>

                    </div>
                    <div className="mb-6 mx-5">
                        <input type="text" id="Username" className="placeholder:font-Rubik placeholder:font-s pl-5  md:w-[430px] w-full sm:w-auto h-[70px] bg-[#E6EBFF]  text-gray-900 text-sm rounded-lg" placeholder="Username" required />
                    </div>
                    <div className="mb-6 mx-5">

                        <input type="password" id="password" placeholder='Password'  className="pl-5 md:w-[430px] w-full sm:w-auto  h-[70px] bg-[#E6EBFF] border border-gray-300 text-gray-900 text-sm rounded-lg " required />
                    </div>
                    <div className="mb-6 mx-5">

                        <input type="email" id="password" placeholder='Email'  className="pl-5 md:w-[430px] w-full sm:w-auto  h-[70px] bg-[#E6EBFF] border border-gray-300 text-gray-900 text-sm rounded-lg " required />
                    </div>
                    <div className="mb-6 mx-5">

                        <input type="text" id="password" placeholder='Phone'  className="pl-5 md:w-[430px] w-full sm:w-auto  h-[70px] bg-[#E6EBFF] border border-gray-300 text-gray-900 text-sm rounded-lg " required />
                    </div>
                    <div className='mx-5'>
                        <button type="submit" className="  md:w-[430px] h-[70px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>
                <div className=' mb-6'>
                    <p className='text-sm text-color2 font-Rubik font-normal mt-4 '>Don’t have an account?</p>
                    <a href='/Loginform'><h1 className='text-lg  text-color1 font-Rubik font-bold '>Login</h1></a>
                </div>
            </div>
        </div>
    );
}

export default Signup;
