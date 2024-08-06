import { createSlice } from '@reduxjs/toolkit'
import { createShopAPI } from '../action/SsAction'
// Grocery Shop 
const intialStateShop = {
    listShop: []
}
const intialStateProductShop = {
    listProductShop: []
}
// 
const initialStateProductType ={
    listProductType:[]
}
const intialStateProduct = {
    listProduct: []
}
const intialStateProductSale = {
    listProductSale: []
}
const intialStateProductOrder = {
    listProductOrder: []
}
const intialStateFavouriteProduct = {
    listFavouriteProduct: []
}
const intialStateRecentlyProduct = {
    listRecentlyProduct: []
}
const intialStateReviews = {
    listReviews: []
}
const intialStateFollower = {
    listFollower: []
}
const intialStateFollowing = {
    listFollowing: []
}
const intialStateVoucher = {
    listVoucher: []
}
const intialStateCart = {
    listCart: []
}
const intialStateMessage = {
    listMessage: []
}
const intialStateNotifacation = {
    listNotification: []
}
const intialStateVideo = {
    listVideo: []
}
const intialStateUser = {
    listUser: []
}
// Food & drink
const intialStateFoodShop = {
    listFoodShop: []
}
const intialStateFoodSale = {
    listFoodSale: []
}
const intialStateFoodOrder = {
    listFoodOrder: []
}
const intialStateFavouriteFoodShop = {
    listFavouriteFoodShop: []
}

//
const validate = (list, id) => {
    return list.findIndex(x => x.id === id) === -1;
}

// createSlice

