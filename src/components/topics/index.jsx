import React from 'react'
import { topics } from '../../utils/consts'
import Topic from './topic'
import { Link } from 'react-router-dom'
import SidebarSection from '../sidebar-section'

function Topics() {
    return (

        <SidebarSection more={"/trends"} title="İlgini çekebilecek gündemler">
            {topics.map((topic, index) => (
                <Topic item={topic} key={index} />
            ))}
        </SidebarSection>

    )
}

export default Topics
