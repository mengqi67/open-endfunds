/*
 * @Author: ymq
 * @Date: 2025-08-03 16:35:44
 * @LastEditTime: 2025-08-04 14:36:36
 * @LastEditors: ymq
 * @Description: 
 */
// import { h } from 'vue'
const columns = [    
    {
        title: '持有人账户号码',
        key: 'index',
        minWidth: 30
    },
    {
        title: '持有人账户全称',
        key: 'fundNo',
        minWidth: 60
    },
    {
        title: '账户状态',
        key: 'stage',
        minWidth: 60
    },
    {
        title: '账户类型',
        key: 'status',
        minWidth: 60
    },
    {
        title: '资金来源',
        key: 'name',
        minWidth: 60
    },
    {
        title: '账户归属人',
        key: 'manager',
        minWidth: 80
    },
    {
        title: '投资管理人',
        key: 'subscription',
        minWidth: 100
    },
    {
        title: '托管人',
        key: 'paid',
        minWidth: 100
    }
]
const data = [
    {
       
    }
]

export {
    columns,
    data
}