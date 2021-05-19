import React from 'react'
import {Link} from 'react-router-dom'

import LOGO from '../assets/images/logo.jpg'

const Header = () => (
    <header className="px-4 py-4 bg-white border-b border-b-gray-200 flex items-center justify-between rounded mb-12">
        <div className="text-gray-500 font-bold">
            <img className="w-16 h-16 rounded-full" src={LOGO} alt=""></img>
            <span className="block">… Vivre avec dignité et respect de ses droits …</span>
        </div>
        <div className="relative">
            <div className="w-12 h-12 rounded-full bg-indigo-400 text-white flex items-center justify-center">
                <span className="text-xl">D</span>
            </div>
            <ul className="hidden bg-white shadow absolute w-64 py-1 right-0 rounded">
                <li>
                    <Link to="/profile" className="block w-full p-2 hover:bg-gray-100">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="deconnexion" className="block w-full p-2 hover:bg-gray-100">
                        Déconnexion
                    </Link>
                </li>
            </ul>
        </div>
    </header>
)

export default Header;