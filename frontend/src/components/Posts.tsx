import React, { useEffect, useState, useRef } from 'react'
import { GridList, makeStyles } from '@material-ui/core'
import { useSelector } from "react-redux"
import { RootState } from '../store'
import PostCard from './PostCard'
import FetchNextPageButton from './FetchNextPageButton'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 0,
        width: '100%'
    }
}))

function Posts() {
    const classes = useStyles()

    const [columnWidth, setColumnWidth] = useState(300)
    const [columns, setColumns] = useState(1)
    const gridListRef = useRef(null)

    const posts = useSelector((state: RootState) => {
        return state.post.posts
    })

    const postElems = () => (posts.map(post => (
        <PostCard post={post} isNotification={false} columnWidth={columnWidth} isSingleColumn={columns === 1 ? true : false} key={post.id}></PostCard>
    )))

    useEffect(() => {
        if(!gridListRef.current) return
        const gridList = gridListRef.current! as HTMLUListElement
        const calcColumnWidth = () => {
            const width = gridList.offsetWidth
            const numberOfColumns = Math.floor(width / 300)
            setColumns(numberOfColumns)
            const w = 300 + width % 300 / numberOfColumns
            setColumnWidth(w)
        }

        window.addEventListener('resize', calcColumnWidth)
        setTimeout(calcColumnWidth, 1000)
    }, [])

    return (
        <GridList className={classes.root} style={{margin: 0}} ref={gridListRef}>
            { postElems() }
            <FetchNextPageButton />
        </GridList>
    )
}

export default Posts