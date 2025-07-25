import { MIN_PRODUCT_COUNT, MAX_PRODUCT_COUNT } from "@config/product-settings"

export function validateProductCount(setProductCount: (val: string) => void, value: number): number {
    if (value >= MIN_PRODUCT_COUNT && value <= MAX_PRODUCT_COUNT) {
        setProductCount(value.toString())
        return value
    } else if (value < MIN_PRODUCT_COUNT) {
        setProductCount(`${MIN_PRODUCT_COUNT}`)
        return MIN_PRODUCT_COUNT
    } else {
        setProductCount(`${MAX_PRODUCT_COUNT}`)
        return MAX_PRODUCT_COUNT
    }
}