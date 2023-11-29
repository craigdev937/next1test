import { configureStore } from "@reduxjs/toolkit";

export const Reducer = configureStore({
    reducer: {
        posts: () => "DummyAPI Posts!",
        users: () => "DummyAPI Users!",
        products: () => "DummyAPI Products!"
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


