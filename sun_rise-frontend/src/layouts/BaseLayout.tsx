import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

type Props = {
    children?: React.ReactNode
}

const BaseLayout = (props: Props) => {
    return (
        <div className='grid'>
            <Sidebar/>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default BaseLayout