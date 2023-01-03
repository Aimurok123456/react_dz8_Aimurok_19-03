import './App.css'
import SimpleForm from './components/simpleForm/simpleForm'
import Toggles from './components/toggles/toggles'
import PostList from './components/postList/postList'
import UserList from './components/userList/userList'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from './components/post/post'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />

        <Route path="/posts/:postId" element={<Post />} />

        <Route path="users" element={<UserList />} />
        <Route path="toggles" element={<Toggles />} />
      </Routes>
      <div className="App">
          
      </div>
    </BrowserRouter>
  )
}

export default App
