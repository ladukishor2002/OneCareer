import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'

function CompanyLogin() {
  return (
    <>
      <div className="h-[100vh] w-full  bg-zinc-200 flex">
        <Header/>
        <div className="left-div  h-full w-[60%]  flex justify-center items-center ">
        <div className="login-form bg-white rounded-lg flex flex-col w-[60%] h-[70%] items-center p-10">
            <h1 className='text-6xl font-semibold text-blue-600'>Log in to Account</h1>
            <form className='relative mt-12  h-[90%] w-[85%] '>
                <div className="email flex flex-col mt-6">
                    <label htmlFor="email" className='text-xl'>email</label>
                    <input type="email" placeholder="Enter email id" className='p-4 mt-2 rounded-lg bg-zinc-100'/>

                </div>
                <div className="password flex flex-col mt-6">
                    <label htmlFor="password" className='text-xl'>password</label>
                    <input type="password" placeholder="Enter password" className='p-4 mt-2 rounded-lg bg-zinc-100' />

                </div>
           
              
              <button className='absolute bottom-7 w-full h-[70px] rounded-lg bg-blue-400 text-xl font-semibold text-white hover:bg-blue-500' type="submit">Login</button>
            </form>
            <p>Don't have an account?  
                <Link to="/components/auth/Company/register">
                <span className='text-blue-500 text-lg'> Sign up</span>
                </Link>
                
                </p>
  
        </div>
        </div>
        <div className="relative right-div h-full w-[40%]  bg-blue-500 flex items-center justify-center flex-col">
        <div className="h-[50%] w-[70%]  flex items-center p-3 flex-col justi">
            <h1 className='text-6xl font-semibold text-white'>Welcome Back, Sir</h1>
            <p className='mt-10 text-2xl text-white'>Fill up personal Information and start journey with us.</p>
        </div>
        <div className="image h-[500px] w-[700px] absolute bottom-0 opacity-45">
            <img className='h-full w-full' src={require('../../../assets/vector-register-3.png')} alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default CompanyLogin
