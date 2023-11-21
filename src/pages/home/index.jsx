import React from 'react'
import StickyHeader from '../../components/sticky-header'
import Tab from '../../components/tab'
import ForYou from './for-you'
import Followerss from './followerss'



function Home() {



    return (

        <>
            <StickyHeader title="Anasayfa" />

            <Tab activeTab="for-you">
                <Tab.Items>
                    <Tab.Item id="for-you">
                        Sana özel
                    </Tab.Item>
                    <Tab.Item id="followings">
                        Takip edilenler
                    </Tab.Item>
                </Tab.Items>
                <Tab.Content id="for-you">
                    <ForYou />
                </Tab.Content>
                <Tab.Content id="followings">
                    <Followerss />
                </Tab.Content>

            </Tab>

        </>

    )
}

export default Home
