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
        title: '岗位编号',
        key: 'positionid',
        minWidth: 30
    },
    {
        title: '岗位名称',
        key: 'positionname',
        minWidth: 60
    },
    {
        title: '岗位状态',
        key: 'positionstatus',
        minWidth: 60
    },
    {
        title: '岗位人数',
        key: 'positionamount',
        minWidth: 60
    },
    {
        title: '创建时间',
        key: 'creattime',
        minWidth: 60
    },
    {
        title: '创建人',
        key: 'creator',
        minWidth: 80
    },
    {
        title: '操作',
        slot: 'operation',
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


export {
    columns,  
}