import React, { useEffect, useState } from 'react'
import Items from './items'
import Item from './item'
import Content from './Content'
import PropTypes from 'prop-types'
import { TabContext } from './context'

function Tab({ children, activeTab }) {

    const [active, setActive] = useState(activeTab)
    const contents = children.filter(c => c.type === Content)
    const items = children.filter(c => c.type === Items)

    const data = {
        active,
        setActive
    }

    useEffect(() => {

        setActive(activeTab)

    }, [activeTab])
    console.log("children", children);
    return (
        <TabContext.Provider value={data}>
            <div className='border-b border-[color:var(--background-third)]'>
                {items}
            </div>
        </TabContext.Provider>
    )
}

Tab.Items = Items
Tab.Item = Item
Tab.Content = Content

Tab.propsTypes = {

    children: PropTypes.arrayOf(
        PropTypes.node
    ),

    activeTab: PropTypes.string.isRequired

}
export default Tab
