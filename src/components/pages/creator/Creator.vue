<template>
   <div class="container-fluid">
      <div class="mx-auto p-5 bg-light">
         <h2>Instructions:</h2>

         <ul class="list-group list-group-flush instructions">
            <li class="list-group-item">
               <BIconCheckCircle variant="secondary" /> 
               Fill in the form bellow
               and click the "Generate" button below
            </li>
            <li class="list-group-item">
               <BIconCheckCircle variant="secondary" /> 
               Edit the content to read
               well if needed
            </li>
            <li class="list-group-item">
               <BIconCheckCircle variant="secondary" /> 
               Upload it to amazon
            </li>
         </ul>
      </div>

      <div class="row">
         <div class="col">
            <about-product
               v-on:brandName="productBrand = $event"
               v-on:productName="productName = $event"
            ></about-product>

            <target-audience></target-audience>
         </div>

         <div class="col">
            <listing-view
               :productBrand="productBrand"
               :productName="productName"
            ></listing-view>
         </div>
      </div>
   </div>
</template>

<script>
import AboutProduct from "./AboutProduct";
import ListingView from "./ListingView";
import TargetAudience from "./TargetAudience";

// Icons
import { BIconCheckCircle } from "bootstrap-vue";

export default {
   components: {
      AboutProduct,
      ListingView,
      TargetAudience,

      BIconCheckCircle,
   },

   data() {
      return {
         productBrand: "",
         productName: "",
      };
   },
};
</script>

<style lang="scss" scope>
.instructions {
   width: max-content;
}
</style>