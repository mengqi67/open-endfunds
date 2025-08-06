/*
 * @Author: ymq
 * @Date: 2025-08-06 13:45:54
 * @LastEditTime: 2025-08-06 13:47:31
 * @LastEditors: ymq
 * @Description: 
 */
import { NO_ERROR_MSG_CODE, ERROR_MSG_DURATION } from '@/config/service';
import { Message } from 'view-ui-plus';
// import { consoleWarn } from '../common';

/** 错误消息栈，防止同一错误同时出现 */
const errorMsgStack = new Map<string | number, string>([]);

function addErrorMsg(error: Service.RequestError) {
  errorMsgStack.set(error.code, error.msg);
}
function removeErrorMsg(error: Service.RequestError) {
  errorMsgStack.delete(error.code);
}
function hasErrorMsg(error: Service.RequestError) {
  return errorMsgStack.has(error.code);
}

/**
 * 显示错误信息
 * @param error
 */
export function showErrorMsg(error: Service.RequestError) {
  if (!error.msg) return;
  if (!NO_ERROR_MSG_CODE.includes(error.code)) {
    if (!hasErrorMsg(error)) {
      addErrorMsg(error);
      // consoleWarn(error.code, error.msg);
      Message.error(error.msg, { duration: ERROR_MSG_DURATION });
      setTimeout(() => {
        removeErrorMsg(error);
      }, ERROR_MSG_DURATION);
    }
  }
}
