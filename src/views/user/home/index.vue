<template>
    <div class="index">
        <el-carousel :interval="2000"  height="600px">
            <el-carousel-item v-for="(item,index) in tableData" :key="index">
                <a :href="item.url" target="_Blank" v-if="item.url">
                    <user-image :src="item.image" width="100%"></user-image>
                </a>
                <user-image  v-else :src="item.image" width="100%"></user-image>
            </el-carousel-item>
        </el-carousel>

    </div>
</template>

<script>
  export default {
    name: 'index',
    props: [''],
    components: {},
    data() {
      return {
        tableData:[]
      }
    },
    computed: {},
    methods: {},
    mounted() {
    },
    async created() {
      this.$api.get('carousel',{$orderBY: {col:'ids'}},res=>{
        this.tableData=res
      })
    },
    watch() {
    }
  }
</script>

<style scoped lang="scss">
    .index {
    }
</style>

