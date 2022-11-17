import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const useEvento = ( url = '', config={}  ) => {

    const { data, error } = useSWR(`/api/eventos${ url }`, fetcher, config)

    return{
        eventos: data || [],
        isLoading: !error && !data,
        isError: error
    }
}
