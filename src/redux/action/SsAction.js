import AsyncStorage from "@react-native-async-storage/async-storage"
import { addCartList, addFavouriteFoodShopList, addFollowerList, addFollowingList, addFoodOrderList, addFoodSaleList, addFoodShopList, addMessageList, addNotificationList, addProductSaleList, addProductShopList, addProductTypeList, addRecentlyProductList, addReviewList, addShopList, addUserList, addVideoList, addVoucherList } from "../reducer/SsReducer"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { ToastAndroid } from "react-native"
import auth from '@react-native-firebase/auth'
import { dispatchCommand } from "react-native-reanimated"

const base_url = "http://10.0.2.2:3000"

export const user_url = `${base_url}/users`
const shop_url = `${base_url}/shop`
const product_type_url = `${base_url}/productType`
const product_url = `${base_url}/products`
const product_sale_url = `${base_url}/productSale`
const product_order_url = `${base_url}/productOrder`
const favourite_product_url = `${base_url}/favouriteProduct`
const recently_url = `${base_url}/recentlyProduct`
const reviews_url = `${base_url}/reviews`
const follow_url = `${base_url}/follows`
const voucher_url = `${base_url}/vouchers`
const cart_url = `${base_url}/carts`
const message_url = `${base_url}/messages`
const notification_url = `${base_url}/notifications`
const video_url = `${base_url}/videos`
const food_url = `${base_url}/foodShop`
const food_order_url = `${base_url}/foodOrder`
const food_sale_url = `${base_url}/foodSale`
const favourite_food_shop_url = `${base_url}/favouriteFoodShop`

// fetch data
export const fetchShopAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(shop_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addShopList(item))
            })
        } catch (error) {
            console.log("Error fetching shop :", error);
        }
    }
}
export const fetchProductTypeAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(product_type_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addProductTypeList(item))
            })
        } catch (error) {
            console.log("Error fetching ProductType :", error);
        }
    }
}
export const fetchProductAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(product_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addProductShopList(item))
            })
        } catch (error) {
            console.log("Error fetching Product :", error);
        }
    }
}
export const fetchProductSaleAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(product_sale_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addProductSaleList(item))
            })
        } catch (error) {
            console.log("Error fetching Product sale :", error);
        }
    }
}
export const fetchProductOrderAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(product_order_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addProductSaleList(item))
            })
        } catch (error) {
            console.log("Error fetching Product order :", error);
        }
    }
}
export const fetchFavouriteProductAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(favourite_product_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addProductSaleList(item))
            })
        } catch (error) {
            console.log("Error fetching favourite product :", error);
        }
    }
}
export const fetchRecentlyaAPI = () => {
    return async dispatch => {
        try {
            AsyncStorage.getItem("recentlyIds")
                .then((recently_id) => {
                    if (recently_id) {
                        const product_id = JSON.parse(recently_id);
                        const fetchPromise = product_id.map((id) => {
                            return fetch(`${recently_url}/${id}`)
                                .then((res) => res.json())
                        });

                        Promise.all(fetchPromise)
                            .then((fetchPr) => {
                                fetchPr.forEach(item => {
                                    dispatch(addRecentlyProductList(item));
                                });
                            })
                            .catch(e => console.log('Error fetching recently products:' + e))
                    }
                })
                .catch(e => console.log('Error reading saved product IDs:', e))
        } catch (error) {
            console.error('Error reading saved product IDs:', error);
        }
    }
}
export const fetchReviewAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(reviews_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addReviewList(item))
            })
        } catch (error) {
            console.log("Error fetching reviews :", error);
        }
    }
}
export const fetchFollowerAPI = (userId) => {
    return async dispatch => {
        try {
            const res = await fetch(`${follow_url}?following=${userId}`);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addFollowerList(item))
            })
        } catch (error) {
            console.log("Error fetching follower :", error);
        }
    }
}
export const fetchFollowingAPI = (userId) => {
    return async dispatch => {
        try {
            const res = await fetch(`${follow_url}?userId=${userId}`);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addFollowingList(item))
            })
        } catch (error) {
            console.log("Error fetching following :", error);
        }
    }
}
export const fetchVoucherAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(voucher_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addVoucherList(item))
            })
        } catch (error) {
            console.log("Error fetching voucher :", error);
        }
    }
}
export const fetchCartAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(cart_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addCartList(item))
            })
        } catch (error) {
            console.log("Error fetching cart :", error);
        }
    }
}
export const fetchMessageAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(message_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addMessageList(item))
            })
        } catch (error) {
            console.log("Error fetching message :", error);
        }
    }
}
export const fetchNotificationAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(notification_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addNotificationList(item))
            })
        } catch (error) {
            console.log("Error fetching notifications :", error);
        }
    }
}
export const fetchVideoAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(video_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addVideoList(item))
            })
        } catch (error) {
            console.log("Error fetching video :", error);
        }
    }
}
export const fetchFoodAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(food_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addFoodShopList(item))
            })
        } catch (error) {
            console.log("Error fetching foods :", error);
        }
    }
}
export const fetchFoodOrderAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(food_order_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addFoodOrderList(item))
            })
        } catch (error) {
            console.log("Error fetching foods order :", error);
        }
    }
}
export const fetchFoodSaleAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(food_sale_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addFoodSaleList(item))
            })
        } catch (error) {
            console.log("Error fetching foods sale :", error);
        }
    }
}
export const fetchFavouriteFoodShopAPI = () => {
    return async dispatch => {
        try {
            const res = await fetch(favourite_food_shop_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addFavouriteFoodShopList(item))
            })
        } catch (error) {
            console.log("Error fetching favourite food :", error);
        }
    }
}
export const fetchUserApi = () => {
    return async dispatch => {
        try {
            const res = await fetch(user_url);
            const data = await res.json();

            data.forEach(item => {
                dispatch(addUserList(item))
            })
        } catch (error) {
            console.log("Error fetching user :", error)
        }
    }
}
// funtion for useSelector

