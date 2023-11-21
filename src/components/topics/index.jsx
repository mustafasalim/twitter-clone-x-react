import React, { useState } from 'react'
import { topics } from '../../utils/consts'
import Topic from './topic'
import { Link } from 'react-router-dom'
import SidebarSection from '../sidebar-section'

function Topics() {

    const [topicList, setTopicList] = useState(topics)
    return (
        <SidebarSection more={"/trends"} title="İlgini çekebilecek gündemler">
            {topicList.map((topic, index) => (
                <Topic item={topic} key={index} setTopicList={setTopicList} topicList={topicList} />
            ))}
        </SidebarSection>

    )
}

export default Topics
