import React, { useState, useEffect, createContext } from "react";
import { IProvider, IRewardContext, RedeemType, RewardType } from "../../Type/Context";
import { useAPI } from "../API";
import { v4 as uuidv4 } from "uuid";

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
    isRewarded: false
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
    redeems: [],
    currentRedeem: initialRedeem,
    handleReward: () => { },
    handleRedeem: () => { }
});

export const RewardProvider = ({ children }: IProvider) => {
    const { response } = useAPI();
    const [rewards, setRewards] = useState<RewardType[]>(Object.values(response));
    const [reward, setReward] = useState<RewardType>(rewards[0]);
    const [redeems, setRedeems] = useState<RedeemType[]>(reward.redeems);
    const [currentRedeem, setCurrentRedeem] = useState<RedeemType>(initialRedeem);

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
        const updatedRedeems = redeems.map(redeem => {
            if (redeem.id === item.id) {
                return { ...redeem, isRewarded: true }
            } else {
                return redeem
            }
        })

        setRedeems(updatedRedeems)


        const updatedRewards = rewards.map(reward => {
            if (reward.category === item.metadata.category) {
                const updatedReward = { ...reward }
                const updatedRedeemIndex = updatedReward.redeems.findIndex(redeem => redeem.id === item.id);
                if (updatedRedeemIndex !== -1) {
                    updatedReward.redeems[updatedRedeemIndex] = { ...updatedReward.redeems[updatedRedeemIndex], isRewarded: true }
                }
                return updatedReward
            } else {
                return reward
            }
        })

        setRewards(updatedRewards)

        setCurrentRedeem(prev => ({ ...prev, isRewarded: true }))

    }

    React.useEffect(() => {

        let today = new Date().toISOString().slice(0, 10).toString()
        let pastReward = redeems.filter((item: RedeemType) => item.day < today ? item.isRewarded = true : item.isRewarded)
        let current = redeems.find((item: RedeemType) => item.day == today)
        let futureReward = redeems.filter((item: RedeemType) => item.day > today)
        let week: RedeemType[] = []


        week.push(...pastReward)
        week.push(current as RedeemType)
        week.push(...futureReward)
        const filtrado = week.filter(
            (obj, index, array) => index === array.findIndex((t) => t.id === obj.id)
        );
        setCurrentRedeem(current as RedeemType)
        setRedeems(filtrado)
    }, [reward])



    return (
        <RewardContext.Provider value={{ reward, redeems, currentRedeem, handleReward, handleRedeem }}>
            {children}
        </RewardContext.Provider>
    )
}