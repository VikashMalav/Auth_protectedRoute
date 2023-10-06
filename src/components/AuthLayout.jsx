import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserProvider'

export default function AuthLayout({ children, isLogin = false }) {

    const { isUserLoggedIn,userDetails,setUserDetails } = useUserContext()

    useEffect(() => {
        const localUserDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (localUserDetails?.isLogin) {
            setUserDetails(localUserDetails);
        }
    }, [setUserDetails]);
    // console.log(isUserLoggedIn)
    return isLogin || isUserLoggedIn || userDetails?.isLogin ? children : <p>you are not login please login first. click here to goto <Link to='/signup' className='text-blue-500'>SignUP</Link></p>

}