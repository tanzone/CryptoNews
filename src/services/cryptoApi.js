import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

const params = {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h','tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
}

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '024f8fa41dmsh8ce94befd8c9bb9p123b26jsn009e9408682e'
    
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})


export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder)=> ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    })
});


export const {
    useGetCryptosQuery,
} = cryptoApi;