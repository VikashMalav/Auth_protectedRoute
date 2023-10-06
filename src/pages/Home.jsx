import React, { useState, useEffect } from 'react'
import { useUserContext } from '../context/UserProvider'
import { Button } from '../components'
import axios, { Axios } from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const Home = () => {
    const [companyInfo, setCompanyInfo] = useState(null)
    const [isDisplayCompany, setIsDisplayCompany] = useState(false)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { isUserLoggedIn, logout } = useUserContext()
    const localUser = JSON.parse(localStorage.getItem('userDetails'))
    const navigate = useNavigate()

    const requestData = {
        title: "how to make video on Youtube",
        body: "simply click on youtube app an search anthing you want!"
    }


    useEffect(() => {
        const loginUser = JSON.parse(localStorage.getItem('userDetails'))
        if (localUser && loginUser?.isLogin) {
            navigate('/')
        }
        else {
            navigate('/signup')
        }
    }, [])



    useEffect(() => {
        axios.post('https://jsonplaceholder.typicode.com/posts', requestData)
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
              })
              .finally(()=>{
                setLoading(false)
              })
                
                
    }, [])

    function handleLogOut() {
        let newUser = JSON.parse(localStorage.getItem('userDetails'))
        if (newUser) {
            newUser = { ...newUser, isLogin: false }
            localStorage.setItem('userDetails', JSON.stringify(newUser))
        }

        logout()
        // localStorage.removeItem('userDetails')
        navigate('/login')
    }

    function companyInfoHandler() {
        const companyDetails = { company: 'Geeksynergy Technologies Pvt Ltd', address: 'Sanjaynagar,Bengaluru-56', email: 'xxxxxxxxx@gmail.com', phone: 'xxxxxxxx49' }
        setCompanyInfo({ ...companyDetails })
        setIsDisplayCompany((prev) => !prev)
    }
    if (localUser && localUser.isLogin) {
        return (<>
            <header className='bg-slate-400 '>
                <ul className="flex flex-row-reverse justify-between">
                    <li>
                        <Button text='Logout' className='bg-green-600 hover:bg-green-700' onClick={handleLogOut} />
                    </li>
                    <li>
                        <Button text='Company Info' className='text-white bg-sky-500  hover:bg-sky-600' onClick={companyInfoHandler} />
                    </li>
                </ul>
            </header>
            <p className='text-3xl font-bold px-2 py-3 text-purple-600'>welcome to HomePage!</p>
           {!loading? <div className=' bg-indigo-300 p-2'>
               <h1>Title : {data.title}</h1>
               <h1>Body : {data.body}</h1>
            </div>:<p>Loading...</p>}

            {isDisplayCompany ? <><div className='flex justify-center items-center my-2 '>

                <div className='w-4/6 bg-green-300 py-2 px-3 rounded-md'>

                    <h3><span className='font-semibold'>Company :</span> {companyInfo.company}</h3>
                    <h3><span className='font-semibold'>Address : </span>{companyInfo.address}</h3>
                    <h3><span className='font-semibold'>Email :</span> {companyInfo.email}</h3>
                    <h3><span className='font-semibold'>Phone :</span> {companyInfo.phone}</h3>
                </div>
            </div>

            </> : ''}
        </>
        )
    }
}

export default Home