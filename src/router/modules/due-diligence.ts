/*
 * @Author: ymq
 * @Date: 2025-08-04 17:59:07
 * @LastEditTime: 2025-08-04 18:00:08
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/due-diligence/page-1',
        component: () => import('@/views/due-diligence/page-1.vue'),
        meta: {
            title: '尽调管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/due-diligence/page-2',
        component: () => import('@/views/due-diligence/page-2.vue'),
        meta: {
            title: '尽调管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/due-diligence/page-3',
        component: () => import('@/views/due-diligence/page-3.vue'),
        meta: {
            title: '尽调管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/due-diligence/page-4',
        component: () => import('@/views/due-diligence/page-4.vue'),
        meta: {
            title: '尽调管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/due-diligence/page-5',
        component: () => import('@/views/due-diligence/page-5.vue'),
        meta: {
            title: '尽调管理',
            menuId: 'mySet'
        }
    },
    {
       path: '/due-diligence/detail',
        component: () => import('@/views/due-diligence/detail.vue'),
        meta: {
            title: '尽调管理',
            menuId: ''
        } 
    },
    {
        path: '/due-diligence/new',
        component: () => import('@/views/due-diligence/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes