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
        type: 'selection',
        width: 60,
        align: 'center'
    },
    {
        title: '序号',
        key: 'index',
        minWidth: 30
    },
    {
        title: '产品全称',
        key: 'fundNo',
        minWidth: 60
    },
    {
        title: '产品代码',
        key: 'stage',
        minWidth: 60
    },
    {
        title: '产品种类',
        key: 'status',
        minWidth: 60
    },
    {
        title: '产品管理人',
        key: 'name',
        minWidth: 60
    },
    {
        title: '流程状态',
        key: 'manager',
        minWidth: 80
    },
    {
        title: '流程进度',
        key: 'subscription',
        minWidth: 100
    },
    {
        title: '初始登记完成时间',
        key: 'paid',
        minWidth: 100
    },
    {
        title: '操作',
        key: 'opration',
        fixed: 'right',
        width: 140,
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
        index: '1',
        fundNo: '债券投资计划1',
        stage: '10916000003',
        status: '债券投资计划',
        name: 'DRP中鼎地产TEST',
        manager: '预登记完成',
        subscription: '平台审核通过',
        paid: '2025-08-04 14:18:45',
        opration: '查看 | 下载'

    },
    {
        index: '2',
        fundNo: '债券投资计划2',
        stage: '1091600004',
        status: '股权投资计划',
        name: 'DRP中产燃气有限公司',
        manager: '初始登记完成',
        subscription: '平台审核通过',
        paid: '2025-08-04 14:18:45',        
        opration: '查看 | 下载'
    },
    {
       index: '3',
       fundNo: '债券投资计划2',
        stage: '1091600004',
        status: '股权投资计划',
        name: 'DRP中产燃气有限公司',
        manager: '预登记变更流程中',
        subscription: '提交审核',
        paid: '2025-08-04 14:18:45',        
        opration: '查看 | 下载'
    },
    
]

export {
    columns,
    data
}