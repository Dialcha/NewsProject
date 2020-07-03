import fetch from 'isomorphic-fetch'

import { SEARCH_NEWS, SELECT_CATEGORY, REQUEST_CATEGORY, RECEIVE_NEWS } from './actionTypes';

export function selectCategory(category) {
    return {
        type: SELECT_CATEGORY,
        category
    }
}

export function requestNews(category) {
    return {
        type: REQUEST_CATEGORY,
        category
    }
}

export function receiveNews(category, json) {
    return {
        type: RECEIVE_NEWS,
        category,
        news: json.map(child => child),
        receivedAt: Date.now()
    }
}

export function fetchNews(category) {
    return function(dispatch) {
        dispatch(requestNews(category))
        return fetch(`https://api.canillitapp.com/news/category/${category}`)
                .then(response => response.json())
                .then(json => dispatch(receiveNews(category, json)))
    }
}

export function searchNews(keyWord) {
    return {
        type: SEARCH_NEWS,
        keyWord
    }
}