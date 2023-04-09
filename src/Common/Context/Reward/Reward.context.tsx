import React, { useState, useEffect, createContext } from "react";
import { IProvider, IRewardContext, RedeemType, RewardType } from "../../Type/Context";
import { useAPI } from "../API";

const initialRedeem: RedeemType = {
    id: 0,
    title: "",
    description: "",
    reward: "",
    day: "",
    metadata: {
        category: "",
        number: 0
    },
    isRewarded: false,
    isAvalible: true,
    isRewardable: true
};

const initialReward: RewardType = {
    id: 0,
    title: "",
    description: "",
    category: "",
    redeems: [initialRedeem]
};

export const RewardContext = createContext<IRewardContext>({
    reward: initialReward,
    rewards: [initialReward],
    redeems: [],
    currentRedeems: [initialRedeem],
    handleReward: () => { },
    handleRedeem: () => { }
});

export const RewardProvider = ({ children }: IProvider) => {
    const { response } = useAPI();
    const [rewards, setRewards] = useState<RewardType[]>(Object.values(response));
    const [reward, setReward] = useState<RewardType>(rewards[0]);
    const [redeems, setRedeems] = useState<RedeemType[]>(reward.redeems);
    const [currentRedeems, setCurrentRedeems] = useState<RedeemType[]>([initialRedeem]);


    const handleReward = (newReward: RewardType) => {
        const findNewReward = rewards.find(reward => reward.id === newReward.id);
        if (findNewReward) {
            setReward(findNewReward);
            setRedeems(findNewReward.redeems);
        } else {
            console.log("Reward não encontrado.");
        }
    };

    const handleRedeem = (item: RedeemType) => {
        let currentAvalible = item.isAvalible && item.isRewardable && !item.isRewarded
        const updatedRedeems = redeems.map(redeem => {
            if (redeem.id === item.id && currentAvalible) {
                return { ...redeem, isRewarded: true }
            } else {
                return redeem
            }
        })

        setRedeems(updatedRedeems)


        const updatedRewards = rewards.map(reward => {
            if (reward.category === item.metadata.category) {
                const updatedReward = { ...reward }
                const updatedRedeemIndex = updatedReward.redeems.findIndex(redeem => redeem.id === item.id && currentAvalible);
                if (updatedRedeemIndex !== -1) {
                    updatedReward.redeems[updatedRedeemIndex] = { ...updatedReward.redeems[updatedRedeemIndex], isRewarded: true }
                }
                return updatedReward
            } else {
                return reward
            }
        })
        setRewards(updatedRewards)
        setCurrentRedeems(prev => ({ ...prev, isRewarded: true }))
    }

    const handleCategory = () => {
        if (reward.category.includes('weekly')) {
            let today = new Date().toISOString().slice(0, 10).toString()

            let pastReward: RedeemType[] = redeems.filter((item: RedeemType) => item.day < today ? item.isRewarded = true : item.isRewarded)
            let futureReward: RedeemType[] = redeems.filter((item: RedeemType) => item.day > today)
            let current: RedeemType | undefined = redeems.find((item: RedeemType) => item.day == today)

            let week: RedeemType[] = [...pastReward, current as RedeemType, ...futureReward].filter((obj, index, array) => index === array.findIndex((t) => t === obj));

            setCurrentRedeems([current] as RedeemType[])
            setRedeems(week)
        } else if (reward.category.includes('daily')) {
            let rewardable: RedeemType[] = redeems.filter((item: RedeemType) => item.isRewardable && item.isAvalible && !item.isRewarded)
            let redeemsFilter: RedeemType[] = reward.redeems.filter((obj, index, array) => index === array.findIndex((t) => t == obj))
            setCurrentRedeems(rewardable)
            setRedeems(redeemsFilter)
        }
    }

    React.useEffect(() => {
        handleCategory()
    }, [reward])



    return (
        <RewardContext.Provider value={{ reward, rewards, redeems, currentRedeems, handleReward, handleRedeem }}>
            {children}
        </RewardContext.Provider>
    )
}