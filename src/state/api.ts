import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { GetKpisResponse } from "./type"

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath:"main",
    tagTypes:["Kpis"],
    endpoints:(build) => ({
        getKpi: build.query<Array<GetKpisResponse>, void>({
            query:()=>"kpi/kpis",
            providesTags:["Kpis"]
        })
    }),
})

export const {useGetKpiQuery} = api