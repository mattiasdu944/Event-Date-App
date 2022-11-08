import useSWR from 'swr'
import { useAuth } from './useAuth'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const useUser = ( config={}  ) => {

    const {user} = useAuth()
    const { data, error } = useSWR(`/api/usuario/${ user.id }`, fetcher, config)

    return{
        perfil:data,
        isLoading: !error && !data,
        isError: error
    }
}
