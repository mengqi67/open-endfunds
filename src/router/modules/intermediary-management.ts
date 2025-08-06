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
        path: '/intermediary-management/page-1',
        component: () => import('@/views/intermediary-management/page-1.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/intermediary-management/page-2',
        component: () => import('@/views/intermediary-management/page-2.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
       path: '/intermediary-management/detail',
        component: () => import('@/views/intermediary-management/detail.vue'),
        meta: {
            title: '合规审查',
            menuId: ''
        } 
    },
    {
        path: '/intermediary-management/new',
        component: () => import('@/views/intermediary-management/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes