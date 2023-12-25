import { restaurantList } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [filtered, setFiltered] = useState(false)
  const [haveResults, sethaveResult] = useState(true)
  useEffect(() => {
    if (searchText.length >= 3) {
      const data = filterData(searchText, restaurants)
      setFilteredRestaurants(data)
      if (data.length) {
        sethaveResult(true)
      } else {
        sethaveResult(false)
      }

    } else if (filtered) {
      const data = restaurants.filter((restaurant) => restaurant?.info?.avgRating > 4);
      setFilteredRestaurants(data);
    } else {
      setFilteredRestaurants(restaurants)
    }

  }, [searchText, filtered, restaurants, haveResults])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5', {
          params: {
            lat: 28.5355161,
            lng: 77.3910265
          },
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        });
        const data = response.data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
        setRestaurants(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => setFiltered(!filtered)}
        >
          {filtered ? 'All Restaurants' : 'Top rated Restaurants'}
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.length > 0 ? filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant.info} />
          );
        }) : (haveResults ? <Fragment>
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </Fragment> : <div className="card"><h2>No Restaurants found</h2></div>)}
      </div>
    </>
  );
};

export default Body;