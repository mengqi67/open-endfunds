/*
 * @Author: ymq
 * @Date: 2025-08-04 18:04:23
 * @LastEditTime: 2025-08-04 18:07:43
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/compliance-review/page-1',
        component: () => import('@/views/compliance-review/page-1.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/compliance-review/page-2',
        component: () => import('@/views/compliance-review/page-2.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/compliance-review/page-3',
        component: () => import('@/views/compliance-review/page-3.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/compliance-review/page-4',
        component: () => import('@/views/compliance-review/page-4.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/compliance-review/page-5',
        component: () => import('@/views/compliance-review/page-5.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
       path: '/compliance-review/detail',
        component: () => import('@/views/compliance-review/detail.vue'),
        meta: {
            title: '合规审查',
            menuId: ''
        } 
    },
    {
        path: '/compliance-review/new',
        component: () => import('@/views/compliance-review/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes