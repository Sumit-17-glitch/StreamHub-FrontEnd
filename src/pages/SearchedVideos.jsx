import React from 'react'
import SearchedVideosComponent from '../componets/video/SearchedVideosComponent'
import { useSearchParams } from 'react-router-dom'

function SearchedVideos() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const page = searchParams.get("page") || 1;
    const limit = searchParams.get("limit") || 10;

    const params = {
        query, page, limit
    }

    console.log(params);
    

    return (
        <SearchedVideosComponent searchParams={params} />
    )
}

export default SearchedVideos