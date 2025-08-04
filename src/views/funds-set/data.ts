/*
 * @Author: ymq
 * @Date: 2025-08-03 16:35:44
 * @LastEditTime: 2025-08-03 17:33:11
 * @LastEditors: ymq
 * @Description: 
 */
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
        title: '基金编号',
        key: 'fundNo',
        minWidth: 60
    },
    {
        title: '基金阶段',
        key: 'stage',
        minWidth: 60
    },
    {
        title: '流程状态',
        key: 'status',
        minWidth: 60
    },
    {
        title: '基金名称',
        key: 'name',
        minWidth: 60
    },
    {
        title: '管理人名称',
        key: 'manager',
        minWidth: 80
    },
    {
        title: '认缴金额（万元）',
        key: 'subscription',
        minWidth: 100
    },
    {
        title: '实缴金额（万元）',
        key: 'paid',
        minWidth: 100
    },
    {
        title: '创建人',
        key: 'creator',
        minWidth: 60
    },
    {
        title: '操作',
        key: 'operate',
        fixed: 'right',
        width: 80
    }
]
const data = [
    {
        index: '1',
        fundNo: 'JG0000083',
        stage: '基金立项',
        status: '待审',
        name: 'DRP中鼎地产TEST',
        manager: 'ADU',
        subscription: '200000.0000',
        paid: '200000.0000',
        creator: '测试'

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
        creator: '测试'
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
        creator: '测试'
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
        creator: '测试'
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
        creator: '测试'
    }
]

export {
    columns,
    data
}