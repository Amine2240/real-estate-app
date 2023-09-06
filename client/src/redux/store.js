import { configureStore } from "@reduxjs/toolkit";
import Listreducer from "./Listslice";
import Itemreducer from "./itemslice";

export const store = configureStore({
  reducer: {
    list: Listreducer,
    item: Itemreducer,
  },
});
