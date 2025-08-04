/*
 * @Author: ymq
 * @Date: 2025-08-01 20:28:00
 * @LastEditTime: 2025-08-03 17:39:39
 * @LastEditors: ymq
 * @Description: 
 */
// import type { Router } from 'vue-router'
const routes = [
    {
        path: '/funds-set/my-funds',
        component: () => import('@/views/funds-set/myFunds.vue'),
        meta: {
            title: '我的基金',
            menuId: 'mySet'
        }
    },
    {
        path: '/funds-set/new-investor',
        component: () => import('@/views/funds-set/newInvestor.vue'),
        meta: {
            title: '投资者适当性管理新建'
        }
    }
]

export default routes