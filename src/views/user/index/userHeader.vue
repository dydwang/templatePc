<template>
  <div class="user">
    <el-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <user-image @click.native="signIn" style="cursor:pointer" slot="reference" size="30px" round="15px" :my-node="false" :src="require('@/assets/noLogin.jpg')" class="header-user-img"></user-image>
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: 'userHeader',
    props: [''],
    components: {},
    data() {
      return {}
    },
    computed: {},
    methods: {
      signIn() {
        this.$routerGo('/signIn')
      }
    },
    mounted() {
    },
    created() {
    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
  .user {
    position: relative;
    top: 15px;
  }
</style>

