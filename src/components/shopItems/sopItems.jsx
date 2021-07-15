import React from 'react';
import ShopItem from '../shopItem';
import Style from './shopItems.module.css';

const ShopItems = ({ shopItems }) => {
    let allItems = shopItems.map((item) => (<ShopItem key={item.id} {...item} />));
    
    return (
        <div className={Style.allItemsWrapper}>
            {allItems}
        </div>
    );
}

export default ShopItems;