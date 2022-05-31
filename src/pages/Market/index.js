import ProductRoll from '../../components/ProductRoll';
import Filter from '../../components/Filter';
import './index.css';

/**
 * reads product in 3s
 * check to special sizes
 * 
 * Needs an identitical list of products stored else where with cover photo and settings
 * 
 * 2 situations for rendered blocks
 * 
 * can be placed in all 3 slots 
 * can only be placed in first 2 slots
 * 
 * perhaps 
 * 
 * @returns ReactElement
 */
function Market() {
  return (
    <div className='Market'>
      <Filter/>
      <ProductRoll/>
    </div>
  );
}

export default Market