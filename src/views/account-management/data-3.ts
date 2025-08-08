/*
 * @Author: ymq
 * @Date: 2025-08-08 19:04:25
 * @LastEditTime: 2025-08-08 19:04:27
 * @LastEditors: ymq
 * @Description: 
 */
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
        key: 'index',
        minWidth: 30
    },
    {
        title: '岗位名称',
        key: 'fundNo',
        minWidth: 60
    },
    {
        title: '岗位状态',
        key: 'stage',
        minWidth: 60
    },
    {
        title: '岗位人数',
        key: 'status',
        minWidth: 60
    },
    {
        title: '创建时间',
        key: 'name',
        minWidth: 60
    },
    {
        title: '创建人',
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
        index: '110019',
        fundNo: '发行岗',
        stage: '正常',
        status: '2',
        name: '2025-08-01 14：23：32',
        manager: '张XX',
        operate: '查看权限 | 变更 | 停用 | 注销'

    },
     {
        index: '110020',
        fundNo: '投后岗',
        stage: '正常',
        status: '8',
        name: '2025-08-02 10：15：47',
        manager: '张XX',
        operate: '查看权限 | 变更 | 停用 | 注销'

    }
]

export {
    columns,
    data
}