import { useEffect } from "react"
import { setCurrentPage } from "../store/reducers/clientReducer"
import { useAppDispatch } from "./useAppDispatch"

export const useSetCurrentPage = (pageName: string) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setCurrentPage(pageName))
    }, [dispatch, pageName])
}