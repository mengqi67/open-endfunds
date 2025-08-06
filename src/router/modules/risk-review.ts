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
        path: '/risk-review/page-1',
        component: () => import('@/views/risk-review/page-1.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/risk-review/page-2',
        component: () => import('@/views/risk-review/page-2.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/risk-review/page-3',
        component: () => import('@/views/risk-review/page-3.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/risk-review/page-4',
        component: () => import('@/views/risk-review/page-4.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/risk-review/page-5',
        component: () => import('@/views/risk-review/page-5.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
        path: '/risk-review/page-6',
        component: () => import('@/views/risk-review/page-6.vue'),
        meta: {
            title: '合规审查',
            menuId: 'mySet'
        }
    },
    {
       path: '/risk-review/detail',
        component: () => import('@/views/risk-review/detail.vue'),
        meta: {
            title: '合规审查',
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