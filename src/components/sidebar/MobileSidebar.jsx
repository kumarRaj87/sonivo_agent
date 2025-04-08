import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom'

const MobileSidebar = ({ isOpen, onClose, handleLogout }) => {
    const location = useLocation()

    const menuItems = [
        { divider: true, label: 'Useful' },
        { path: '/work', icon: FaPhoneAlt, label: 'Work' },
    ]

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[5500]"
                    onClick={onClose}
                />
            )}

            <aside
                className={`block lg:hidden z-[6000] fixed inset-y-0 left-0 w-60 bg-background transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="h-16 flex items-center px-4">
                    <Link to="/work" className="flex items-center space-x-2">
                        <span className="text-2xl font-semibold text-[#1C2833] flex items-end justify-start w-full h-12">Vokal</span>
                    </Link>
                </div>

                <nav className="px-3 h-[88vh] overflow-y-auto pb-2">
                    {menuItems.map((item, index) => (
                        item.divider ? (
                            <div key={index} className="mt-5 mb-2">
                                <p className="px-1 text-xs font-medium text-gray-500 tracking-wider">
                                    {item.label}
                                </p>
                            </div>
                        ) : (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center space-x-3 px-3 py-1.5 rounded-md mb-1 text-sm ${isActive(item.path)
                                    ? 'bg-[#F7FAFC] text-[#1C2833] font-medium'
                                    : 'text-gray-800 hover:bg-[#F7FAFC]'
                                    }`}
                                onClick={onClose}
                            >
                                <item.icon className={`h-[18px] w-[18px] ${isActive(item.path) ? 'text-[#1C2833]' : 'text-gray-600'
                                    }`} />
                                <span>{item.label}</span>
                            </Link>
                        )
                    ))}
                    <button
                        className="p-2 rounded-md mt-2 text-sm w-full justify-start items-center flex bg-[#F7FAFC] hover:bg-[#F7FAFC] text-[#1C2833] gap-2"
                        onClick={handleLogout}
                    >
                        <FiLogOut className='text-[#1C2833] h-[18px] w-[18px]' />
                        logout?
                    </button>
                </nav>
            </aside>
        </>
    )
}

export default MobileSidebar