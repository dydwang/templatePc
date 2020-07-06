<template>
  <div class="index">
    <iframe class="particle" src="static/particle/index.html" frameborder="0"></iframe>
    <div style="position: relative;top: -716px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    props: [''],
    components: {},
    data() {
      return {}
    },
    computed: {
    },
    methods: {},
    mounted() {
    },
    created() {
    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
  .index {
    width: 100%;
    height: 716px;
    overflow: hidden;
    .particle{
      overflow: hidden;
      width: 120vw;
      height:716px;
    }
  }
</style>

