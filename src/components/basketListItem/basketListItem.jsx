import React, {useContext} from 'react';
import ShopContext from '../../services/shopContext';
import Style from './basketListItem.module.css';

const BasketListItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
    } = props;

    const {deleteItemFromBasket, changeQuantityInBasket} = useContext(ShopContext);


    return (
        <>
            <li className="collection-item">
                <div>{name}
                <i 
                onClick={() => changeQuantityInBasket(id, "sub")}
                className={`material-icons ${Style.subAddIconBasket}`}
                >remove_circle</i>
                  x{quantity}  
                <i 
                onClick={() => changeQuantityInBasket(id, "add")}
                className={`material-icons ${Style.subAddIconBasket}`}
                >add_circle</i>
                  price: {price}$
                    <a href="#!" className="secondary-content">
                        <i 
                        onClick={() => {deleteItemFromBasket(id)}}
                        className="material-icons"
                        >close</i>
                    </a>
                </div>
            </li>
        </>
    );
}

export default (BasketListItem);