import React from 'react'
import SidebarSection from '../../../../components/sidebar-section'
import { useAccount } from '../../../../store/auth/hooks'
import { WhoFollowUsers } from '../../../../mock'
import Button from "../../../../components/button"
import UserCard from '../../../../components/user-card'


function WhoFollow() {

    const account = useAccount()
    return (

        <SidebarSection more={`connect_people?user_id=${account.id}`} title="Kimi takip etmeli">

            {WhoFollowUsers.map((user, index) => <UserCard user={user} key={user.id} />)}
        </SidebarSection>

    )
}

export default WhoFollow
