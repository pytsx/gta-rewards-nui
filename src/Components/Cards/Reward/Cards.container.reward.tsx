import { Box } from "@mui/material"
import { CardInformation } from "../../Card/Reward/Card.information"
import { CardsReward } from "./Cards.reward"

export const CardsContainer = () => {
    let cardsContainer = {
        width: '100%', height: '100%',
        boxShadow: '10px 0px 10px -10px #1d1d1d64',
        zIndex: 1000,
    }

    return (
        <div style={cardsContainer}>
            <CardInformation />
            <CardsReward />
        </div>
    )
}