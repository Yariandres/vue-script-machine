<template>
   <div class="container">
      <hero-section></hero-section>

      <div class="bg-light p-4 mt-4">
         <about-product></about-product>
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
};
</script>
