/*
 * @Author: ymq
 * @Date: 2025-08-04 17:42:39
 * @LastEditTime: 2025-08-04 17:43:41
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/set-project/page-1',
        component: () => import('@/views/set-project/page-1.vue'),
        meta: {
            title: '立项管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/set-project/page-2',
        component: () => import('@/views/set-project/page-2.vue'),
        meta: {
            title: '立项管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/set-project/page-3',
        component: () => import('@/views/set-project/page-3.vue'),
        meta: {
            title: '立项管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/set-project/page-4',
        component: () => import('@/views/set-project/page-4.vue'),
        meta: {
            title: '立项管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/set-project/page-5',
        component: () => import('@/views/set-project/page-5.vue'),
        meta: {
            title: '立项管理',
            menuId: 'mySet'
        }
    },
    {
       path: '/set-project/detail',
        component: () => import('@/views/set-project/detail.vue'),
        meta: {
            title: '立项管理',
            menuId: ''
        } 
    },
    {
        path: '/set-project/new',
        component: () => import('@/views/set-project/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes