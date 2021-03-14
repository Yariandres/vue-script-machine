<template>
   <div cla="listView">
      <div class="bg-light">
         {{ name }}
      </div>
      
   </div>
</template>

<script>
   export default {
      props: {
         productName: {
            type: String,
            required: true
         },
         productBrand: {
            type: String,
            required: true
         }
      },
      data() {
         return {
            name: this.productName,
            brand: this.productBrand,

         }
      },
   }
</script>

<style lang="scss" scoped>

</style>