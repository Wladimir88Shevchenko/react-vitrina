import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Shop from './components/shop';
import Footer from './components/footer';
import Loader from './components/loader';
import ShopContext from './services/shopContext';

const App = () => {
    const [shopItems, setShopItems] = useState([]);
    const [loading, setLoadeing] = useState(true);
    const [purchase, setPurchase] = useState([]);
    const [isBasketVisible, setIsBasketVisible] = useState(false);

    useEffect(() => {
        fetch('https://fortniteapi.io/v2/items/list?lang=en', {
            headers: {
                Authorization: '31775713-fd455a6a-6d714b5a-07d97664'
            }
        })
            .then((response) => response.json())
            .then((data => {
                let caunter = 0;
                let allItems = [];
                // contrrolling quantity of goods
                while (caunter < 30) {
                    allItems.push(data.items[caunter]);
                    ++caunter;
                }
                setShopItems(allItems);
            }))
            .then(() => setLoadeing(false))
    }, []);


    const addNewPurchase = (item) => {
        const { id, name, price } = item;
        const newItem = purchase.findIndex((element) => element.id === id);
        if (newItem < 0) {
            setPurchase([
                ...purchase,
                {
                    id,
                    name,
                    price,
                    quantity: 1,
                }
            ]);
        } else {
            const newArrItems = purchase.map((element) => {
                if (element.id !== id) {
                    return (element);
                } else {
                    return ({
                        ...element,
                        quantity: element.quantity + 1,
                    });
                }
            });
            setPurchase(newArrItems);
        }
    }

    const toogleBasket = () => {
        setIsBasketVisible(!isBasketVisible);
    }

    const deleteItemFromBasket = (id) => {
        const newArrPuchase = purchase.filter((item) => (item.id !== id));
        setPurchase(newArrPuchase);
    }

    const changeQuantityInBasket = (id, change = "add") => {
        let newArrPuchase = [];
        if (change === "add") {
            newArrPuchase = purchase.map((item) => {
                if (item.id !== id) {
                    return (item);
                } else {
                    return ({
                        ...item,
                        quantity: item.quantity + 1,
                    });
                }
            });
        } else {
            newArrPuchase = purchase.map((item) => {
                if (item.id !== id) {
                    return (item);
                } else {
                    if (item.quantity > 0) {
                        return ({
                            ...item,
                            quantity: item.quantity - 1,
                        });
                    } else {
                        return(item);
                    }
                }
            });
        }
        setPurchase(newArrPuchase);
    }

    const contextValue = {
        purchase,
        addNewPurchase,
        toogleBasket,
        isBasketVisible,
        deleteItemFromBasket,
        changeQuantityInBasket,
    }


    return (
        <div>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <ShopContext.Provider value={contextValue}>
                    <Shop shopItems={shopItems} />
                </ShopContext.Provider>
            )}
            <Footer />
        </div>
    );
}

export default App;