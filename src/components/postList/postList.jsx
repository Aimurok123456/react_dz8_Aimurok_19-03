import styles from './postList.module.css'
import Post from '../post/post'
import API from '../../api'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";





const PostList = () => {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [searchToken, setSearchToken] = useState('')
    const [userId, setUserId] = useState(0)


    // [] - массив зависимости, dependencies list
    useEffect(() => {
        API.get(`posts`).then(resp => setPosts(resp.data))
    }, [])

  

    useEffect(() => {
        let postArray = posts;

        setFilteredPosts(
            postArray.filter(p => p.title.includes(searchToken) || p.userId===Number(searchToken ))
        )
    }, [searchToken, posts])





  
    

    return (
        <div className={styles.container}>
            <form className={styles.postForm}>
                <input type="text" className={styles.input} name="title" placeholder='Поиск по названию' onChange={(e) => setSearchToken(e.target.value)} value={searchToken} />
                <button className={styles.btn}>Поиск</button>
            </form>

            <div className={styles.posts}>
                {filteredPosts.map(p =>
                    // <Post key={p.id} post={p}/>
                    <Link key={p.id} to={`/posts/${p.id}`}>
                        <div className={styles.title}>{p.title} - {p.userId}</div>
                    </Link>
                )}
            </div>
        </div>
    )

}

export default PostList;



