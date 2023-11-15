import React from 'react'
import Search from './search'
import Premiums from '../../../components/premiums'
import Topics from '../../../components/topics'
import WhoFollow from './who-follow'
import Footer from './footer'



function RightBar() {
    return (
        <aside className='w-[350px] mr-2.5'>
            <Search />
            <Premiums />
            <Topics />
            <WhoFollow />
            <Footer />
        </aside>
    )
}

export default RightBar
