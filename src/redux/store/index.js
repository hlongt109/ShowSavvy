import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, favouriteFoodReducer, favouriteProductReducer, followerReducer, followingReducer, foodOrderReducer, foodSaleReducer, foodShopReducer, messageReducer, notificationReducer, productOrderReducer, productSaleReducer, productShopReducer, productTypeReducer, recentlyProductReducer, reviewReducer, shopReducer, userReducer, videoReducer, voucherReducer } from "../reducer/SsReducer";


export default configureStore({
    reducer: {
        listShop: shopReducer,
        listProduct: productShopReducer,
        listProductType: productTypeReducer,
        listProductSale: productSaleReducer,
        listProductOrder: productOrderReducer,
        listFavouriteProduct: favouriteProductReducer,
        listRecentlyProduct: recentlyProductReducer,
        listReview: reviewReducer,
        listFollower: followerReducer,
        listFollowing: followingReducer,
        listVoucher: voucherReducer,
        listCart: cartReducer,
        listMessage: messageReducer,
        listNotification: notificationReducer,
        listVideo: videoReducer,
        listUser: userReducer,

        listFood: foodShopReducer,
        listFoodOrder: foodOrderReducer,
        listFoodSale: foodSaleReducer,
        listFavouriteFoodShop: favouriteFoodReducer
    },
})