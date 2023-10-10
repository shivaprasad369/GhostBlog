import { useEffect, useState } from "react";
import "./App.css";
//import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import Posts from "./components/Posts";
import Links from "./components/Links";
import classes from './components/Header.module.css'
import {} from './'
function App() {
  const [post, setPost] = useState([]);
  const [dashEnable,setDashEnable] = useState(true)
  const [postEnable,setPostEnable] = useState(false)
  const [linkEnable,setLinkEnable] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      const reasponse = await fetch(
        `https://demo.ghost.io/ghost/api/content/posts/?key=${process.env.REACT_APP_API_KEY}&include=tags,authors&order=published_at%20desc`
      );
      if(!reasponse.ok){
        throw new Error("Couldnot fetch data")
      }
      const data = await reasponse.json();
      setPost(data.posts);
      
    };
    fetchData();
    

    
  }, []);
  

const dashHandler=()=>{
  setDashEnable((dashEnable)=>!dashEnable);
  setLinkEnable(false)
  setPostEnable(false)
}
const postHandler=()=>{
setPostEnable((postEnable)=>!postEnable)
setDashEnable(false)
setLinkEnable(false)
}
const linkHandler=()=>{
setLinkEnable((linkEnable)=>!linkEnable)
setDashEnable(false)
setPostEnable(false)
}
  return (
    <>
      <ul className={classes.list}>
        <li onClick={dashHandler}>
            DashBoard
        </li>
        <li onClick={postHandler}>Posts</li>
        <li onClick={linkHandler}>Link</li>
    </ul>
     {dashEnable && <DashBoard data={post}/>}
      {postEnable &&  <Posts data={post}/>}
     {linkEnable && <Links data={post}/>}
    </>
  );
}

export default App;
