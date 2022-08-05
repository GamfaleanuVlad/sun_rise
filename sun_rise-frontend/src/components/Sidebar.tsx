import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeIcon } from '@heroicons/react/solid'

type Props = {}

const Sidebar = (props: Props) => {
  const navigate = useNavigate()
  return (
    <nav className='sidebar'>
      <HomeIcon className='btn-back' onClick={() => navigate("/")}/>
    </nav>
  )
}

export default Sidebar