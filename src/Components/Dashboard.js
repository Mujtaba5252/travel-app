
import React from 'react'



function Dashboard() {
   
 


  return (
    <>
    <div className='bg-slate-300 pt-10 pb-[7px] '>
        
    <h1 className='text-slate-600 text-center w-[500px] mx-[430px] text-4xl font-bold shadow-lg bg-slate-400 rounded-2xl'>STUDENT REGISTERATION</h1>
    <div className='mt-10 flex  w-[500px] mx-[430px]  shadow-lg bg-slate-400 rounded-3xl'>
    <form>
  <div className="mt-6 mb-5 mx-8">
    <label htmlFor="rollNo" className="block font-bold mb-2 text-sm  text-gray-900 dark:text-gray-300">Roll No</label>
    <input type="text"  name='rollNo'   id="rollNo" className="w-[400px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
  </div>
  <div className="mb-5 mx-8">
    <label htmlFor="Name" className="block mb-2 font-bold text-sm  text-gray-900 dark:text-gray-300">Name</label>
    <input type="text" name='Name'   id="Name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div className="mb-5 mx-8">
    <label htmlFor="lastName" className="block mb-2 font-bold text-sm  text-gray-900 dark:text-gray-300">Last Name</label>
    <input type="text" name='lastName'   id="lastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div className="mb-5 mx-8">
    <label htmlFor="password" className="block mb-2 text-sm font-bold  text-gray-900 dark:text-gray-300">Password</label>
    <input type="current-password" name='password'   id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>

  <div className="mb-5 mx-8">
    <label htmlFor="university" className="block mb-2 text-sm font-bold  text-gray-900 dark:text-gray-300">University</label>
    <input type="text" name='university'   id="university" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div className='mx-12 mb-2'>
  <button type="submit" className="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  <button type="submit" className="mx-1 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300  rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
  <button type="submit" className="mx-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
  <button type="submit" className="mx-1 text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300  rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">View</button>
  </div>
  
</form>
</div>
</div>
</>
  )
}

export default Dashboard