import './index.css';

function Filter(){

    return(
        <div className='Filter'>
            <div className='Filter-div_left'>
                <select className='Filter-Category'>
                    <option> ALL</option>
                    <option> NAIL</option>
                    <option> LASH</option>
                    <option> SKIN</option>
                </select>
            </div>
            <div className='Filter-div_mid'>
                <div className='Filter-constrains'>tools</div>
            </div>
            <div className='Filter-div_right'>
                <button>+</button>
            </div>
        </div>
    )
}

export default Filter