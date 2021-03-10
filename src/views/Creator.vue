<template>
   <div class="container-fluid">
      <hero-section></hero-section>

      <div class="row">
         <div class="col bg-light p-5">
            <about-product></about-product>
            <about-product></about-product>
            <about-product></about-product>
            <about-product></about-product>
            <about-product></about-product>
            <about-product></about-product>
            <about-product></about-product>
         </div>

         <div class="col">

            <p class="bg-info text-light" style="position: sticky; top: 0">Some stick element</p>
         </div>
      </div>
   </div>
</template>

<script>
import HeroSection from "../components/HeroSection";
import AboutProduct from "../components/AboutProduct";

export default {
   components: {
      HeroSection,
      AboutProduct,
   },

   data() {
      return {
         productBrand: "",
         productName: "",
      };
   },
};
</script>
