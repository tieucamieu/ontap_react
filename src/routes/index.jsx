import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseState from '../pages/UseState'
import Home from '../pages/Home'
import UseEffect from '../pages/UseEffect'
import UseContext from '../pages/use-context/UseContext'
import Memo from '../pages/memo/Memo'
import UseMemo from '../pages/memo/UseMemo'
import UseCallback from '../pages/memo/UseCallback'
import UseReducer from '../pages/UseReducer'
import ReduxToolkit from '../pages/ReduxToolkit'
export default function index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/use-state' element={<UseState/>}></Route>
                <Route path='/use-effect' element={<UseEffect/>}></Route>
                <Route path='/use-context' element={<UseContext/>}></Route>
                <Route path='/memo' element={<Memo/>}></Route>
                <Route path='/use-memo' element={<UseMemo/>}></Route>
                <Route path='/use-callback' element={<UseCallback/>}></Route>
                <Route path='/use-reducer' element={<UseReducer/>}></Route>
                <Route path='/redux-toolkit' element={<ReduxToolkit/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
