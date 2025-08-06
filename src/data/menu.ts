/*
 * @Author: ymq
 * @Date: 2025-08-03 10:31:27
 * @LastEditTime: 2025-08-04 18:09:20
 * @LastEditors: ymq
 * @Description: 
 */
export interface menuItemType {
    menuId: string,
    title: string,
    icon?: string,
    link: string
}
export interface subMenuItemType {
    menuId: string,
    title: string,
    icon?: string,
    children: menuItemType[]
}
const menuData:Array<menuItemType | subMenuItemType> = [
    {
        menuId: 'projectReserve',
        title: '产品管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'projectReserve-1',
                title: '登记管理',
                link: '/project-reserve/page-1'
            },
            {
                menuId: 'projectReserve-2',
                title: '发行产品库',
                link: '/project-reserve/page-2'
            },
            {
                menuId: 'projectReserve-3',
                title: '历史信息查询',
                link: '/project-reserve/page-3'
            },
            {
                menuId: 'projectReserve-4',
                title: '存续期管理',
                link: '/project-reserve/page-4'
            }
        ]
    },
    {
        menuId: 'setProject',
        title: '综合查询',
        icon: 'md-folder',
        children: [
            {
                menuId: 'setProject-1',
                title: '账务查询',
                link: '/set-project/page-1'
            },
            {
                menuId: 'setProject-2',
                title: '份额查询',
                link: '/set-project/page-2'
            },
            {
                menuId: 'setProject-3',
                title: '份额流水查询',
                link: '/set-project/page-3'
            },
            {
                menuId: 'setProject-4',
                title: '名册查询',
                link: '/set-project/page-4'
            },
            {
                menuId: 'setProject-5',
                title: '投资账户收益查询',
                link: '/set-project/page-5'
            }
        ]
    },
    {
        menuId: 'intermediaryHiring',
        title: '立项管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'intermediaryHiring-1',
                title: '行政责任人管理',
                link: '/intermediary-hiring/page-1'
            },
            {
                menuId: 'intermediaryHiring-2',
                title: '风险责任人管理',
                link: '/intermediary-hiring/page-2'
            },
            {
                menuId: 'intermediaryHiring-3',
                title: '立项方案信息管理',
                link: '/intermediary-hiring/page-3'
            },
            {
                menuId: 'intermediaryHiring-4',
                title: '内部立项审批',
                link: '/intermediary-hiring/page-4'
            },
            {
                menuId: 'intermediaryHiring-5',
                title: '立项启动',
                link: '/intermediary-hiring/page-5'
            }
        ]
    },
    {
        menuId: 'dueDiligence',
        title: '尽调管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'dueDiligence-1',
                title: '一般财务管理',
                link: '/due-diligence/page-1'
            },
            {
                menuId: 'dueDiligence-2',
                title: '风险管理',
                link: '/due-diligence/page-2'
            },
            {
                menuId: 'dueDiligence-3',
                title: '三方尽调管理',
                link: '/due-diligence/page-3'
            },
            {
                menuId: 'dueDiligence-4',
                title: '尽调管理',
                link: '/due-diligence/page-4'
            }
        ]
    },
    {
        menuId: 'complianceReview',
        title: '项目储备管理系统',
        icon: 'md-folder',
        children: [
            {
                menuId: 'complianceReview-1',
                title: '项目来源管理',
                link: '/compliance-review/page-1'
            },
            {
                menuId: 'complianceReview-2',
                title: '风险合规筛查',
                link: '/compliance-review/page-2'
            },
            {
                menuId: 'complianceReview-3',
                title: '信息采集与校验',
                link: '/compliance-review/page-3'
            },
            {
                menuId: 'complianceReview-4',
                title: '评估与分级',
                link: '/compliance-review/page-4'
            },
            {
                menuId: 'complianceReview-5',
                title: '入库与动态管理',
                link: '/compliance-review/page-5'
            },
            {
                menuId: 'complianceReview-6',
                title: '审批管理',
                link: '/compliance-review/page-6'
            },
            {
                menuId: 'complianceReview-7',
                title: '项目质量分析看板',
                link: '/compliance-review/page-7'
            }
           
        ]
    },
    {
        menuId: 'riskreview',
        title: '风险审查管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'riskreview-1',
                title: '风险识别与清单管理',
                link: '/risk-review/page-1'
            },
            {
                menuId: 'riskreview-2',
                title: '风险评估与等级管理',
                link: '/risk-review/page-2'
            },
            {
                menuId: 'riskreview-3',
                title: '实时监控与预警',
                link: '/risk-review/page-3'
            },
            {
                menuId: 'riskreview-4',
                title: '合规与监管管理',
                link: '/risk-review/page-4'
            },
            {
                menuId: 'riskreview-5',
                title: '操作风险管理',
                link: '/risk-review/page-5'
            },
            {
                menuId: 'riskreview-6',
                title: '风险报告管理',
                link: '/risk-review/page-6'
            }
        ]
    },
    {
        menuId: 'investmentmanagement',
        title: '投委会管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'investmentmanagement-1',
                title: '投委会委员管理',
                link: '/investment-management/page-1'
            },
            {
                menuId: 'investmentmanagement-2',
                title: '操作与审计管理',
                link: '/investment-management/page-2'
            },
            {
                menuId: 'investmentmanagement-3',
                title: '安全管理',
                link: '/investment-management/page-3'
            }
        ]
    },
    {
        menuId: 'intermediarymanagement',
        title: '中介选聘管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'intermediarymanagement-1',
                title: '律师事务所管理',
                link: '/intermediary-management/page-1'
            },
            {
                menuId: 'intermediarymanagement-2',
                title: '会计事务所管理',
                link: '/intermediary-management/page-2'
            }
        ]
    },
    {
        menuId: 'textmanagement',
        title: '文本管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'textmanagement-1',
                title: '模板管理',
                link: '/text-management/page-1'
            }
        ]
    },
    {
        menuId: 'accountmanagement',
        title: '综合账户管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'accountmanagement-1',
                title: '岗位管理',
                link: '/account-management/page-1'
            },
            {
                menuId: 'accountmanagement-2',
                title: '操作员管理',
                link: '/account-management/page-2'
            },
            {
                menuId: 'accountmanagement-3',
                title: '机构信息管理',
                link: '/account-management/page-3'
            }
        ]
    }
    // {
    //     menuId: 'mySet',
    //     title: '我的基金',
    //     link: '/funds-set/my-funds'
    // }
]
export {
    menuData
}