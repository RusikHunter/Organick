//
// In this case, the hasButtonMore prop defines the presence
// of a button that loads additional product cards.
// Not to be confused with the LoadMore button in some
// component sections that redirect the user to the ShopPage.
//

export interface ProductWrapProps {
    defaultCardsCount: number
    hasButtonMore?: boolean
    isRelatedProducts?: boolean
}