// shop 
export const createShopAPI = createAsyncThunk(
    'shop/createShopAPI',
    async ({ ownerId, shopName, pickupLocation, email, phoneNumber, deliveryService, avatar }, thunk) => {
        const obj = { ownerId, shopName, pickupLocation, email, phoneNumber, deliveryService, avatar };
        try {
            const res = await fetch(shop_url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
            const data = await res.json();
            if (res.ok) {
                ToastAndroid.show("Register successfully", ToastAndroid.SHORT);
                return data;
            } else {
                const err = await res.json();
                ToastAndroid.show("Register failed, try again", ToastAndroid.SHORT);
                return thunk.rejectWithValue(err)
            }
        } catch (error) {
            ToastAndroid.show("Register error :" + error, ToastAndroid.SHORT);
            return thunk.rejectWithValue(error)
        }
    }
)

// product
export const createProductAPI = createAsyncThunk(
    'product/createProductAPI',
    async ({ shopId, photos, name, description, type, color, sizes, price, quantity, status }, thunk) => {
        const obj = { shopId, photos, name, description, type, color, sizes, price, quantity, status };
        try {
            const res = await fetch(product_url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
            const data = await res.json();
            if (res.ok) {
                ToastAndroid.show("Add product successfully", ToastAndroid.SHORT);
                return data;
            } else {
                const err = await res.json();
                ToastAndroid.show("Add prroduct failed, try again", ToastAndroid.SHORT);
                return thunk.rejectWithValue(err)
            }
        } catch (error) {
            ToastAndroid.show("Add product error :" + error, ToastAndroid.SHORT);
            return thunk.rejectWithValue(error)
        }
    }
)
export const updateProductAPI = createAsyncThunk(
    'product/updateProductAPI',
    async ({ id, shopId, photos, name, description, type, color, sizes, price, quantity, status }, thunk) => {
        const obj = { id, shopId, photos, name, description, type, color, sizes, price, quantity, status };
        try {
            const res = await fetch(`${product_url}/${id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });
            const data = await res.json();
            if (res.ok) {
                ToastAndroid.show("Update product successfully", ToastAndroid.SHORT);
                return data;
            } else {
                const err = await res.json();
                ToastAndroid.show("Update prroduct failed, try again", ToastAndroid.SHORT);
                return thunk.rejectWithValue(err)
            }
        } catch (error) {
            ToastAndroid.show("Update product error :" + error, ToastAndroid.SHORT);
            return thunk.rejectWithValue(error)
        }
    }
)
export const deleteProductAPI = createAsyncThunk(
    'product/deleteProductAPI',
    async (id, { rejectWithValue }) => {
        try {
            const res = await fetch(`${product_url}/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                ToastAndroid.show("Delete successfully", ToastAndroid.SHORT);
                return id;
            } else {
                const err = await res.json();
                ToastAndroid.show("Delete failed", ToastAndroid.SHORT);
                return rejectWithValue(err);
            }
        } catch (error) {
            ToastAndroid.show("Delete error :" + error, ToastAndroid.SHORT);
            return rejectWithValue(error);
        }
    }
)
// product sale


// sign up
export const checkEmailExists = (email) => {
    return async dispatch => {
        try {
            const signInMethods = await auth().fetchSignInMethodsForEmail(email);
            if (signInMethods && signInMethods.length > 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error checking email existence:', error.message);
            return false;
        }
    }
};

export const registerAccountWithEmailPassword = (email, password, policyAndTerms) => {
    return async dispatch => {
        try {
            const authUser = await auth().createUserWithEmailAndPassword(email, password);
            if (authUser.user) {
                const res = await fetch(user_url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        name: "",
                        username: "",
                        phone: "",
                        address: "",
                        gender: "",
                        birthday: "",
                        avatar:"",
                        policyAndTerms: policyAndTerms
                    })
                });
                if (res.ok) {
                    console.log("Register successfully")
                    return true
                } else {
                    const errorData = await res.json();
                    console.log("Failed to register :", errorData.message);
                    ToastAndroid.show("Failed to register. Please try again.", ToastAndroid.SHORT);
                    await authUser.user.delete();
                    return false;
                }

            } else {
                console.log("Failed to create user account on Firebase Auth");
                ToastAndroid.show("Failed to create user account. Please try again.", ToastAndroid.SHORT);
                return false;
            }
        } catch (error) {
            console.error('Error:', error.message);
            ToastAndroid.show("Registration error: " + error.message, ToastAndroid.SHORT);
            return false;
        }
    }
}


