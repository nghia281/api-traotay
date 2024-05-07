const api = {
    product: {
        all: `https://open.nhanh.vn/api/product/search`,
        detail: `https://open.nhanh.vn/api/product/detail`,
        category: `https://open.nhanh.vn/api/product/category`
    },
    order: {
        all: `/orders`,
        detail: `/orders/:id`,
    },
    location: `https://open.nhanh.vn/api/shipping/location`
}
export default api;