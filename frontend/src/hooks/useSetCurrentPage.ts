import { useEffect } from "react"
import type { AppDispatch } from "../store/index"
import { setCurrentPage } from "../store/reducers/clientReducer"
import { useDispatch } from "react-redux"

export const useSetCurrentPage = (pageName: string) => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(setCurrentPage(pageName))
    }, [dispatch, pageName])
}