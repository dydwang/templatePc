<template>
    <div class="index">
        <el-container>
            <el-header height="60px">
                <headers></headers>
            </el-header>

            <el-main>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>

            <el-footer>
                <footers></footers>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import headers from "./header";
    import footers from "./footer";
  export default {
    name: 'index',
    props: [''],
    components: {headers,footers},
    data() {
      return {}
    },
    computed: {},
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
        .el-header{
            width: 100%;
          background-color: #ffffff;
          border-bottom: 1px solid #eeeeee;
        }
        .el-main{
          min-height: 716px;
          width: 100%;
          padding: 0 0;
          margin: 0 0;
        }
      .el-footer{
        padding: 0;
        z-index: 10;
      }
    }
</style>

