import React, { useState } from 'react'
import SignIn from '../../components/register/SignIn'
import SignUp from '../../components/register/SignUp'
import insta_img from '../../images/9364675fb26a.svg'
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import './LoginPage.css'

const LoginPage = () => {

    const [login, setLogin] = useState(true);

    const changeLogin = () => {
        setLogin(!login)
    }

    return (
        // <div className='flex justify-center items-center'>
        //     <div className='w-full border'>
        //         <div className='h-[30rem] w-[28rem]'>
        //             <img className='' src={insta_img} alt="" />
        //         </div>
        //         <div className=''>
        //             {login ? <SignIn /> : <SignUp />}
        //         </div>
        //     </div>
        // </div>

        <div>
            <div className="flex items-center justify-center">
                {/* Left Side - Image */}
                <div className='w-[28rem]'>
                    <img src={insta_img} alt="/" />
                </div>

                {/* Right Side - Login */}
                <div>
                    {/* Logo + Login */}
                    <div className="flex flex-col items-center  mt-0">

                        {/* Header image */}
                        <img className="w-[14rem]" src={insta_logo} alt="/" />

                        {/* Form Header */}
                        <div class="flex items-center justify-center space-x-2">
                            <span class="border w-16 bg-gray-400"></span>
                            <span class="text-gray-500 opacity-80 font-bold">
                                {
                                    login ? "SIGN-IN" : "SIGN-UP"
                                }
                            </span>
                            <span class="border w-16 bg-gray-400"></span>
                        </div>

                        {/* SignIn & SignUp */}
                        <div className="loginPage__signin">

                            {
                                login ? <SignIn /> : <SignUp />
                            }

                            {/* OR */}
                            <div className="flex items-center justify-center space-x-3">
                                <span class="border w-16 bg-gray-400"></span>
                                <span class="text-gray-500 opacity-80 font-bold">OR
                                </span>
                                <span class="border w-16 bg-gray-400"></span>
                            </div>

                            {/* Login via FB */}
                            <div className="flex space-x-5 cursor-pointer">
                                <img src={fb} alt="/" className='w-5 h-5 mr-4' />Log in with Facebook
                            </div>

                            {/* Forgot password */}
                            <div className="text-sm mt-2 opacity-80">
                                Forgot password?
                            </div>
                        </div>
                    </div>

                    {/* Switch B/w SignIn - SignUp */}
                    <div className='mt-6 flex justify-center text-sm text-gray-500'>
                        {
                            login ? "Don't have an account ? " : "Already have an account ? "
                        }
                        <span className='text-blue-700 cursor-pointer'
                            onClick={changeLogin}> Click Here...</span>
                    </div>

                    {/* Footer logo */}
                    <div className="flex flex-col justify-center items-center mt-4">
                        <div>
                            Get the app.
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer mt-3">
                            <img className="w-[8rem]" src={appstore} alt="/" />
                            <img className="w-[8rem]" src={playstore} alt="/" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage