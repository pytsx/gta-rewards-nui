import React, { useState } from "react";
import { IProvider, IRewardContext, RedeemType, RewardType } from "../../Type/Context";
import { useAPI } from "../API";
import { v4 as uuidv4 } from "uuid";

let init = {
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
}
let initRewards = {
    "id": 0,
    "title": "",
    "description": "",
    "redeems": [init]
}

export const RewardContext = React.createContext<IRewardContext>({
    reward: initRewards,
    redeems: [],
    currentRedeem: init,
    handleReward: () => { },
    handleRedeem: () => { }
})

export const RewardProvider = ({ children }: IProvider) => {
    const { response } = useAPI()
    const responseArray = Object.entries(response)

    let rewardResponse = responseArray[0][1]

    const [redeems, setRedeems] = React.useState<RedeemType[]>(rewardResponse.redeems)
    const [reward, setReward] = React.useState<RewardType>(rewardResponse)
    const [currentRedeem, setCurrentRedeem] = React.useState<RedeemType>(init)

    const handleReward = (newReward: RewardType) => {
        setReward(newReward)
        setRedeems(newReward.redeems)
    }

    const handleRedeem = (item: RedeemType) => {
        if (item.id == currentRedeem?.id) {
            setCurrentRedeem(prev => ({
                ...prev,
                isRewarded: true
            }))
            setRedeems(prev => prev.map(item => {
                if (item.id === currentRedeem.id) {
                    return {
                        ...item,
                        isRewarded: true
                    }
                }
                return item
            }))
        }
    }

    React.useEffect(() => {
        setRedeems(reward.redeems)
        console.log(redeems);

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