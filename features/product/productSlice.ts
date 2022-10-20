import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import type { RootState } from '../../app/store';
  
  // declaring the types for our state
  export type ProductState = {
    products: any[]
  }
  
  const initialState: ProductState = {
    products: [{
      name: `Chaz Kangeroo Hoodie`,
      description: `Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat. Two-tone gray heather hoodie. Drawstring-adjustable hood. Machine wash/dry.`
    },
    {
      name: `Teton Pullover Hoodie`,
      description: `This Teton Pullover Hoodie gives you more than laid-back style. It's equipped with moisture-wicking fabric to keep light and dry inside, especially in chilly-weather workouts. An elasticized hem lets you move about freely. Black pullover hoodie. Soft, brushed interior.  Front hand pockets. Machine wash/dry.`
    },
    {
      name: `Bruno Compete Hoodie`,
      description: `Stay comfortable and stay in the race no matter what the weather's up to. The Bruno Compete Hoodie's water-repellent exterior shields you from the elements, while advanced fabric technology inside wicks moisture to keep you dry. Full zip black hoodie pullover.  Adjustable drawstring hood. Ribbed cuffs/waistband. Kangaroo pocket. Machine wash/dry.`
    },
    {
      name: `Frankie  Sweatshirt`,
      description: `The Frankie Sweatshirt is your best friend at long afternoon stadium stints or winter trailside campsites. The soft fleece fabric keeps you toasty as moisture-wicking technology kicks in when the sun comes out.`
    },
    {
      name: `Hollister Backyard Sweatshirt`,
      description: `Kick off your weekend in the Hollister Backyard Sweatshirt. Whether you're raking leaves or flipping burgers, this comfy layer blocks the bite of the crisp autumn air. Puffy thick from hood to hem, it traps heat against your core. Cream crewneck sweatshirt with navy sleeves/trim. Relaxed fit. Ribbed cuffs and hem. Machine wash/dry.`
    }
  ]
  };
  
  export const productSlice = createSlice({
    name: 'product',
    initialState,
  // The `reducers` field lets us define reducers and generate associated actions. 
    reducers: {
      editProduct: (state, action: PayloadAction<{ index: number, name: string, description: string }>) => {
        state.products[action.payload.index]={name:action.payload.name, description:action.payload.description};
      },
      deleteProduct: (state, action: PayloadAction<{ index: number }>) => {
        state.products.splice(action.payload.index,1);
      },
      addProduct: (state, action: PayloadAction<{ name: string, description: string }>) => {
        state.products.push(action.payload);
      },
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    addProduct,
    editProduct, 
    deleteProduct, 
  } = productSlice.actions;
  
  // calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
  export const selectProduct = (state: RootState) => state.products.products;
  
  // exporting the reducer here, as we need to add this to the store
  export default productSlice.reducer;