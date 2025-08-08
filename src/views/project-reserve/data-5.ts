/*
 * @Author: ymq
 * @Date: 2025-08-08 19:01:17
 * @LastEditTime: 2025-08-08 19:02:09
 * @LastEditors: ymq
 * @Description: 
 */
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
const data = [{
          id: '0001',
          fundNo: 'JG0000083',
          place: '深圳',
          registrationDate: '2025-08-06',
          registrationScale: '1000000.0000',
          minimumRecruitmentAmount: '200000.0000',
          productTerm: '2025-08-06',
          name: 'DRP中鼎地产TEST',
          creator: '测试',

        },
        {
          index: '2',
          fundNo: 'XY0000149',
          stage: '运营阶段',
          status: '结束',
          name: 'DRP中产燃气有限公司',
          manager: 'ADU',
          subscription: '50000.0000',
          paid: '50000.0000',
          creator: '测试',
          opration: '撤销 | 变更'
        },
        {
          index: '3',
          fundNo: 'SL0000032',
          stage: '运营阶段',
          status: '结束',
          name: '中国资产经营管理有限公司',
          manager: '中国资产经营管理有限公司',
          subscription: '5000.0000',
          paid: '5000.0000',
          creator: '测试',
          opration: '撤销 | 变更'
        },
        {
          index: '4',
          fundNo: 'JG0000055',
          stage: '运营阶段',
          status: '结束',
          name: '重投资本私募股份',
          manager: '中德产业投资基金',
          subscription: '200000.0000',
          paid: '200000.0000',
          creator: '测试',
          opration: '撤销 | 变更'
        },
        {
          index: '5',
          fundNo: 'JG0000058',
          stage: '运营阶段',
          status: '结束',
          name: '重投资本私募股份',
          manager: '深圳市重投资本',
          subscription: '200000.0000',
          paid: '200000.0000',
          creator: '测试',
          opration: '撤销 | 变更'
        }]

export {
    columns,
    data
}