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
        title: '操作员代码',
        key: 'index',
        minWidth: 30
    },
    {
        title: '操作员名称',
        key: 'fundNo',
        minWidth: 60
    },
    {
        title: '操作员状态',
        key: 'stage',
        minWidth: 60
    },
    {
        title: '操作员类型',
        key: 'status',
        minWidth: 60
    },
    {
        title: '所属用户编号',
        key: 'name',
        minWidth: 60
    },
    {
        title: '岗位',
        key: 'manager',
        minWidth: 80
    },
    {
        title: '操作',
        key: 'operate',
        fixed: 'right',
        width: 280,
        // render: (h, params) => {
        //     return h('span', {
        //         style: {
        //             color: '#2d8cf0',
        //             cursor: 'pointer'
        //         }
        //     }, '查看')
        // }
    }
]
const data = [
    {
        index: '001',
        fundNo: '操作员1',
        stage: '正常',
        status: '普通操作员',
        name: '1000239',
        manager: '发行岗',
        operate: '重置密码 | 变更 | 停用 | 注销'

    },
     {
       index: '002',
        fundNo: '操作员1',
        stage: '冻结',
        status: '普通操作员',
        name: '1000019',
        manager: '投后岗',
        operate: '重置密码 | 变更 | 停用 | 注销'

    },
     {
       index: '003',
        fundNo: '操作员1',
        stage: '正常',
        status: '系统管理员',
        name: '1000527',
        manager: '综合账户管理岗',
        operate: '重置密码 | 变更 | 停用 | 注销'

    }
]

export {
    columns,
    data
}