/*
 * @Author: ymq
 * @Date: 2025-08-03 10:31:27
 * @LastEditTime: 2025-08-04 23:31:04
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
        title: '项目储备库管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'projectReserve-1',
                title: '1',
                link: '/project-reserve/page-1'
            },
            {
                menuId: 'projectReserve-2',
                title: '2',
                link: '/project-reserve/page-2'
            },
            {
                menuId: 'projectReserve-3',
                title: '3',
                link: '/project-reserve/page-3'
            },
            {
                menuId: 'projectReserve-4',
                title: '4',
                link: '/project-reserve/page-4'
            },
            {
                menuId: 'projectReserve-5',
                title: '5',
                link: '/project-reserve/page-5'
            }
        ]
    },
    {
        menuId: 'setProject',
        title: '立项管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'setProject-1',
                title: '1',
                link: '/set-project/page-1'
            },
            {
                menuId: 'setProject-2',
                title: '2',
                link: '/set-project/page-2'
            },
            {
                menuId: 'setProject-3',
                title: '3',
                link: '/set-project/page-3'
            },
            {
                menuId: 'setProject-4',
                title: '4',
                link: '/set-project/page-4'
            },
            {
                menuId: 'setProject-5',
                title: '5',
                link: '/set-project/page-5'
            }
        ]
    },
    {
        menuId: 'intermediaryHiring',
        title: '中介选聘',
        icon: 'md-folder',
        children: [
            {
                menuId: 'intermediaryHiring-1',
                title: '1',
                link: '/intermediary-hiring/page-1'
            },
            {
                menuId: 'intermediaryHiring-2',
                title: '2',
                link: '/intermediary-hiring/page-2'
            },
            {
                menuId: 'intermediaryHiring-3',
                title: '3',
                link: '/intermediary-hiring/page-3'
            },
            {
                menuId: 'intermediaryHiring-4',
                title: '4',
                link: '/intermediary-hiring/page-4'
            },
            {
                menuId: 'intermediaryHiring-5',
                title: '5',
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
                title: '1',
                link: '/due-diligence/page-1'
            },
            {
                menuId: 'dueDiligence-2',
                title: '2',
                link: '/due-diligence/page-2'
            },
            {
                menuId: 'dueDiligence-3',
                title: '3',
                link: '/due-diligence/page-3'
            },
            {
                menuId: 'dueDiligence-4',
                title: '4',
                link: '/due-diligence/page-4'
            },
            {
                menuId: 'dueDiligence-5',
                title: '5',
                link: '/due-diligence/page-5'
            }
        ]
    },
    {
        menuId: 'complianceReview',
        title: '合规审查',
        icon: 'md-folder',
        children: [
            {
                menuId: 'complianceReview-1',
                title: '1',
                link: '/compliance-review/page-1'
            },
            {
                menuId: 'complianceReview-2',
                title: '2',
                link: '/compliance-review/page-2'
            },
            {
                menuId: 'complianceReview-3',
                title: '3',
                link: '/compliance-review/page-3'
            },
            {
                menuId: 'complianceReview-4',
                title: '4',
                link: '/compliance-review/page-4'
            },
            {
                menuId: 'complianceReview-5',
                title: '5',
                link: '/compliance-review/page-5'
            }
        ]
    },
    {
        menuId: 'riskReview',
        title: '风险审查',
        icon: 'md-folder',
        children: [
            {
                menuId: 'riskReview-1',
                title: '1',
                link: '/risk-review/page-1'
            },
            {
                menuId: 'riskReview-2',
                title: '2',
                link: '/risk-review/page-2'
            },
            {
                menuId: 'riskReview-3',
                title: '3',
                link: '/risk-review/page-3'
            },
            {
                menuId: 'riskReview-4',
                title: '4',
                link: '/risk-review/page-4'
            },
            {
                menuId: 'riskReview-5',
                title: '5',
                link: '/risk-review/page-5'
            }
        ]
    },
    {
        menuId: 'investmentCommittee',
        title: '投委会决策',
        icon: 'md-folder',
        children: [
            {
                menuId: 'investmentCommittee-1',
                title: '1',
                link: '/investment-committee/page-1'
            },
            {
                menuId: 'investmentCommittee-2',
                title: '2',
                link: '/investment-committee/page-2'
            },
            {
                menuId: 'investmentCommittee-3',
                title: '3',
                link: '/investment-committee/page-3'
            },
            {
                menuId: 'investmentCommittee-4',
                title: '4',
                link: '/investment-committee/page-4'
            },
            {
                menuId: 'investmentCommittee-5',
                title: '5',
                link: '/investment-committee/page-5'
            }
        ]
    },
    {
        menuId: 'contractReview',
        title: '合同审查',
        icon: 'md-folder',
        children: [
            {
                menuId: 'contractReview-1',
                title: '1',
                link: '/contract-review/page-1'
            },
            {
                menuId: 'contractReview-2',
                title: '2',
                link: '/contract-review/page-2'
            },
            {
                menuId: 'contractReview-3',
                title: '3',
                link: '/contract-review/page-3'
            },
            {
                menuId: 'contractReview-4',
                title: '4',
                link: '/contract-review/page-4'
            },
            {
                menuId: 'contractReview-5',
                title: '5',
                link: '/contract-review/page-5'
            }
        ]
    },
    {
        menuId: 'myFlow',
        title: '合同文本审定',
        icon: 'md-folder',
        children: [
            {
                menuId: 'myApprove',
                title: '1',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '2',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '3',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '4',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '5',
                link: '/funds-set/my-funds'
            }
        ]
    },
    {
        menuId: 'myFlow',
        title: '面签管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'myApprove',
                title: '1',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '2',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '3',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '4',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '5',
                link: '/funds-set/my-funds'
            }
        ]
    },
    {
        menuId: 'myFlow',
        title: '投资交易-资金投放',
        icon: 'md-folder',
        children: [
            {
                menuId: 'myApprove',
                title: '1',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '2',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '3',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '4',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '5',
                link: '/funds-set/my-funds'
            }
        ]
    },
    {
        menuId: 'myFlow',
        title: '项目储备库管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'myApprove',
                title: '1',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '2',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '3',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '4',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '5',
                link: '/funds-set/my-funds'
            }
        ]
    },
    {
        menuId: 'myFlow',
        title: '项目储备库管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'myApprove',
                title: '1',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '2',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '3',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '4',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '5',
                link: '/funds-set/my-funds'
            }
        ]
    },
    {
        menuId: 'myFlow',
        title: '项目储备库管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'myApprove',
                title: '1',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '2',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '3',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '4',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '5',
                link: '/funds-set/my-funds'
            }
        ]
    },
    {
        menuId: 'myFlow',
        title: '项目储备库管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'myApprove',
                title: '1',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '2',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '3',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '4',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '5',
                link: '/funds-set/my-funds'
            }
        ]
    },
    {
        menuId: 'myFlow',
        title: '项目储备库管理',
        icon: 'md-folder',
        children: [
            {
                menuId: 'myApprove',
                title: '1',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '2',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '3',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '4',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'myApprove',
                title: '5',
                link: '/funds-set/my-funds'
            }
        ]
    },
    // {
    //     menuId: 'mySet',
    //     title: '我的基金',
    //     link: '/funds-set/my-funds'
    // }
]
export {
    menuData
}