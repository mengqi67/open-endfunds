/*
 * @Author: ymq
 * @Date: 2025-08-01 20:27:45
 * @LastEditTime: 2025-08-04 23:32:17
 * @LastEditors: ymq
 * @Description: 
 */
import ProjectReserve from './project-reserve'
import SetProject from './set-project'
import FundsSet from './funds-set'
import IntermediaryHiring from './intermediary-hiring'
import DueDiligence from './due-diligence'
import ComplianceReview from './complianceReview'
import RiskReview from './risk-review'
import InvestmentCommittee from './investment-committee'
import ContractReview from './contract-review'

export default [
    ...ProjectReserve,
    ...SetProject,
    ...FundsSet,
    ...IntermediaryHiring,
    ...DueDiligence,
    ...ComplianceReview,
    ...RiskReview,
    ...InvestmentCommittee,
    ...ContractReview
]