// login
export const loginAccount = (email, password) => {
    return async dispatch => {
        try {
            const res = await fetch(user_url);
            const acc = await res.json();

            if (acc.length > 0) {
                const user = acc.find(user => user.email === email && user.password === password);
                if (user) {
                    await AsyncStorage.setItem("isLoggedIn", "true");
                    await AsyncStorage.setItem("username", user.username);
                    await AsyncStorage.setItem("userId", user.id);
                    console.log("Login successfully")
                    return true;
                } else {
                    console.log("Email or password is invalid")
                    return false;
                }
            }
        } catch (error) {
            console.error('Login error:', error.message);
            return false;
        }
    }
}

export const signInWithEmailAndPassword = (email, password) => {
    return async dispatch => {
        try {
            const firebaseAuthResult = await auth().signInWithEmailAndPassword(email, password);
            if (firebaseAuthResult) {
                ToastAndroid.show("Login successfully", ToastAndroid.SHORT);
                return 1;
            }
        } catch (firebaseAuthError) {
            if (firebaseAuthError.code === 'auth/user-not-found') {
                // ToastAndroid.show("Account does not exist", ToastAndroid.SHORT);
                return 2;
            } else if (firebaseAuthError.code === 'auth/wrong-password') {
                // ToastAndroid.show("Incorrect password", ToastAndroid.SHORT);
                return 3;
            } else {
                ToastAndroid.show("Server error :"+firebaseAuthError.message, ToastAndroid.SHORT);
                console.log('Firebase Auth error:', firebaseAuthError.message);
                return 0;
            }
        }
    }
}

