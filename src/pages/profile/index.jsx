import React from 'react'
import { useParams } from 'react-router-dom'



function Profile() {
    const { slug } = useParams()

    return (
        <div>
            Porfile Pages - {slug}
        </div>
    )
}

export default Profile
