import { Box } from "@mui/material"
import { IActions } from "../../Common/Type/Components"
import { Action } from "./Action/Action"
import { useAPI } from "../../Common/Context/API"
import { RewardType } from "../../Common/Type/Context"
import { useReward } from "../../Common/Context/Reward"
import { generateColors } from "../../Common/Utils"
import { v4 as uuidv4 } from "uuid"
export const ActionsContainer = ({
    left,
    top,
    right,
    bottom,
    width = '2rem',
    height = '2rem'
}: IActions) => {

    const { response } = useAPI()
    const { rewards } = useReward()


    let colors__1 = [
        "#FFB347",
        "#B19CD9",
        "#77DD77",
        "#FF6961"
    ]

    let colors = generateColors(rewards.length)

    let actions = colors.map((color, index) => [color, rewards[index]])

    right = !!right ? right : (-Number(width.split('rem')[0]) + 'rem')
    return (
        <div style={{
            position: 'absolute',
            width,
            height,
            right,
            top,
            left,
            bottom,
            background: '#1d1d1d16',
            borderRadius: '0 .2rem .2rem 0',
            paddingRight: '.16rem',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',

        }}>
            {
                actions.map(action => (

                    <Action actionsLength={actions.length} rewardProps={action[1] as RewardType} key={uuidv4()} cor={action[0] as string} />
                ))
            }


        </div>
    )
}