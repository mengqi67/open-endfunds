/*
 * @Author: ymq
 * @Date: 2025-08-04 23:46:31
 * @LastEditTime: 2025-08-04 23:47:41
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/contract-text-approval/page-1',
        component: () => import('@/views/contract-text-approval/page-1.vue'),
        meta: {
            title: '合同文本审定',
            menuId: 'mySet'
        }
    },
    {
        path: '/contract-text-approval/page-2',
        component: () => import('@/views/contract-text-approval/page-2.vue'),
        meta: {
            title: '合同文本审定',
            menuId: 'mySet'
        }
    },
    {
        path: '/contract-text-approval/page-3',
        component: () => import('@/views/contract-text-approval/page-3.vue'),
        meta: {
            title: '合同文本审定',
            menuId: 'mySet'
        }
    },
    {
        path: '/contract-text-approval/page-4',
        component: () => import('@/views/contract-text-approval/page-4.vue'),
        meta: {
            title: '合同文本审定',
            menuId: 'mySet'
        }
    },
    {
        path: '/contract-text-approval/page-5',
        component: () => import('@/views/contract-text-approval/page-5.vue'),
        meta: {
            title: '合同文本审定',
            menuId: 'mySet'
        }
    },
    {
       path: '/contract-text-approval/detail',
        component: () => import('@/views/contract-text-approval/detail.vue'),
        meta: {
            title: '合同文本审定',
            menuId: ''
        } 
    },
    {
        path: '/contract-text-approval/new',
        component: () => import('@/views/contract-text-approval/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes