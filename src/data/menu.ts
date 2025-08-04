/*
 * @Author: ymq
 * @Date: 2025-08-03 10:31:27
 * @LastEditTime: 2025-08-03 17:04:02
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
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'projectReserve-2',
                title: '2',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'projectReserve-3',
                title: '3',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'projectReserve-4',
                title: '4',
                link: '/funds-set/my-funds'
            },
            {
                menuId: 'projectReserve-5',
                title: '5',
                link: '/funds-set/my-funds'
            }
        ]
    },
    {
        menuId: 'myFlow',
        title: '立项管理',
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
        title: '中介选聘',
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
        title: '尽调管理',
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
        title: '合规审查',
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
        title: '风险审查',
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
        title: '投委会决策',
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
        title: '合同审查',
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