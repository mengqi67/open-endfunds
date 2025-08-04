/*
 * @Author: ymq
 * @Date: 2025-08-03 17:39:39
 * @LastEditTime: 2025-08-04 16:18:17
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/project-reserve/page-1',
        component: () => import('@/views/project-reserve/page-1.vue'),
        meta: {
            title: '项目储备库管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/project-reserve/page-2',
        component: () => import('@/views/project-reserve/page-2.vue'),
        meta: {
            title: '项目储备库管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/project-reserve/page-3',
        component: () => import('@/views/project-reserve/page-3.vue'),
        meta: {
            title: '项目储备库管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/project-reserve/page-4',
        component: () => import('@/views/project-reserve/page-4.vue'),
        meta: {
            title: '项目储备库管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/project-reserve/page-5',
        component: () => import('@/views/project-reserve/page-5.vue'),
        meta: {
            title: '项目储备库管理',
            menuId: 'mySet'
        }
    },
    {
       path: '/project-reserve/detail',
        component: () => import('@/views/project-reserve/detail.vue'),
        meta: {
            title: '项目储备库管理',
            menuId: ''
        } 
    },
    {
        path: '/project-reserve/new',
        component: () => import('@/views/project-reserve/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes