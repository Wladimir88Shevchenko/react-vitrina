import React, {useContext} from 'react';
import ShopContext from '../../services/shopContext';
import Style from './shopItem.module.css';

const ShopItem = (props) => {    

    const {
        name,
        images: {
            background: img
        },
        price,
    } = props;

    const {addNewPurchase} = useContext(ShopContext);

    return (
        <div>
            <div className={Style.mainContainer}>
                <div className="card">
                    <div className="card-image">
                        <img alt={name} src={img} />
                    </div>
                    <div className={Style.content}>
                        <div className={`card-content ${Style.cardContent}`}>
                            <span className="card-title">{name}</span>
                            <span className="card-title">{price}$</span>
                        </div>
                        <br />
                        <div className={Style.wrapperButton}>
                            <button onClick={() => addNewPurchase(props)}>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopItem;