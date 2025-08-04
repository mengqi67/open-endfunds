/*
 * @Author: ymq
 * @Date: 2025-08-04 23:24:41
 * @LastEditTime: 2025-08-04 23:25:59
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/investment-committee/page-1',
        component: () => import('@/views/investment-committee/page-1.vue'),
        meta: {
            title: '投委会决策',
            menuId: 'mySet'
        }
    },
    {
        path: '/investment-committee/page-2',
        component: () => import('@/views/investment-committee/page-2.vue'),
        meta: {
            title: '投委会决策',
            menuId: 'mySet'
        }
    },
    {
        path: '/investment-committee/page-3',
        component: () => import('@/views/investment-committee/page-3.vue'),
        meta: {
            title: '投委会决策',
            menuId: 'mySet'
        }
    },
    {
        path: '/investment-committee/page-4',
        component: () => import('@/views/investment-committee/page-4.vue'),
        meta: {
            title: '投委会决策',
            menuId: 'mySet'
        }
    },
    {
        path: '/investment-committee/page-5',
        component: () => import('@/views/investment-committee/page-5.vue'),
        meta: {
            title: '投委会决策',
            menuId: 'mySet'
        }
    },
    {
       path: '/investment-committee/detail',
        component: () => import('@/views/investment-committee/detail.vue'),
        meta: {
            title: '投委会决策',
            menuId: ''
        } 
    },
    {
        path: '/investment-committee/new',
        component: () => import('@/views/investment-committee/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes