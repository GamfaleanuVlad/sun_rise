import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import BaseLayout from './layouts/BaseLayout'
import DjAdd from './pages/DjAdd'
import DjEdit from './pages/DjEdit'
import DjMain from './pages/DjMain'
import DjsGrid from './pages/DjsGrid'

type Props = {}

const AppRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<BaseLayout />}>
        <Route path='/' element={<Navigate replace to="/djs" />} />
        <Route path='/djs' element={<DjsGrid />} />
        <Route path='/dj'>
          <Route path=':djId' element={<DjMain />} />
          <Route path='add' element={<DjAdd />} />
          <Route path='edit/:djId' element={<DjEdit />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes