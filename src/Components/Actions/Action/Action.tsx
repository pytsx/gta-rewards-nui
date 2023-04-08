import { Box } from "@mui/material"
import { Effect } from "../../Effect"
import { useState } from "react"
import { IAction } from "../../../Common/Type/Components"
import { useReward } from "../../../Common/Context/Reward"


export const Action = ({ cor, rewardProps }: IAction) => {
    const [hover, setHover] = useState(false)
    const { handleReward, reward } = useReward()
    return (
        <Box
            onClick={() => handleReward(rewardProps)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}

            sx={{
                width: hover || rewardProps.id == reward.id ? '200%' : '65%',
                height: 'calc(100%/ 4.2)',
                cursor: 'pointer',
                transition: 'all 100ms linear',
                borderRadius: '0 .2rem .2rem 0',
                m: '.04rem',
            }}>
            <Box sx={{
                position: 'relative',
                height: '100%', width: '100%',
                border: '1px solid #fafafa22',
                borderRight: `3px solid ${cor}`,
                borderRadius: '0 .2rem .2rem 0',
                overflow: 'hidden'
            }}>

                <div
                    style={{
                        height: '100%',
                        position: 'relative',
                        background: '#fafafa12',
                        border: '1px solid transparent',
                        borderRadius: '0 .2rem .2rem 0',
                        backdropFilter: 'blur(10px)',
                        zIndex: 1000
                    }} />

                <Effect
                    cor={cor}
                    minHeight="100%"
                    maxHeight="100%"
                    display={true}
                    hover={hover || rewardProps.id == reward.id}
                    top={-0}
                    right={0}
                />
            </Box>
        </Box >
    )
}