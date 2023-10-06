import React, { useState, useEffect } from 'react';
import { Input, Button } from '../components';
import { useUserContext } from '../context/UserProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { userDetails, login, } = useUserContext();
    const [error, setError] = useState('')
    const [user, setuser] = useState({ email: '', password: '' })
    const navigate = useNavigate()

    useEffect(() => {
        const loginUser = JSON.parse(localStorage.getItem('userDetails'))
        if (loginUser && loginUser?.isLogin) {
            navigate('/')
        }
    }, [userDetails])

    function handleChange(e) {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const localUser = JSON.parse(localStorage.getItem('userDetails'))
        if (!user.email || !user.password) {
            alert('please enter email and password')
            return false
        }

        if (localUser && localUser?.email === user?.email && localUser?.password === user?.password) {
            login()
            localUser.isLogin = true;
            localStorage.setItem('userDetails', JSON.stringify(localUser))
            setError('')
            navigate('/')
        } else {
            setError('Invalid Credentials')
        }

    }

    return (
        <>
            <h1 className='text-center p-2 font-bold'>Login Page</h1>

            <form
                onSubmit={handleSubmit}
                className='flex w-full justify-center items-center '
            >
                <div className='md:w-6/12 h-full p-3 rounded-md flex-col gap-2 flex justify-center items-center bg-slate-50 drop-shadow-lg'>

                    <Input
                        className=''
                        id='email'
                        name='email'
                        label='Email'
                        type='email'
                        placeholder='Enter email'
                        value={user.email}
                        onChange={handleChange}
                    />
                    <Input
                        className=''
                        id='password'
                        name='password'
                        label='Password'
                        type='password'
                        placeholder='Enter password'
                        value={user.password}
                        onChange={handleChange}
                    />
                    {error ? <p className='text-red-500  text-[16px]'>Error : {error}</p> : ''}
                    <Button text='Login' className='bg-gray-300 text-center text-sm' />

                    <p className='text-sm'>Don&apos;t have an account?<Link to='/signup'><span className='text-blue-600 hover:underline '>SignUp</span></Link>  </p>
                </div>
            </form>

        </>
    );
};

export default Login;
