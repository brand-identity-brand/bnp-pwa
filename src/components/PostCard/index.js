import './index.css';

function PostCard(){

    return(
        <div className='PostCard'>
            <div className='PostCard-div_lepht' style={{backgroundColor: 'purple'}}>
            </div>
            
            <div className='PostCard-div_left'>
                <div className='PostCard-div_left_top'>
                    <div className='PostCard-Author'>author info here</div>
                    <div className='PostCard-Date'>12/31</div>
                </div>
                <div className='PostCard-div_left_mid'>
                    <div className='PostCard-Title'>What is the best nail model for your fingers?</div>
                </div>
                <div className='PostCard-div_left_bot'>
                    <div className='PostCard-Filter'>filter tags here</div>
                </div>
            </div>
            <div className='PostCard-div_right'>
                <div className='PostCard-Cover'>post cover photo here</div>
                <div className='PostCard-Save'>save icon here</div>
                
            </div>
            
            
            
        </div>
    )
}

export default PostCard