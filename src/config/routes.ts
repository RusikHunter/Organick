import React from 'react'

type Route = {
    path: string
    component: React.LazyExoticComponent<React.ComponentType<any>>
}

export enum Routes {
    MAIN = "/",
    ABOUT = "/about",
    SHOP = "/shop",
    PRODUCT = "/shop/:id",
    SERVICES = "/services",
    QUALITY = "/quality",
    PORTFOLIO = "/portfolio",
    PORTFOLIO_ITEM = "/portfolio/:id",
    TEAM = "/team",
    BLOG = "/blog",
    POST = "/blog/:id",
    CONTACT = "/contact",
    LICENSES = "/licenses",
    CHANGELOG = "/changelog",
    PROTECTED = "/protected",
    CART = "/cart",
    PAYMENT = "/payment",
    THANK_YOU = "/thankyou",
    NOT_FOUND = "*"
}

export const routes: Route[] = [
    { path: Routes.MAIN, component: React.lazy(() => import('../pages/MainPage/MainPage')) },
    { path: Routes.ABOUT, component: React.lazy(() => import('../pages/AboutPage/AboutPage')) },
    { path: Routes.SHOP, component: React.lazy(() => import('../pages/ShopPage/ShopPage')) },
    { path: Routes.PRODUCT, component: React.lazy(() => import('../pages/ProductPage/ProductPage')) },
    { path: Routes.SERVICES, component: React.lazy(() => import('../pages/ServicesPage/ServicesPage')) },
    { path: Routes.QUALITY, component: React.lazy(() => import('../pages/QualityPage/QualityPage')) },
    { path: Routes.PORTFOLIO, component: React.lazy(() => import('../pages/PortfolioPage/PortfolioPage')) },
    { path: Routes.PORTFOLIO_ITEM, component: React.lazy(() => import('../pages/PortfolioItemPage/PortfolioItemPage')) },
    { path: Routes.TEAM, component: React.lazy(() => import('../pages/TeamPage/TeamPage')) },
    { path: Routes.BLOG, component: React.lazy(() => import('../pages/BlogPage/BlogPage')) },
    { path: Routes.POST, component: React.lazy(() => import('../pages/PostPage/PostPage')) },
    { path: Routes.CONTACT, component: React.lazy(() => import('../pages/ContactPage/ContactPage')) },
    { path: Routes.LICENSES, component: React.lazy(() => import('../pages/LicensesPage/LicensesPage')) },
    { path: Routes.CHANGELOG, component: React.lazy(() => import('../pages/ChangelogPage/ChangelogPage')) },
    { path: Routes.PROTECTED, component: React.lazy(() => import('../pages/ProtectedPage/ProtectedPage')) },
    { path: Routes.CART, component: React.lazy(() => import('../pages/CartPage/CartPage')) },
    { path: Routes.PAYMENT, component: React.lazy(() => import('../pages/PaymentPage/PaymentPage')) },
    { path: Routes.THANK_YOU, component: React.lazy(() => import('../pages/ThankYouPage/ThankYouPage')) },
    { path: Routes.NOT_FOUND, component: React.lazy(() => import('../pages/NotFoundPage/NotFoundPage')) },
]