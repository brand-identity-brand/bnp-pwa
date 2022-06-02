import './index.css';
import PriceStickerWhite from './PNG/price_sticker_white.png';
import {getRandomInt} from '../../common/helpers';

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
    console.log(data)
    return(
        <div className='ProductRoll'>
            {data.map((el, index)=>{
                const parentCss = el.style[0];
                const childCss = el.style[1];
                return (
                    <ProductCardGroup className={parentCss} key={index}>
                        {el.data.map((el)=>{
                            return(
                                <ProductCard className={`${childCss}${el.id}`} key={el.SKU}
                                    price = {el.price}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    <img title={el.sku} alt={el.sku} src={el.cover}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </ProductCard>
                            )
                        })}
                    </ProductCardGroup>
                )
            })}
        </div>
    )
}

export default ProductRoll

/**
 *           
 */
 function ProductCardGroup(props) {
    const {
        className,
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
        className,
        children,
        price,
        discount,
    } = props;

    return (
        <div className={`layered ${className}`}
        >
            {children}
            <PriceTag price={price} discount={discount}/>
        </div>
    )
}

function PriceTag(props){
    const {
        price,
        discount
    } = props;
    const isPosi = Math.random() < 0.5; //50% probability of getting true
    const deg = getRandomInt(0,40);
    const x = getRandomInt(1,20); //20 when deg 40
    const y = getRandomInt(2,20); //20 when deg 40
    console.log( [deg, x, y])
    return(
        <div className='PriceTag layered'
            style={{
                transform: `rotate(${isPosi? '' : '-'}${deg}deg)`,
                position: 'relative',
                top: `${y}vw`,
                left: `${x}vw`
            }}
        >
            <img 
                title={'price sticker'}
                alt={'price sticker'}
                src={PriceStickerWhite}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
            <div className='PriceTag-price'><span>{price}</span></div>
        </div>
    )
}

ProductRoll.defaultProps = {
    data: [
        {
            style: ['ProductCardGroup_3by2', 'type6_'],
            data: [        
                {
                    id: 0,
                    SKU: 'L012FKROWE',
                    cover: 'https://picsum.photos/300/600',
                    size: [1,1],
                    price: '120.69',
                },
                {
                    id: 1,
                    SKU: 'L012123456',
                    cover: 'https://picsum.photos/300/600',
                    size: [1,2],
                    price: '452.69',
                },
                {
                    id: 2,
                    SKU: 'L012FK4444',
                    cover: 'https://picsum.photos/300/300',
                    size: [1,1],
                    price: '2.60',
                },
                {
                    id: 3,
                    SKU: 'L016666666',
                    cover: 'https://picsum.photos/300/300',
                    size: [1,1],
                    price: '0.69',
                },        
                {
                    id: 4,
                    SKU: 'L012FK67WE',
                    cover: 'https://picsum.photos/300/300',
                    size: [1,1],
                    price: '12.69',
                }
            ]
        },
        {
            style: ['ProductCardGroup_3by2', 'type5_'],
            data: [        
                {
                    id: 0,
                    SKU: 'L012FKROWE',
                    cover: 'https://picsum.photos/300/300',
                    size: [1,1],
                    price: '120.69',
                },
                {
                    id: 1,
                    SKU: 'L012123456',
                    cover: 'https://picsum.photos/300/300',
                    size: [1,1],
                    price: '452.69',
                },
                {
                    id: 2,
                    SKU: 'L012FK4444',
                    cover: 'https://picsum.photos/300/600',
                    size: [1,2],
                    price: '2.60',
                },
                {
                    id: 3,
                    SKU: 'L016666666',
                    cover: 'https://picsum.photos/300/300',
                    size: [1,1],
                    price: '0.69',
                },        
                {
                    id: 4,
                    SKU: 'L012FK67WE',
                    cover: 'https://picsum.photos/300/300',
                    size: [1,1],
                    price: '12.69',
                }
            ]
        },
        {
            style: ['ProductCardGroup_3by1', 'type3_'],
            data: [        
                {
                    id: 0,
                    SKU: 'L012FKROWE',
                    cover: 'https://picsum.photos/300/300',
                    size: [1,1],
                    price: '120.69',
                },
                {
                    id: 1,
                    SKU: 'L012123456',
                    cover: 'https://picsum.photos/300/300',
                    size: [1,1],
                    price: '452.69',
                },
                {
                    id: 2,
                    SKU: 'L012FK4444',
                    cover: 'https://picsum.photos/300/600',
                    size: [2,2],
                    price: '2.60',
                },
            ]
        }
    ]
}