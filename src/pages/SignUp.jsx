import React, { useEffect, useState } from 'react'
import { Input, Button } from '../components'
import { useUserContext } from '../context/UserProvider'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const { userDetails, setUserDetails, login, isUserLoggedIn } = useUserContext()
    const [user, setuser] = useState({
        name: '',
        number: '',
        profession:'front end developer',
        email: '',
        password: '',
    })


    useEffect(() => {
        const loginUser = JSON.parse(localStorage.getItem('userDetails'))
        if (loginUser && loginUser?.isLogin) {
            navigte('/')
        }
    }, [userDetails])

    const navigte = useNavigate()
    function handleChange(e) {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
console.log(user)
        if (!user.name || !user.number || !user.email || !user.password ) {
            alert('please enter all required values')

        } else {
            const updatedUser = { ...user, isLogin: true }

            localStorage.setItem('userDetails', JSON.stringify(updatedUser))
            setUserDetails(updatedUser)
            // console.log(isUserLoggedIn)
            setuser({
                name: '',
                number: '',
                profession:'',
                email: '',
                password: '',
            })
            navigte('/login')
        }
    }

    return (<>
        <h1 className='p-2 text-center font-bold'>SignUp Page</h1>
        <form onSubmit={handleSubmit} className='flex justify-center'>
            <div className='md:w-6/12 h-3/6 p-3 rounded-md flex-col gap-2 flex justify-center items-center bg-slate-50 drop-shadow-lg'>
                <Input className='' id='name' name='name' label='Name' value={user?.name} onChange={handleChange} placeholder='enter name' />
                <Input className='' id='number' name='number' label='Mobile No.' type='number' placeholder='enter contact no.' value={user?.number} onChange={handleChange} />
                <Input className='' id='email' name='email' label='Email' type='email' placeholder='enter email' value={user?.email} onChange={handleChange} />
                <Input className='' id='password' name='password' label='Password' type='password' placeholder='enter password' value={user?.password} onChange={handleChange} />
               <div>
                <label htmlFor="profession">Profession : </label>
                <select id='profession'  name="profession"  onChange={handleChange}>
                <option value='front end developer'>front end developer</option>
                <option value='back end developer'>back end developer</option>
                <option value='full stack developer'>full stack developer</option>
               </select>
               </div>
                <Button text='Signup' className='bg-gray-300 text-center text-sm ' />
                <p className='text-sm'>Already have an account?<Link to='/login'><span className='text-blue-600 hover:underline '>login</span></Link>  </p>
            </div>
        </form>
    </>
    )
}

export default SignUp