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
        path: '/account-management/page-1',
        component: () => import('@/views/account-management/page-1.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/account-management/page-2',
        component: () => import('@/views/account-management/page-2.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/account-management/page-3',
        component: () => import('@/views/account-management/page-3.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
       path: '/account-management/detail',
        component: () => import('@/views/account-management/detail.vue'),
        meta: {
            title: '合规审查',
            menuId: ''
        } 
    },
    {
        path: '/account-management/new',
        component: () => import('@/views/account-management/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    },
    {
        path: '/account-management/new-2',
        component: () => import('@/views/account-management/new-2.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes