import React, {useContext} from 'react';
import ShopContext from '../../services/shopContext';
import BasketListItem from '../basketListItem/basketListItem';
import Style from './basketList.module.css';

const BasketList = () => {
    const {purchase, toogleBasket} = useContext(ShopContext);
    
    const totalCost = purchase.reduce((prev, item) => {
     return(prev + item.price * item.quantity);   
    }, 0);

    const basketListItemsArr = purchase.map((element) => (<BasketListItem key={element.id} {...element} />));

    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Basket</h4></li>
                {basketListItemsArr}          
                <li className="collection-header">
                    <h4>Total cost: {totalCost}$</h4> 
                    <i 
                    onClick={toogleBasket}
                    className={`material-icons ${Style.closeIcon}`}>close</i>
                </li>
            </ul>
        </div>
    );
}

export default (BasketList);