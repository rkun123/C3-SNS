import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../store/post'
import { RootState } from '../store/index'
import Posts from '../components/Posts' 
import PostEdit from '../components/PostEdit'


function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])

    return (
        <React.Fragment>
            <PostEdit />
            <Posts />
        </React.Fragment>
    )
}

export default Home