const shopSlice = createSlice({
    name: 'shop',
    initialState: intialStateShop,
    reducers: {
        addShopList(state, action) {
            if (validate(state.listShop, action.payload.id)){
                state.listShop.push(action.payload);
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(createShopAPI.fulfilled, (state, action) =>{
            state.listShop.push(action.payload)
        }).addCase(createShopAPI.rejected, (state, action) =>{
            console.log("Create new shop rejected :",action.error.message)
            return false
        })
    }
})

const productShopSlice = createSlice({
    name: 'product',
    initialState: intialStateProductShop,
    reducers: {
        addProductShopList(state, action) {
            if (validate(state.listProductShop, action.payload.id)) {
                state.listProductShop.push(action.payload);
            }
        }
    },
    extraReducers: builder => {
        // add new

        // update

        // delete

        // add sale...
    }
});

const productTypeSlice = createSlice({
    name:'productType',
    initialState: initialStateProductType,
    reducers:{
        addProductTypeList(state, action){
            if (validate(state.listProductType, action.payload.id)) {
                state.listProductType.push(action.payload)
            }
        }
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState: intialStateProduct,
    reducers: {
        addProductList(state, action) {
            if (validate(state.listProduct, action.payload.id)) {
                state.listProduct.push(action.payload)
            }
        }
    }
})

const productSaleSlice = createSlice({
    name: 'product_sale',
    initialState: intialStateProductSale,
    reducers: {
        addProductSaleList(state, action) {
            if (validate(state.listProductSale, action.payload.id)) {
                state.listProductSale.push(action.payload)
            }
        }
    }
});

const productOrderSlice = createSlice({
    name:'product_order',
    initialState: intialStateProductOrder,
    reducers:{
        addProductOrderList(state, action){
            if(validate(state.listProductOrder, action.payload.id)){
                state.listProductOrder.push(action.payload)
            }
        }
    },
    extraReducers: builder => {

    }
});

const favouriteProductSlice = createSlice({
    name: 'favourite_product',
    initialState: intialStateFavouriteProduct,
    reducers:{
        addFavouriteProductList(state, action){
            if(validate(state.listFavouriteProduct, action.payload.id)){
                state.listFavouriteProduct.push(action.payload)
            }
        }
    },
    extraReducers: builder =>{

    }
})

const recentlyProductSlice = createSlice({
    name:'recently',
    initialState: intialStateRecentlyProduct,
    reducers:{
        addRecentlyProductList(state, action){
            if(validate(state.listRecentlyProduct, action.payload.id)){
                state.listRecentlyProduct.push(action.payload);
            }
        }
    },
    extraReducers: builder => {
        
    }
})

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: intialStateReviews,
    reducers: {
        addReviewList(state, action) {
            if (validate(state.listReviews, action.payload.id)) {
                state.listReviews.push(action.payload);
            }
        }
    },
});

const followerSlice = createSlice({
    name: 'follower',
    initialState: intialStateFollower,
    reducers: {
        addFollowerList(state, action) {
            if (validate(state.listFollower, action.payload.id)) {
                state.listFollower.push(action.payload);
            }
        }
    },
});

const followingSlice = createSlice({
    name: 'following',
    initialState: intialStateFollowing,
    reducers: {
        addFollowingList(state, action) {
            if (validate(state.listFollowing, action.payload.id)) {
                state.listFollowing.push(action.payload);
            }
        }
    },
});

const voucherSlice = createSlice({
    name: 'voucher',
    initialState: intialStateVoucher,
    reducers: {
        addVoucherList(state, action) {
            if (validate(state.listVoucher, action.payload.id)) {
                state.listVoucher.push(action.payload);
            }
        }
    },
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: intialStateCart,
    reducers: {
        addCartList(state, action) {
            if (validate(state.listCart, action.payload.id)) {
                state.listCart.push(action.payload);
            }
        }
    },
});

const messageSlice = createSlice({
    name: 'message',
    initialState: intialStateMessage,
    reducers: {
        addMessageList(state, action) {
            if (validate(state.listMessage, action.payload.id)) {
                state.listMessage.push(action.payload);
            }
        }
    },
});

const notificationSlice = createSlice({
    name: 'notification',
    initialState: intialStateNotifacation,
    reducers: {
        addNotificationList(state, action) {
            if (validate(state.listNotification, action.payload.id)) {
                state.listNotification.push(action.payload);
            }
        }
    },
});

const videoSlice = createSlice({
    name: 'video',
    initialState: intialStateVideo,
    reducers: {
        addVideoList(state, action) {
            if (validate(state.listVideo, action.payload.id)) {
                state.listVideo.push(action.payload);
            }
        }
    },
});

const userSlice = createSlice({
    name: 'user',
    initialState: intialStateUser,
    reducers: {
        addUserList(state, action) {
            if (validate(state.listUser, action.payload.id)) {
                state.listUser.push(action.payload);
            }
        }
    },
});

const foodShopSlice = createSlice({
    name: 'food_shop',
    initialState: intialStateFoodShop,
    reducers: {
        addFoodShopList(state, action) {
            if (validate(state.listFoodShop, action.payload.id)) {
                state.listFoodShop.push(action.payload);
            }
        }
    },
});

const foodSaleSlice = createSlice({
    name: 'food_sale',
    initialState: intialStateFoodSale,
    reducers: {
        addFoodSaleList(state, action) {
            if (validate(state.listFoodSale, action.payload.id)) {
                state.listFoodSale.push(action.payload);
            }
        }
    },
});

const foodOrderSlice = createSlice({
    name: 'food_order',
    initialState: intialStateFoodOrder,
    reducers: {
        addFoodOrderList(state, action) {
            if (validate(state.listFoodOrder, action.payload.id)) {
                state.listFoodOrder.push(action.payload);
            }
        }
    },
});

const favouriteFoodShopSlice = createSlice({
    name: 'favourite_food_shop',
    initialState: intialStateFavouriteFoodShop,
    reducers: {
        addFavouriteFoodShopList(state, action) {
            if (validate(state.listFavouriteFoodShop, action.payload.id)) {
                state.listFavouriteFoodShop.push(action.payload);
            }
        }
    },
});

export const {addShopList} = shopSlice.actions;
export const {addProductShopList} = productShopSlice.actions;
export const {addProductTypeList} = productTypeSlice.actions;
export const {addProductList} = productSlice.actions;
export const {addProductSaleList} = productSaleSlice.actions;
export const {addProductOrderList} = productOrderSlice.actions;
export const {addFavouriteProductList} = favouriteProductSlice.actions;
export const {addRecentlyProductList} = recentlyProductSlice.actions;
export const {addReviewList} = reviewsSlice.actions; 
export const {addFollowerList} = followerSlice.actions;
export const {addFollowingList} = followingSlice.actions;
export const {addVoucherList} = voucherSlice.actions;
export const {addCartList} = cartSlice.actions;
export const {addMessageList} = messageSlice.actions;
export const {addNotificationList} = notificationSlice.actions;
export const {addVideoList} = videoSlice.actions;
export const {addUserList} = userSlice.actions;
//
export const {addFoodShopList} = foodShopSlice.actions;
export const {addFoodOrderList} = foodOrderSlice.actions;
export const {addFoodSaleList} = foodSaleSlice.actions;
export const {addFavouriteFoodShopList} = favouriteFoodShopSlice.actions;

// reducer 
export const shopReducer = shopSlice.reducer;
export const productShopReducer = productShopSlice.reducer;
export const productTypeReducer = productTypeSlice.reducer;
export const productReducer = productSlice.reducer;
export const productSaleReducer = productSaleSlice.reducer;
export const productOrderReducer = productOrderSlice.reducer;
export const favouriteProductReducer = favouriteProductSlice.reducer;
export const recentlyProductReducer = recentlyProductSlice.reducer;
export const reviewReducer = reviewsSlice.reducer;
export const followerReducer = followerSlice.reducer;
export const followingReducer = followingSlice.reducer;
export const voucherReducer = voucherSlice.reducer;
export const cartReducer = cartSlice.reducer;
export const messageReducer = messageSlice.reducer;
export const notificationReducer = notificationSlice.reducer;
export const videoReducer = videoSlice.reducer;
export const userReducer = userSlice.reducer;
//
export const foodShopReducer = foodShopSlice.reducer;
export const foodOrderReducer = foodOrderSlice.reducer;
export const foodSaleReducer = foodSaleSlice.reducer;
export const favouriteFoodReducer = favouriteFoodShopSlice.reducer;






