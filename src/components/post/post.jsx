import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from '../../api'
import styles from '../postList/postList.module.css' 


const Post = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { postId } = useParams();
    const getOnePost = async() => {
       const pct = await API.get(`/posts/${postId}`).then(resp => resp.data)
       const cmnts = await API.get(`/posts/${postId}/comments`).then(resp => resp.data)  
       setPost(pct)
       setComments(cmnts)
    }
    useEffect(() => {
        getOnePost()
    }, [postId])
    return (
        <div className={styles.info}>
            <p>TITLE: {post.title}</p>
            {comments.map(item=>{
                return <div className={styles.comments} key={item.id}>
                    <p>NAME: {item.name}</p>
                    <p>POST-ID: {item.postId}</p>
                    <p>EMAIL: {item.email}</p>
                    <p>BODY: {item.body}</p>
                </div>
            })}
        </div>
    )

}

export default Post;