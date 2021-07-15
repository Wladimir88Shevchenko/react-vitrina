import React, {useContext} from 'react';
import ShopContext from '../../services/shopContext';
import Style from './basketIcon.module.css'

const BacketIcon = () => {
    const {purchase = []} = useContext(ShopContext);

    return(
        <div>
            <i className={`small material-icons ${Style.icaonWrapper}`}/* className="small material-icons" */>shopping_cart</i>
            {purchase.length ? (<div><span>{purchase.length}</span></div>) : null}
        </div>
    );
}

export default BacketIcon;