<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key"/>
            <!--      <div v-show="$route.meta.isMicro" id="frame"></div>-->
        </transition>
    </section>
</template>

<script>
// 在主应用中注册微应用
// import startQiankun from '../../../micro';

export default {
    name: 'AppMain',
    computed: {
        key() {
            return this.$route.path;
        }
    },
    mounted() {
        this.$nextTick(() => {
            // console.log(this.$route.meta.isMicro, 777);
            // startQiankun();
        });
    }
};
</script>
<style lang="stylus" scoped>
.app-main {
    min-height: calc(100vh - 120px);
    box-sizing: border-box;
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 0;
}
</style>
