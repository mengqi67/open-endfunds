/*
 * @Author: ymq
 * @Date: 2025-08-06 13:43:27
 * @LastEditTime: 2025-08-06 13:43:29
 * @LastEditors: ymq
 * @Description: 
 */
/** 执行策略模式 */
export function exeStrategyActions(actions: Common.StrategyAction[]) {
  actions.some(item => {
    const [flag, action] = item;
    if (flag) {
      action();
    }
    return flag;
  });
}
