import React, { useState } from 'react'
import { posts as postData } from '../../../mock/post'
import Post from '../../../components/post'
import { WVList } from "virtua";

function ForYou() {

    const [posts, setPosts] = useState(postData)
    return (
        <div className='cursor-pointer'>
            <WVList onRangeChange={(start, end) => {
                if (end + 1 === posts.length) {
                    setPosts(prev => [...prev, ...postData])
                }
            }}>

                {posts.map((post, key) => <Post post={post} key={post.id + key} />)}

            </WVList>
        </div>

    )
}

export default ForYou
