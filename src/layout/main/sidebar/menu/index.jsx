import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { mainMenu } from '../../../../utils/consts'
import More from './more'
import NewTweet from './new'
import { useAccount } from '../../../../store/auth/hooks'

function Menu() {

    const account = useAccount()
    return (
        <nav className='mt-05 mb-1' key={account.id}>
            {mainMenu.map((menu, index) => (
                <NavLink key={index} to={menu.path} className='py-[3px] block group'>
                    {({ isActive }) => (
                        <div className={
                            classNames(
                                'p-3 rounded-full  inline-flex transition-colors items-center gap-3  group-hover:bg-[color:var(--background-third)]',
                                {
                                    "font-bold": isActive
                                })}>
                            <div className='w-[26.25px] h-[26.25px] relative'>
                                {menu?.notification && (
                                    <span className='w-[18px] h-[18px] rounded-full bg-[color:var(--color-primary)] text-[color:var(--background-primary)] absolute -top-1 -right-1 flex items-center justify-center text-[11px]'>{menu.notification}</span>
                                )}
                                {!isActive && menu.icon.passive}
                                {isActive && menu.icon.active}
                            </div>
                            <div className='text-xl px-4'>
                                {menu.title}
                            </div>
                        </div>
                    )}
                </NavLink>
            ))}
            <More />

            <NewTweet />



        </nav>
    )
}

export default Menu
