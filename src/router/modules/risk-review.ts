/*
 * @Author: ymq
 * @Date: 2025-08-03 17:39:39
 * @LastEditTime: 2025-08-04 23:14:36
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/risk-review/page-1',
        component: () => import('@/views/risk-review/page-1.vue'),
        meta: {
            title: '风险审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/risk-review/page-2',
        component: () => import('@/views/risk-review/page-2.vue'),
        meta: {
            title: '风险审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/risk-review/page-3',
        component: () => import('@/views/risk-review/page-3.vue'),
        meta: {
            title: '风险审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/risk-review/page-4',
        component: () => import('@/views/risk-review/page-4.vue'),
        meta: {
            title: '风险审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/risk-review/page-5',
        component: () => import('@/views/risk-review/page-5.vue'),
        meta: {
            title: '风险审查',
            menuId: 'mySet'
        }
    },
    {
       path: '/risk-review/detail',
        component: () => import('@/views/risk-review/detail.vue'),
        meta: {
            title: '风险审查',
            menuId: ''
        } 
    },
    {
        path: '/risk-review/new',
        component: () => import('@/views/risk-review/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes