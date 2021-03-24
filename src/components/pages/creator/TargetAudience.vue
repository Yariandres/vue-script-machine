<template>
   <div class="about-product p-5 text-dark border-right border-bottom">
      <h4 class="mb-4">Target Audience</h4>

      <div class="form-group d-flex flex-column">
         <label for="q3" class="form-label">
            <span class="font-weight-bold">
               Q1: Who is your target audience:</span>
               What is the name brand of product?
         </label>

         <input
            type="text"
            id="q3"
            class="form-control"
            placeholder="Baleaf Sports - Apple - Moder furniture"
            v-model="brandName"
            v-on:input="setBrand($event.target.value)"
         />
      </div>

      <div class="form-group mt-5 d-flex flex-column">
         <label for="q4" class="form-label">
            <span class="font-weight-bold"
               >Q1: Name of the product: 1. What is the name of the product you
               are selling
            </span
            >
            <span class="text-secondary">
               (Example: 6 Set Kitchen Wooden Spoon - Nylon Braided Lightning to
               USB A Cable - Iphone Cover)
            </span>
         </label>

         <input
            type="text"
            id="q4"
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
export default {};
</script>

<style lang="scss" scoped>
</style>