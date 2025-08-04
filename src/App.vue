<!--
 * @Author: ymq
 * @Date: 2025-08-01 19:57:09
 * @LastEditTime: 2025-08-03 14:08:30
 * @LastEditors: ymq
 * @Description: 
-->
<script setup lang="ts">
import {Layout, Sider, Header, Content, Footer} from 'view-ui-plus'
import sysMenu from '@/components/sysMenu.vue';
</script>

<template>
  <Layout class="main">
        <Sider class="layout-sider" hide-trigger>
          <div class="sys-name">投资管理系统</div>
          <sysMenu></sysMenu>
        </Sider>
        <Layout>
            <!-- <Header class="layout-header">Header</Header> -->
            <Content class="layout-content"><router-view></router-view></Content>
            <!-- <Footer class="layout-footer">Footer</Footer> -->
        </Layout>
    </Layout>
</template>

<style lang="scss" scoped>
.main{
  height: 100vh;
}
.sys-name{
  padding: 15px 15px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #706f6f;
}
</style>
