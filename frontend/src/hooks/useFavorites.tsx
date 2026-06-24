import type { Car } from "../models/car"
import { useState, useEffect } from "react";

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Car[]>(() => {
        const savedFavorites = localStorage.getItem("carpark_favorites");
        if (savedFavorites) {
            try {
                return JSON.parse(savedFavorites);
            } catch (error) {
                console.error("Failed to parse favorites from local storage", error);
                return [];
            }
        }
        return [];
    });
    useEffect(() => {
        localStorage.setItem("carpark_favorites", JSON.stringify(favorites));
        }, [favorites]);


    const toggleFavorite = (car: Car) => {
        setFavorites((prevFavorites) => {
            const isAlreadyFavorite = prevFavorites.some((fav) => fav.vin === car.vin);
            
            if (isAlreadyFavorite) {
                return prevFavorites.filter((fav) => fav.vin !== car.vin);
            } else {
                return [...prevFavorites, car];
            }
        });
    };
    const isFavorite = (car: Car) => {
        return favorites.some((fav) => fav.vin === car.vin);
    };
    
    return {
        favorites,
        toggleFavorite,
        isFavorite
    };
};