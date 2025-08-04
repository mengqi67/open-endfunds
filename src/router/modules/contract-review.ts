/*
 * @Author: ymq
 * @Date: 2025-08-04 23:31:09
 * @LastEditTime: 2025-08-04 23:31:11
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/contract-review/page-1',
        component: () => import('@/views/contract-review/page-1.vue'),
        meta: {
            title: '合同审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/contract-review/page-2',
        component: () => import('@/views/contract-review/page-2.vue'),
        meta: {
            title: '合同审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/contract-review/page-3',
        component: () => import('@/views/contract-review/page-3.vue'),
        meta: {
            title: '合同审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/contract-review/page-4',
        component: () => import('@/views/contract-review/page-4.vue'),
        meta: {
            title: '合同审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/contract-review/page-5',
        component: () => import('@/views/contract-review/page-5.vue'),
        meta: {
            title: '合同审查',
            menuId: 'mySet'
        }
    },
    {
       path: '/contract-review/detail',
        component: () => import('@/views/contract-review/detail.vue'),
        meta: {
            title: '合同审查',
            menuId: ''
        } 
    },
    {
        path: '/contract-review/new',
        component: () => import('@/views/contract-review/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes