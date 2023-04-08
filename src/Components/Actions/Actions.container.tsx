import { Box } from "@mui/material"
import { IActions } from "../../Common/Type/Components"
import { Action } from "./Action/Action"
import { useAPI } from "../../Common/Context/API"
import { RewardType } from "../../Common/Type/Context"

export const ActionsContainer = ({
    left,
    top,
    right,
    bottom,
    width = '2rem',
    height = '2rem'
}: IActions) => {

    const { response } = useAPI()

    let actionsArr = Object.entries(response)


    let colors = [
        "#FFB347",
        "#B19CD9",
        "#77DD77",
        "#FF6961"
    ]

    let action_1 = [colors[0], ...actionsArr[0]];
    let action_2 = [colors[1], ...actionsArr[1]];
    let action_3 = [colors[2], ...actionsArr[2]];
    let action_4 = [colors[3], ...actionsArr[3]];

    type actionsType = typeof action_1[]
    let actions: actionsType = []
    actions.push(action_1, action_2, action_3, action_4)


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

                    <Action rewardProps={action[2] as RewardType} key={action[0] as string} cor={action[0] as string} />
                ))
            }


        </div>
    )
}