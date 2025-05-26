import React, {createContext, useState, useContext} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [todayXP, setTodayXP] = useState(0);

    const [favoriteRecipes, setFavoriteRecipes] = useState(new Set(['r1', 'n2', 'b1']));
    const [favoriteActivities, setFavoriteActivities] = useState(new Set(['a1', 'a4']));

    const toggleFavoriteRecipe = (id) => {
        setFavoriteRecipes(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            return newSet;
        });
    };

    const toggleFavoriteActivity = (id) => {
        setFavoriteActivities(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            return newSet;
        });
    };

    return (
        <AppContext.Provider
            value={{
                todayXP,
                setTodayXP,
                favoriteRecipes,
                favoriteActivities,
                toggleFavoriteRecipe,
                toggleFavoriteActivity,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
