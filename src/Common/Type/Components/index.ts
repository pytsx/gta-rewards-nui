import { RewardType } from "../Context"

export interface ICardReward {
    item: any
}
export interface ICircle {
    top: number, left?: number, color: string, right?: number
}

export interface IPosition {
    left?: number | string
    top?: number | string
    right?: number | string
    bottom?: number | string
}

export interface ISize {
    width?: string
    height?: string
}

export interface IActions extends IPosition, ISize {

}

export interface IAction extends IStyle {
    rewardProps: RewardType
}

export interface IStyle {
    cor: string
}

export interface IEffect {
    display: boolean
    hover: boolean
    cor: string
    minWidth?: string
    maxWidth?: string
    minHeight?: string
    maxHeight?: string
    right?: number
    top?: number
    left?: number
    bottom?: number
    bt_animation?: boolean
    bb_animation?: boolean
    transition?: string
}
