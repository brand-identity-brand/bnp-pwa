import './index.css';

import PostCard from "../../components/PostCard";
import Filter from '../../components/Filter';

function Explore() {
  return (
    <div className='Explore'>
      <Filter/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  );
}

export default Explore