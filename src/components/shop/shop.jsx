import React, {useContext} from 'react';
import Style from './shop.module.css';
import ShopItems from '../shopItems';
import BacketIcon from '../basketIcon';
import BasketList from '../basketList';
import ShopContext from '../../services/shopContext';

const Shop = ({ shopItems }) => {
    const {isBasketVisible, toogleBasket} = useContext(ShopContext);

    return (
        <div className={Style.mainContainer}>
            <div className={Style.basketCard}>
                {isBasketVisible && <BasketList />}
            </div>
            <div onClick={toogleBasket} className={Style.basketIcon}>
                <BacketIcon />
            </div>
            <ShopItems shopItems={shopItems} />            
        </div>
    );
}

export default Shop;