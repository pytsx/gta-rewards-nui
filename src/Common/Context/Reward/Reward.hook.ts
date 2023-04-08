import { useContext } from "react";
import { RewardContext } from "./Reward.context";

export const useReward = () => useContext(RewardContext)