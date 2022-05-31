import ProductRoll from '../../components/ProductRoll';
import './index.css';

/**
 * reads product in 3s
 * check to special sizes
 * @returns ReactElement
 */
function Market() {
  return (
    <div className='Market'>
      <ProductRoll/>
    </div>
  );
}

export default Market