import {searchPhotos} from "../services";
import {useReducer } from 'react';

const photosInitial = {
    photos: [],
    loading: false,
    error: false,
};

function photosReducer(state, action) {
    switch (action.type) {
        case 'success':
            return {...state, photos: action.results}
        case 'loadingComplete':
            return {...state, loading:false}
        case 'loadingStart':
            return {...state, loading:true}
        case 'error':
            return {...state, error:true}
        default:
            return state
    }
} 

export const useSearch = () => {
    const [p, setPhotoState] = useReducer(photosReducer, photosInitial);

    const searchDataAsync = async (search) => {
        setPhotoState({type: 'loadingStart'}) 
        try {
            const photos = await searchPhotos(search);
            const results = photos.results
            setPhotoState({type: 'success', results})
            setPhotoState({type: 'loadingComplete'})
        } catch (error) {
            setPhotoState({type: 'error'})
            setPhotoState({type: 'loadingComplete'})
        }
    }

    return {
        ...p,
        searchDataAsync
    };
};