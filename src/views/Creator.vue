<template>
   <div class="container-fluid">
      <hero-section></hero-section>

      <div class="row">
         <div class="col bg-light p-5">
            <about-product
               v-on:brandName="productBrand = $event"
               v-on:productName="productName = $event"
            ></about-product>
         </div>

         <div class="col p-5">
            <listing-view
               :productBrand="productBrand"
               :productName="productName"
            ></listing-view>
         </div>
      </div>
   </div>
</template>

<script>
import HeroSection from "../components/HeroSection";
import AboutProduct from "../components/AboutProduct";
import ListingView from "../components/pages/creator/ListingView";

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
