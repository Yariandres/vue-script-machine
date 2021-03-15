<template>
   <div class="listView p-5">
      
         <div class="text-dark">
            <p class="listinPreview lead bg-light p-3 rounded text-dark">
               {{ productBrand }} - {{productName}}
            </p>
         </div>

         <div class="text-right">
            <small class="font-weight-bold">{{ currentLength }}</small>
         </div>
     
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

<style lang="scss" scope>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans&family=Montserrat:wght@500;600&display=swap");

.listinPreview {
   font-family: "Fira Sans", sans-serif;
   font-weight: 500;
   color: #2f2f4d !important;

   position: -webkit-sticky;
   position: sticky;
   top: 0;
}

</style>
