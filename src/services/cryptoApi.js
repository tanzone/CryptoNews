import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";


const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c87ac57df2msh19e82a87c8dc11ep164417jsn426741b64288'
    
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder)=> ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetail: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
        })
    })
});


export const {
    useGetCryptosQuery, useGetCryptoDetailQuery, useGetCryptoHistoryQuery
} = cryptoApi;