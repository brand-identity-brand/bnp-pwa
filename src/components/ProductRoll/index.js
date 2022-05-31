import './index.css';

/**
 * data as an array of product objects
 * {price, title, sale, blockStyle, image}
 * 
 * there are 4 possible blockStyle:
 *  small square (1layout)
 *  large square (2layouts)
 *  verticle rectangle (3layouts)
 *  horizontal rectangle (2layouts)
 * 
 * read by 3 blocks.
 * if all small square || 1 h-rectangle || 2 h-rectangle
 * 
 * if 1 large Square or 
 * 
 * @param {*} props 
 * @returns 
 */
function ProductRoll(props){
    const {
        data,
    } = props
    return(
        <div className='ProductRoll' style={gridSpec}>
            
        </div>
    )
}

export default ProductRoll

const gridSpec = {
    gridTemplateColumns: 'repeat(3, 1fr [col])',
    gridTemplateRows: 'repeat(2, 1fr [row])',
}

/**
 *           
 */
 function ProductCardGroup(props) {
    const {
        className,
        type,
        children
    } = props;

    return (
        <div className={`ProductCardGroup ${className}`} >
            {children}
        </div>
    )
}

function ProductCard(props) {
    const {
        gridArea,
        children
    } = props;

    const style = {
        border: '1px solid black',
        backgroudColor: 'black',
        gridArea: gridArea,
    }

    return (
        <div className='ProductCard' style={style}>
            {children}
        </div>
    )
}