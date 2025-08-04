<!--
 * @Author: ymq
 * @Date: 2025-08-03 10:00:03
 * @LastEditTime: 2025-08-03 17:04:13
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <!-- <Menu width="auto" theme="dark" :active-name="route.meta.menuId"> -->
    <Menu width="auto" theme="dark" :active-name="route.meta.menuId">
        <template v-for="item in menuData">
            <Submenu v-if="isSubMenu(item)" :name="item.menuId">
                <template #title>
                    <Icon :type="item.icon ? item.icon : 'md-folder'"></Icon>
                    {{ item.title }}
                </template>
                <MenuItem v-for="(menu) in item.children" :to="menu.link" :name="menu.menuId">{{ menu.title }}</MenuItem>
            </Submenu>
            <MenuItem v-else :name="item.menuId" :to="item.link">
                <Icon :type="item.icon ? item.icon : 'md-folder'"></Icon>
                {{ item.title }}
            </MenuItem>
        </template>
    </Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Submenu, MenuItem, Icon } from 'view-ui-plus'
import { useRoute, useRouter } from 'vue-router'
import { menuData } from '@/data/menu';
// import type {menuItemType, subMenuItemType} from '@/data/menu'

const route = useRoute()

function isSubMenu(item) {
    // console.log(item);
    if (item.children) {
        return true
    }
    return false
}

const menuActiveName = ref('')
</script>

<style scoped>

</style>