import { Outlet } from 'react-router-dom'


function App() {
  
  return (
  <div className='w-full h-full text-2xl text-black bg-white flex flex-wrap content-between'>
    <div className='w-full '>
      
      <main>
        <Outlet />
      </main>
      
    </div>
  </div>
  )
}

export default App
