/*
 * @Author: ymq
 * @Date: 2025-08-06 13:19:56
 * @LastEditTime: 2025-08-06 13:56:43
 * @LastEditors: ymq
 * @Description: 
 */
import qs from 'qs';
import type { AxiosError, AxiosResponse } from 'axios';
import { ENUM_CONTENT_TYPE, type EnumContentType } from '@/enum/common';
import { exeStrategyActions } from '@/utils/design-pattern';
import { showErrorMsg } from '@/utils/msg';
import {
  DEFAULT_REQUEST_ERROR_CODE,
  DEFAULT_REQUEST_ERROR_MSG,
  NETWORK_ERROR_CODE,
  NETWORK_ERROR_MSG,
  REQUEST_TIMEOUT_CODE,
  REQUEST_TIMEOUT_MSG,
  ERROR_STATUS
} from '@/config/service';

type ErrorStatus = keyof typeof ERROR_STATUS;

export function transformRequestData(requestData: any, contentType?: EnumContentType) {
    let data = requestData;
  // form类型转换
  if (contentType === ENUM_CONTENT_TYPE.formUrlencoded) {
    data = qs.stringify(requestData);
  }
  return data;
}

/**
 * 处理axios请求失败的错误
 * @param error - 错误
 */
export function handleAxiosError(axiosError: AxiosError) {
  const error: Service.RequestError = {
    type: 'axios',
    code: DEFAULT_REQUEST_ERROR_CODE,
    msg: DEFAULT_REQUEST_ERROR_MSG
  };

  const actions: Common.StrategyAction[] = [
    [
      // 网路错误
      !window.navigator.onLine || axiosError.message === 'Network Error',
      () => {
        Object.assign(error, { code: NETWORK_ERROR_CODE, msg: NETWORK_ERROR_MSG });
      }
    ],
    [
      // 超时错误
      axiosError.code === REQUEST_TIMEOUT_CODE && axiosError.message.includes('timeout'),
      () => {
        Object.assign(error, { code: REQUEST_TIMEOUT_CODE, msg: REQUEST_TIMEOUT_MSG });
      }
    ],
    [
      // 请求不成功的错误
      Boolean(axiosError.response),
      () => {
        const errorCode: ErrorStatus = (axiosError.response?.status as ErrorStatus) || 'DEFAULT';
        const msg = ERROR_STATUS[errorCode];
        Object.assign(error, { code: errorCode, msg });
      }
    ]
  ];

  exeStrategyActions(actions);

  showErrorMsg(error);

  return error;
}

export async function handleServiceResult<T = any>(error: Service.RequestError | null, data: any, needData?:boolean) {
  if (error) {
    const fail: Service.FailedResult = {
      error,
      data: needData ? data : null
    };
    return fail;
  }
  const success: Service.SuccessResult<T> = {
    error: null,
    data
  };
  return success;
}

/**
 * 处理后端返回的错误(业务错误)
 * @param backendResult - 后端接口的响应数据
 */
export function handleBackendError(backendResult: Record<string, any>, config: Service.BackendResultConfig, hideToast?:boolean) {
  const { codeKey, msgKey } = config;
  const error: Service.RequestError = {
    type: 'backend',
    code: backendResult[codeKey],
    msg: backendResult[msgKey]
  };
  if (!hideToast) {
    showErrorMsg(error);
  }

  return error;
}

/**
 * 处理请求成功后的错误
 * @param response - 请求的响应
 */
export function handleResponseError(response: AxiosResponse) {
  const error: Service.RequestError = {
    type: 'axios',
    code: DEFAULT_REQUEST_ERROR_CODE,
    msg: DEFAULT_REQUEST_ERROR_MSG
  };

  if (!window.navigator.onLine) {
    // 网路错误
    Object.assign(error, { code: NETWORK_ERROR_CODE, msg: NETWORK_ERROR_MSG });
  } else {
    // 请求成功的状态码非200的错误
    const errorCode: ErrorStatus = response.status as ErrorStatus;
    const msg = ERROR_STATUS[errorCode] || DEFAULT_REQUEST_ERROR_MSG;
    Object.assign(error, { type: 'backend', code: errorCode, msg });
  }

  showErrorMsg(error);

  return error;
}