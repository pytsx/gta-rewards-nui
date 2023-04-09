import { Stack } from "@mui/material"
import { CardReward } from "../../Card/Reward"
import { useReward } from "../../../Common/Context/Reward"
import { RedeemType } from "../../../Common/Type/Context"
import { v4 as uuidv4 } from "uuid"
export const CardsReward = () => {
    const { redeems } = useReward()

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='end'
            sx={{
                width: '100%',
                height: '50%',
                m: .16
            }}>
            {redeems.map((item: RedeemType) => (
                <CardReward key={item.id} item={item} />
            ))}
        </Stack>
    )
}