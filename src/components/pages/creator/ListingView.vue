<template>
   <div cla="listView">
      <div class="text-dark">
         <p class="lead bg-light p-3 rounded text-dark">{{ productBrand }}</p>
      </div>

      <small>{{currentLength}}</small>
   </div>
</template>

<script>
export default {
   props: {
      productBrand: {
         type: String,
         required: true,
      },
      productName: {
         type: String,
         required: true,
      },
   },
   data() {
      return {
         brand: this.productBrand,
         name: this.productName,
      };
   },
   computed: {
      currentLength() {
         return this.productBrand.length + this.productName.length;
      },
   },
};
</script>
