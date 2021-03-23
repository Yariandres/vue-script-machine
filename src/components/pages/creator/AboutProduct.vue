<template>
   <div class="about-product p-5 text-dark border-right border-bottom">
      <h4 class="mb-4">About The Product</h4>

      <div class="form-group d-flex flex-column">
         <label for="q1" class="form-label">
            <span class="font-weight-bold">Q1: Name brand of the product:</span>
            What is the name brand of product?
         </label>

         <input
            type="text"
            id="q1"
            class="form-control"
            placeholder="Baleaf Sports - Apple - Moder furniture"
            v-model="brandName"
            v-on:input="setBrand($event.target.value)"
         />
      </div>

      <div class="form-group mt-5 d-flex flex-column">
         <label for="q2" class="form-label">
            <span class="font-weight-bold"
               >Q1: Name of the product: 1. What is the name of the product you
               are sellingZ
            </span>
            <span class="text-secondary">
               (Example: 6 Set Kitchen Wooden Spoon - Nylon Braided Lightning to
               USB A Cable - Iphone Cover)
            </span>
         </label>

         <input
            type="text"
            id="q2"
            class="form-control"
            placeholder="6 Set Kitchen Wooden Spoon"
            v-model="productName"
            v-on:input="setName($event.target.value)"
         />
      </div>
      <button type="button" class="btn btn-warning" v-on:click="onReset">
         Reset fields
      </button>
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
         this.brandName = "";
         this.productName = "";
      },
      setBrand(value) {
         this.$emit("brandName", value);
      },
      setName(value) {
         this.$emit("productName", value);
      },
   },
};
</script>

<style>
.bgAboutProduct {
   background-color: #f6f9fc;
}
</style>
