import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeIcon, PlusIcon } from '@heroicons/react/solid'

type Props = {}

const Sidebar = (props: Props) => {
  const navigate = useNavigate()
  return (
    <nav className='sidebar'>
      <HomeIcon className='btn-back' onClick={() => navigate("/")}/>
      <PlusIcon className='btn-back' onClick={() => navigate("/dj/add")}/>
    </nav>
  )
}

export default Sidebar