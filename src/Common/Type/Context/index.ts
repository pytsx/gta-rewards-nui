import { IChildren } from "../Utils";
import rewards from '../../Context/API/api.json'

export interface IProvider extends IChildren { }


export type WeekType = typeof rewards
export type RewardType = typeof rewards.daily_member_reward
export type RedeemType = typeof rewards.daily_member_reward.redeems[0]
export interface IAPIContext {
    response: WeekType
}
export interface IRewardContext {
    reward: RewardType
    redeems: RedeemType[]
    currentRedeems: RedeemType[]
    handleReward: (newReward: RewardType) => void
    handleRedeem: (item: RedeemType) => void
}
