import './index.css';

function ProductRoll(){

    return(
        <div className='ProductRoll' style={gridSpec}>
            <ProductCard gridArea={'A'}>A</ProductCard>
            <ProductCard gridArea={'B'}>B</ProductCard>
            <ProductCard gridArea={'C'}>C</ProductCard>
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