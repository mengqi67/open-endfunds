/*
 * @Author: ymq
 * @Date: 2025-08-04 17:52:24
 * @LastEditTime: 2025-08-04 17:52:51
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/intermediary-hiring/page-1',
        component: () => import('@/views/intermediary-hiring/page-1.vue'),
        meta: {
            title: '中介选聘',
            menuId: 'mySet'
        }
    },
    {
        path: '/intermediary-hiring/page-2',
        component: () => import('@/views/intermediary-hiring/page-2.vue'),
        meta: {
            title: '中介选聘',
            menuId: 'mySet'
        }
    },
    {
        path: '/intermediary-hiring/page-3',
        component: () => import('@/views/intermediary-hiring/page-3.vue'),
        meta: {
            title: '中介选聘',
            menuId: 'mySet'
        }
    },
    {
        path: '/intermediary-hiring/page-4',
        component: () => import('@/views/intermediary-hiring/page-4.vue'),
        meta: {
            title: '中介选聘',
            menuId: 'mySet'
        }
    },
    {
        path: '/intermediary-hiring/page-6',
        component: () => import('@/views/intermediary-hiring/page-6.vue'),
        meta: {
            title: '中介选聘',
            menuId: 'mySet'
        }
    },
    {
        path: '/intermediary-hiring/page-5',
        component: () => import('@/views/intermediary-hiring/page-5.vue'),
        meta: {
            title: '中介选聘',
            menuId: 'mySet'
        }
    },
    {
       path: '/intermediary-hiring/detail',
        component: () => import('@/views/intermediary-hiring/detail.vue'),
        meta: {
            title: '中介选聘',
            menuId: ''
        } 
    },
    {
        path: '/intermediary-hiring/new',
        component: () => import('@/views/intermediary-hiring/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes