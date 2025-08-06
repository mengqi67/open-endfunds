export default [
  {
    url: '/project-reserve/list', // 请求的 URL
    method: 'get', // 请求的方法
    response: () => {
      return {
        code: 0,
        msg: 'success',
        data: [{
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
        }],
      };
    },
  },
  {
    url: '/project-reserve/delete', // 请求的 URL
    method: 'post', // 请求的方法
    response: () => {
      return {
        code: 0,
        msg: 'success',
        data: {},
      };
    },
  },
  {
    url: '/project-reserve/add', // 请求的 URL
    method: 'post', // 请求的方法
    response: () => {
      return {
        code: 0,
        msg: 'success',
        data: {},
      };
    },
  }
]