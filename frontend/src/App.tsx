import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import Footer from './components/Footer/Footer'

function App() {
    return (
        <Router>
            <div className="app">
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
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router >
    )
}

export default App
