import { Box, Stack, Typography } from "@mui/material"
import { MdStar } from "react-icons/md"
import { R } from "../../../assets"
import { useReward } from "../../../Common/Context/Reward"
import React from "react"


export const CardInformation = () => {
    let cor = '#2d2d2d'
    const { currentRedeems, reward } = useReward()

    return (
        <Box sx={{
            width: '100%',
            height: '50%',
            bgcolor: '#afafaf22',
            backdropFilter: 'blur(3px)',
            borderRadius: '.2rem',
            border: '1px solid #fafafa22',

        }}>
            <Stack direction='row'>

                <div style={{
                    width: '14rem',
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <img src={R} style={{
                        width: '100%',
                        position: 'absolute',
                        left: 12,
                        top: -14,
                        transform: 'scale(1.32)',
                        transformOrigin: 'bottom',
                        transition: 'all 200ms ease-in-out',
                        filter: 'grayscale(0%)',
                        zIndex: 100
                    }} />
                </div>
                <Stack sx={{ p: 2, width: 'calc(100% - 14rem)' }}>
                    <Stack direction='row' alignItems='center'>
                        <MdStar fontSize={24} color='#9d9d9d' />
                        <Typography
                            color='#9d9d9d'
                            sx={{ mx: 1.2, }}
                            fontWeight={800}
                            lineHeight='1.4rem'
                            fontSize={24}
                        >
                            {reward.title}
                        </Typography>
                    </Stack>
                    <Typography color='#c9c9c9' fontSize={13} lineHeight='1rem' sx={{ my: 1.2 }}>
                        {reward.description}
                    </Typography>
                </Stack>
                <div style={{
                    display: 'inline',
                    width: '20%',
                    height: '70%',
                    transition: 'all 200ms ease-in-out',
                    position: 'absolute',
                    border: '4px solid transparent',
                    borderTop: `2px solid ${cor}`,
                    borderLeft: `2px solid ${cor}`,
                    left: -0,
                    top: -0,
                    borderRadius: ' .2rem',
                    zIndex: 10,

                }} />
            </Stack>


        </Box>

    )
}