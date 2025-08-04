/*
 * @Author: ymq
 * @Date: 2025-08-04 23:53:07
 * @LastEditTime: 2025-08-04 23:55:09
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/interview-manage/page-1',
        component: () => import('@/views/interview-manage/page-1.vue'),
        meta: {
            title: '面签管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/interview-manage/page-2',
        component: () => import('@/views/interview-manage/page-2.vue'),
        meta: {
            title: '面签管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/interview-manage/page-3',
        component: () => import('@/views/interview-manage/page-3.vue'),
        meta: {
            title: '面签管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/interview-manage/page-4',
        component: () => import('@/views/interview-manage/page-4.vue'),
        meta: {
            title: '面签管理',
            menuId: 'mySet'
        }
    },
    {
        path: '/interview-manage/page-5',
        component: () => import('@/views/interview-manage/page-5.vue'),
        meta: {
            title: '面签管理',
            menuId: 'mySet'
        }
    },
    {
       path: '/interview-manage/detail',
        component: () => import('@/views/interview-manage/detail.vue'),
        meta: {
            title: '面签管理',
            menuId: ''
        } 
    },
    {
        path: '/interview-manage/new',
        component: () => import('@/views/interview-manage/new.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes