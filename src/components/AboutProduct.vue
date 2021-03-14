<template>
   <div class="about-product">
      <h4 class="text-dark">About The Product</h4>

      <div class="form-group d-flex flex-column">
         <label for="q1" class="form-label text-dark">
            <span class="font-weight-bold">Q1: Name brand of the product:</span>
            What is the name brand of product?
         </label>

         <input
            type="text"
            id="q1"
            class="form-control"
            placeholder="Ikea - Apple - Moder furniture"
            v-model="brandName"
         />
      </div>

      <div class="form-group mt-5 d-flex flex-column">
         <label for="q2" class="form-label text-dark">
            <span class="font-weight-bold"
               >Q1: Name of the product: 1. What is the name of the product you
               are selling.</span
            >
            (Example: 6 Set Kitchen Wooden Spoon - Flight Pillow - Iphone Cover)
         </label>

         <input
            type="text"
            id="q2"
            class="form-control"
            placeholder="6 Set Kitchen Wooden Spoon"
            v-model="productName"
         />
      </div>
      <button type="button" class="btn btn-warning" v-on:click="onReset">Reset fields</button>
   </div>
</template>

<script>
export default {
   data() {
      return {
         brandName: "",
         productName: "",
      };
   },
   methods: {
      onReset() {
         this.brandName = ""
         this.productName = ""
      }
   },
   watch: {
      brandName() {
         this.$emit("brandName", this.brandName);
      },
      productName() {
         this.$emit("productName", this.productName);
      },
   },
};
</script>

<style>
</style>