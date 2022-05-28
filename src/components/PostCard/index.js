import './index.css';

function PostCard(){

    return(
        <div className='PostCard'>
            <div className='PostCard-div_lepht borderNone' style={{backgroundColor: 'purple'}}>
            </div>
            
            <div className='PostCard-div_left borderNone'>
                <div className='PostCard-div_left_top borderNone'>
                    <div className='PostCard-Author borderNone'>
                        Irene F. Granville
                    </div>
                    <div className='PostCard-Date borderNone'>Dec 31</div>
                </div>
                <div className='PostCard-div_left_mid borderNone'>
                    <div className='PostCard-Title borderNone'>What is the best nail model for your fingers?</div>
                </div>
                <div className='PostCard-div_left_bot borderNone'>
                    <div className='PostCard-Filter borderNone'>#tutorial  #present</div>
                </div>
            </div>
            <div className='PostCard-div_right borderNone'>
                <div className='PostCard-Cover borderNone'>
                    <img className={'contain'} src="https://miro.medium.com/max/1400/1*edU4v8Lug__BDOUf3da-pw.jpeg"/>
                </div>
                <div className='PostCard-Save borderNone'> 0 0 0 </div>
                
            </div>
            
            
            
        </div>
    )
}

export default PostCard