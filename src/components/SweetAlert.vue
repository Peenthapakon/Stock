// example-vue-component.vue
<template>
  <button @click="showAlert">Hello world</button>
</template>

<script>
export default {
  data(){
      return{
        num:10
      }
  },
  created() {
      this.rs = 'success'
     this.$swal.fire(this.name(this.rs))
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      if (this.num ==11) {
           this.option("success");
      }else{
          this.option("error");
      }
    },
  },
};
</script>
