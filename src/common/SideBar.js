import React from 'react';
import { People, Apps, Card, LogoBuffer, Bulb, Person } from 'react-ionicons'
import {Link} from 'react-router-dom';
import useToken from '../useToken';

function SideBar(){

    const { token } = useToken();
    return (
        <div className="p-4 w-64 text-sm bg-indigo-500 rounded flex justify-center">
        <div>

            <Link to="/dashboard" className="flex items-center justify-center w-40 h-40 text-center bg-white rounded mb-4 shadow">
                <div>
                    <div className="flex items-center justify-center">
                        <Apps
                            color={'#4f46e5'}
                            height="50px"
                            width="50px"
                        />
                    </div>
                    <span className="capitalize">Dashboard</span>
                </div>
            </Link>
            {
                !(token.user.type === 'Trésorier(e)' || token.user.type === 'Simple Membre') ? 
                <div>

                    <Link to="/gestion-des-adherants" className="flex items-center justify-center w-40 h-40 text-center bg-white rounded mb-4 shadow">
                        <div>
                            <div className="flex items-center justify-center">
                                <People
                                    color={'#4f46e5'}
                                    height="50px"
                                    width="50px"
                                />
                            </div>
                            <span className="capitalize">Gestion des Adhérents</span>
                        </div>
                    </Link>

                    <Link to="/gestion-des-structures" className="flex items-center justify-center w-40 h-40 text-center bg-white rounded mb-4 shadow">
                        <div>
                            <div className="flex items-center justify-center">
                                <LogoBuffer
                                    color={'#4f46e5'}
                                    height="50px"
                                    width="50px"
                                />
                            </div>
                            <span className="capitalize">Gestion des Structures</span>
                        </div>
                    </Link>
                </div>
                : ''
            }

            <Link to="/gestion-financieres" className="flex items-center justify-center w-40 h-40 text-center bg-white rounded mb-4 shadow">
                <div>
                    <div className="flex items-center justify-center">
                        <Card
                            color={'#4f46e5'}
                            height="50px"
                            width="50px"
                        />
                    </div>
                    <span className="capitalize">Gestion Financiéres</span>
                </div>
            </Link>

            {/* <Link to="/gestion-des activites" className="flex items-center justify-center w-40 h-40 text-center bg-white rounded mb-4 shadow">
                <div>
                    <div className="flex items-center justify-center">
                        <Bulb
                            color={'#4f46e5'}
                            height="50px"
                            width="50px"
                        />
                    </div>
                    <span className="capitalize">Gestion des Activités</span>
                </div>
            </Link> */}
            <Link to="/profile" className="flex items-center justify-center w-40 h-40 text-center bg-white rounded mb-4 shadow">
                <div>
                    <div className="flex items-center justify-center">
                        <Person
                            color={'#4f46e5'}
                            height="50px"
                            width="50px"
                        />
                    </div>
                    <span className="capitalize">Profile</span>
                </div>
            </Link>


            
        </div>
    </div>
    )
}


export default SideBar;