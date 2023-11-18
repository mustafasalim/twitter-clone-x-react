import React from 'react'
import PropTypes from 'prop-types'

export default function StickyHeader({ title }) {
    return (
        <header>
            <h3 className='px-4 h-[3.313rem] flex items-center text-xl font-bold -z-50'>
                {title}
            </h3>
        </header>
    )
}


StickyHeader.propTypes = {

    title: PropTypes.string.isRequired
}


