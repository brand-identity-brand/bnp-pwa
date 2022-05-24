import './index.css';

/* for prototype */
import PostCard from '../../components/PostCard';

function Spotlight() {
  return (
    <div className='Spotlight-master'>
      <ul>
        <li>
          TopBar 3 states. animation transformation needed
        </li>
        <li>
          spotlight searchbox could be an underline but that'll require an icon to indicate its a searchbox
        </li>
      </ul>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  );
}

export default Spotlight