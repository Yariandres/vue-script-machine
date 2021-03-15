<template>
   <div class="container-fluid">
      <hero-section></hero-section>

      <div class="row">
         <div class="col">
            <about-product
               v-on:brandName="productBrand = $event"
               v-on:productName="productName = $event"
            ></about-product>
         </div>

         <div class="col">
            <listing-view
               :productBrand="productBrand"
               :productName="productName"
            ></listing-view>

            <listing-icon />
         </div>
      </div>
   </div>
</template>

<script>
import HeroSection from "./HeroSection";
import AboutProduct from "./AboutProduct";
import ListingView from "./ListingView";

// UI



export default {
   components: {
      HeroSection,
      AboutProduct,
      ListingView,

   },

   data() {
      return {
         productBrand: "",
         productName: "",
      };
   },
};
</script>
