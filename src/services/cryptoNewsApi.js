import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const params = {
    safeSearch: 'Off', 
    textFormat: 'Raw'
}

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c87ac57df2msh19e82a87c8dc11ep164417jsn426741b64288'
};

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders})


export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder)=> ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});


export const { useGetCryptoNewsQuery, } = cryptoNewsApi;