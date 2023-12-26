import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

export default function RestaurantMenu() {

    const [menuData, setMenuData] = useState([]);
    const { resId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true', {
                    params: {
                        lat: 28.5355161,
                        lng: 77.3910265,
                        restaurantId: resId
                    }
                });
                const data = (response.data?.data?.cards);
                setMenuData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])


    return !menuData ? <Shimmer /> : (
        <div className='menu'>
            <h1>{menuData[0]?.card?.card?.info?.name}</h1>
            <h3>{menuData[0]?.card?.card?.info?.cuisines?.join(', ')}</h3>
            <p>{menuData[0]?.card?.card?.info?.costForTwoMessage}</p>
            <span>{menuData[0]?.card?.card?.info?.avgRating}</span>
        </div>
    )
}
