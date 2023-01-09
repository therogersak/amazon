import {
  combineReducers,
  configureStore,
  createReducer,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productApi } from "../services/productApi";
import cartReducer from "../features/CartSlice";
import searchReducer from "../features/SearchSlice";
import { commentApi } from "../services/commentApi";

// combineReducers
const reducers = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
  cart: cartReducer,
  search: searchReducer,
});

// persist store config
const persistConfig = {
  key: "root",
  storage,
};

// persist reducer config
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, commentApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
