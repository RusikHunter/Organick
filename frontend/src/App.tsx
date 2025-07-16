import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Header from './components/Header/Header'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import MainPage from './pages/MainPage/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ShopPage from './pages/ShopPage/ShopPage'
import ProductPage from './pages/ProductPage/ProductPage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import QualityPage from './pages/QualityPage/QualityPage'
import PortfolioPage from './pages/PortfolioPage/PortfolioPage'
import PortfolioItemPage from './pages/PortfolioItemPage/PortfolioItemPage'
import TeamPage from './pages/TeamPage/TeamPage'
import BlogPage from './pages/BlogPage/BlogPage'
import PostPage from './pages/PostPage/PostPage'
import ContactPage from './pages/ContactPage/ContactPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import LicensesPage from './pages/LicensesPage/LicensesPage'
import ChangelogPage from './pages/ChangelogPage/ChangelogPage'
import ProtectedPage from './pages/ProtectedPage/ProtectedPage'
import SubscribeSection from './components/SubscribeSection/SubscribeSection'
import CartPage from './pages/CartPage/CartPage'
import PaymentPage from './pages/PaymentPage/PaymentPage'
import ThankYouPage from './pages/ThankYouPage/ThankYouPage'
import Footer from './components/Footer/Footer'
import { useAppSelector } from './hooks/useAppSelector'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useEffect } from 'react'
import { fetchProducts } from './store/asyncActions/fetchProducts'
import { fetchPosts } from './store/asyncActions/fetchPosts'
import { setCart } from './store/reducers/clientReducer'
import { ToastContainer } from 'react-toastify'

function App() {
    const currentPage = useAppSelector(state => state.client.currentPage)
    const products = useAppSelector(state => state.client.products)
    const posts = useAppSelector(state => state.client.posts)
    const cart = useAppSelector(state => state.client.cart)
    const totalCount = useAppSelector(state => state.client.totalCount)

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
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/shop/:id" element={<ProductPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/quality" element={<QualityPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:id" element={<PostPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path="/licenses" element={<LicensesPage />} />
                        <Route path="/changelog" element={<ChangelogPage />} />
                        <Route path="/protected" element={<ProtectedPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        {/*
                            HACK: if the user goes to the URL input, then it is redirected to MainPage.
                            This happens because totalCount can only be a positive value when going from CartPage
                        */}
                        <Route path="/payment" element={totalCount > 0 ? <PaymentPage /> : <MainPage />} />
                        <Route path="/thankyou" element={<ThankYouPage />} />
                    </Routes>
                    {currentPage !== "services" && currentPage !== "notfound" && <SubscribeSection />}
                </main>
                <Footer />
                <ToastContainer />
            </div>
        </Router >
    )
}

export default App
