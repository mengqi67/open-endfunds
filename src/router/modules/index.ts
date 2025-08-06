/*
 * @Author: ymq
 * @Date: 2025-08-01 20:27:45
 * @LastEditTime: 2025-08-04 18:08:21
 * @LastEditors: ymq
 * @Description: 
 */
import ProjectReserve from './project-reserve'
import SetProject from './set-project'
import FundsSet from './funds-set'
import IntermediaryHiring from './intermediary-hiring'
import DueDiligence from './due-diligence'
import ComplianceReview from './complianceReview'
import Riskreview from './risk-review'
import Investmentmanagement from './investment-management'
import Intermediarymanagement from './intermediary-management'
import Textmanagement from './text-management'
import Accountmanagement from './account-management'




export default [
    ...ProjectReserve,
    ...SetProject,
    ...FundsSet,
    ...IntermediaryHiring,
    ...DueDiligence,
    ...ComplianceReview,
    ...Riskreview,
    ...Investmentmanagement,
    ...Intermediarymanagement,
    ...Textmanagement,
    ...Accountmanagement
   ]