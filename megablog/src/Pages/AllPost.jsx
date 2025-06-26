import React, { useState } from 'react'
import { Container, PostCard } from '../components'
import  appwriteService from '../appwrite/config'
function AllPost() {
    const [posts, setPosts] = useState([]);
    useState(() => {
         
    }, [] )
    appwriteService.getPost([]).then((posts) => {
        if(posts){
            setPosts(posts)
        }
    })

  return (
    <div className='py-8 w-full'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                   <div key={post.$id}>
                        <PostCard post={post} className='w- h-1/2 p-2 '   />
                   </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost