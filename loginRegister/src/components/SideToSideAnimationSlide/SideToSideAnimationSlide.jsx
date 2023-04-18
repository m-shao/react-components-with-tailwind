import { useState } from 'react'

import facebook from './images/facebook.svg'
import google from './images/google.svg'
import linkedIn from './images/linkedIn.svg'

function SideToSideAnimationSlide() {
    const [formState, setFormState] = useState('Sign In')

    const loginSideSubText = 'or use your account'
    const loginSideTitle = 'Hello, Friend!'
    const loginSideText = 'Enter your personal details and start your journey with us'
    const loginSideButton = 'SIGN UP'

    const registerSideSubText = 'or use your email for registration'
    const registerSideTitle = 'Welcome Back!'
    const registerSideText = 'To keep connected with use please login with your personal info'
    const registerSideButton = 'SIGN IN'

    const changeForm = ()  => {
        if (formState === 'Sign In') {
            setFormState('Register')
        } else {
            setFormState('Sign In')
        }
    }

    return (
        <div className="w-full max-w-4xl h-128 bg-white rounded-lg shadow-xl flex">
            <div className={"w-1/2 h-full flex flex-col justify-center items-center gap-4 transition-transform duration-500 " 
            + (formState == 'Register' ? "translate-x-full" : "")}>
                <h1 className="text-3xl font-bold mb-3">
                    {formState === 'Register' ? "Create Account" : "Login"}
                </h1>
                <div className='flex gap-4'>
                    <div className='w-7 h-7 flex items-center justify-center border border-gray-200 rounded-full'>
                        <img className='w-4 h-4' src={google} alt="" />
                    </div>
                    <div className='w-7 h-7 flex items-center justify-center border border-gray-200 rounded-full'>
                        <img className='w-4 h-4' src={facebook} alt="" />
                    </div>
                    <div className='w-7 h-7 flex items-center justify-center border border-gray-200 rounded-full'>
                        <img className='w-4 h-4' src={linkedIn} alt="" />
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center gap-2">
                    <p className='text-gray-400 text-sm'>{formState === 'Register' ? registerSideSubText : loginSideSubText}</p>
                    <div className='w-full flex flex-col gap-3 items-center'>
                        <input className='bg-gray-100 border border-gray-200 rounded-md text-sm py-2 px-4 w-3/4' type="text" placeholder='Email' />
                        <input className='bg-gray-100 border border-gray-200 rounded-md text-sm py-2 px-4 w-3/4' type="text" placeholder='Password' />
                        {formState === 'Register' && 
                            <input className='bg-gray-100 border border-gray-200 rounded-md text-sm py-2 px-4 w-3/4' type="text" placeholder='Confirm Password' />
                        }
                    </div>
                </div>
                {formState === 'Login' && 
                    <button className='text-gray-500 text-md'>Forgot your password?</button>
                }
                <div className='bg-gradient-to-r from-green-400 to-blue-400 text-white font-medium px-8 py-2 rounded-full'>SIGN IN</div>
            </div>
            <div className={"w-1/2 h-full rounded-lg flex flex-col justify-center items-center gap-2 text-white transition-transform duration-500 overflow-hidden " 
            + "bg-gradient-to-br from-green-400 to-blue-400 " + (formState == 'Register' ? "-translate-x-full" : "")}>
                <h1 className="text-3xl font-bold mb-3">{formState === 'Register' ? registerSideTitle : loginSideTitle}</h1>
                <p className={'max-w-xs text-center text-gray-100 transition-transform duration-500 '}>
                    {formState === 'Register' ? registerSideText : loginSideText}
                </p>
                <button onClick={changeForm} className='border border-white text-white font-medium px-8 py-2 m-4 rounded-full'>
                    {formState === "Register" ? registerSideButton : loginSideButton}
                </button>
            </div>
        </div>
    )
}

export default SideToSideAnimationSlide