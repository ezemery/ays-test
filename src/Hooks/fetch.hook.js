import {getPhotos} from "../services";
import {useReducer } from 'react';

const photosInitial = {
    photos: [],
    loading: false,
    error: false,
};

function usersReducer(state, action) {
    switch (action.type) {
        case 'success':
            return {...state, photos: action.photos}
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

export const useFetch = () => {
    const [p, setPhotoState] = useReducer(usersReducer, photosInitial);


    const fetchDataAsync = async () => {
        setPhotoState({type: 'loadingStart'})
        try {
            const photos = await getPhotos();
            setPhotoState({type: 'success', photos})
            setPhotoState({type: 'loadingComplete'})
        } catch (error) {
            setPhotoState({type: 'error'})
            setPhotoState({type: 'loadingComplete'})
        }
    };


    return {
        ...p,
        fetchDataAsync
    };
};