import { Box, Stack, Typography } from "@mui/material"
import { money, money_3, money_2 } from "../../../assets"
import { useReward } from "../../../Common/Context/Reward"
import { ICardReward } from "../../../Common/Type/Components"
import React from "react"
import { Effect } from "../../Effect"
import { RedeemType } from "../../../Common/Type/Context"


export const CardReward = ({ item }: ICardReward) => {
    const { currentRedeems, handleRedeem } = useReward()
    const [currentRedeem, setCurrentRedeem] = React.useState<RedeemType>()
    const [hover, setHover] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (currentRedeems.length >= 0) {

            currentRedeems.map((redeem: RedeemType) => {
                if (item == redeem) {
                    setCurrentRedeem(redeem)
                }
            })
        }
    }, [currentRedeems])

    let equalIDs = item?.id == currentRedeem?.id
    let isRewardable = Boolean(!currentRedeem?.isRewarded && currentRedeem?.isAvalible && currentRedeem?.isRewardable && item.isRewardable)
    let avalible = equalIDs && isRewardable
    let corBorda_2 = '#ff0000'
    let corBorda = '#0066cc'
    return (
        <Box
            onClick={() => handleRedeem(item)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                transition: 'all 200ms ease',
                width: 'calc(100% / 7)',
                height: '100%',
                bgcolor: '#afafaf22',
                backdropFilter: 'blur(3px)',
                filter: item?.isRewarded ? 'brightness(0.8)' : 'none',
                opacity: item?.isRewarded ? .5 : 1,
                borderRadius: '.2rem',
                border: item?.isRewarded ? '1px solid #2d2d2d' : '1px solid #fafafa22',
                m: '.08rem',
                position: 'relative',
                cursor: avalible ? 'pointer' : 'default',
                overflow: 'hidden'
            }}>

            <Effect
                cor={corBorda}
                display={avalible}
                hover={!hover}
                left={0.1}
                bottom={0}
                minHeight="100%"
            />
            <Effect
                cor={corBorda_2}
                display={avalible}
                hover={hover}
                right={0.1}
                top={0}
            />

            <div style={{
                position: 'absolute',
                boxShadow: item?.isRewarded ? 'inset 0px 0px 100px 30px #1d1d1d' : 'none',
                width: '100%',
                height: '100%',
                borderRadius: '.2rem',
                zIndex: 10000
            }} />
            <Stack
                alignItems='center'
                justifyContent='space-between'
                sx={{
                    width: '100%',
                    height: '100%',
                    py: '.64rem',
                    px: '.32rem',
                }}>

                <Typography lineHeight='1rem' fontWeight='800' color='#c9c9c9c9'>
                    {item?.title}
                </Typography>

                <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} >
                    <img
                        style={{
                            width: '64%',
                        }}
                        src={item?.id % 2 == 1 ? money : item?.id > 3 ? money_3 : money_2}
                    />
                </div>

                <Stack
                    alignItems='center'
                    justifyContent='space-between'
                    sx={{
                        width: '100%',
                        transition: 'all 1s ease'

                    }}>

                    <Typography lineHeight='1rem' fontWeight='800' fontSize={12} color='#c9c9c9c9'>
                        RESGATE
                    </Typography>

                    <Typography lineHeight='1rem' fontWeight='200' fontSize={14} color='#c9c9c9c9'>
                        $ {item?.reward}.00
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}