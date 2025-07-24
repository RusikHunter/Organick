import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Header from './components/Header/Header'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import SubscribeSection from './components/SubscribeSection/SubscribeSection'
import Footer from './components/Footer/Footer'
import { useAppSelector } from './hooks/useAppSelector'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useEffect } from 'react'
import { fetchProducts } from './store/asyncActions/fetchProducts'
import { fetchPosts } from './store/asyncActions/fetchPosts'
import { setCart } from './store/reducers/clientReducer'
import { ToastContainer } from 'react-toastify'

import { Suspense } from 'react'
import Loader from './components/Loader/Loader'
import { routes } from './config/routes'

function App() {
    const products = useAppSelector(state => state.client.products)
    const posts = useAppSelector(state => state.client.posts)
    const cart = useAppSelector(state => state.client.cart)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!products.length) dispatch(fetchProducts())
        if (!posts.length) dispatch(fetchPosts())
    }, [dispatch, products.length, posts.length])

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems") as string)
        if (cartItems !== null) dispatch(setCart(cartItems))
    }, [])

    useEffect(() => {
        if (!products.length) return

        const cartItemsToAdding: string = JSON.stringify(cart)

        localStorage.setItem("cartItems", cartItemsToAdding)
    }, [cart])

    return (
        <Router>
            <div className="app">
                <ScrollToTop />
                <Header />
                <BurgerMenu />
                <main className="main">
                    <Suspense fallback={<Loader text="Loading..." />}>
                        <Routes>
                            {routes.map(({ path, component: Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))}
                        </Routes>
                        <SubscribeSection />
                    </Suspense>
                </main>
                <Footer />
                <ToastContainer />
            </div>
        </Router >
    )
}

export default App
