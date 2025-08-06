/*
 * @Author: ymq
 * @Date: 2025-08-03 16:35:44
 * @LastEditTime: 2025-08-06 15:49:50
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
        type: 'index',
        minWidth: 30
    },
    {
        title: '产品全称',
        key: 'name',
        minWidth: 60
    },
    {
        title: '产品代码',
        key: 'fundNo',
        minWidth: 60
    },
    {
        title: '发行场所',
        key: 'place',
        minWidth: 60
    },
    {
        title: '产品注册日期',
        key: 'registrationDate',
        minWidth: 60
    },
    {
        title: '注册规模',
        key: 'registrationScale',
        minWidth: 80
    },
    {
        title: '最低募集金额',
        key: 'minimumRecruitmentAmount',
        minWidth: 100
    },
    {
        title: '产品期限',
        key: 'productTerm',
        minWidth: 100
    },
    {
        title: '托管人',
        key: 'creator',
        minWidth: 60
    },
    {
        title: '操作',
        slot: 'operation',
        fixed: 'right',
        width: 160,
        // render: (h, params) => {
        //     return h('div', [
        //         h('span', {
        //             style: {
        //                 color: '#2d8cf0',
        //                 cursor: 'pointer'
        //             }
        //         }, '撤销'),
        //         h('span',{
        //             style: {
        //                 margin: '0 5px'
        //             }
        //         }, '|'),
        //         h('span', {
        //             style: {
        //                 color: '#2d8cf0',
        //                 cursor: 'pointer'
        //             }
        //         }, '变更')
        //     ])
        // }
    }
]

export {
    columns
}