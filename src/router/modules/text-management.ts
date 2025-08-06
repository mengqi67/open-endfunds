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
        path: '/text-management/page-1',
        component: () => import('@/views/text-management/page-1.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
       path: '/text-management/detail',
        component: () => import('@/views/text-management/detail.vue'),
        meta: {
            title: '合规审查',
            menuId: ''
        } 
    },
    {
        path: '/text-management/new',
        component: () => import('@/views/text-management/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes