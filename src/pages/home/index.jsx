import React from 'react'
import StickyHeader from '../../components/sticky-header'
import Tab from '../../components/tab'
import classNames from 'classnames'


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
                    1.content
                </Tab.Content>
                <Tab.Content id="followings">
                    2.content
                </Tab.Content>

            </Tab>
            home components
        </>

    )
}

export default Home
