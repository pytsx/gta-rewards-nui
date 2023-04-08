import { IEffect } from "../../Common/Type/Components";

export const Effect = ({ display,
    hover,
    cor,
    minWidth = '10%',
    maxWidth = '120%',
    minHeight = '0%',
    maxHeight = '120%',
    right = undefined,
    top = undefined,
    left = undefined,
    bottom = undefined,
    bt_animation = false,
    bb_animation = false,
    transition = 'all 200ms ease-in-out'
}: IEffect) => <div
        style={{
            display: display ? 'inline' : 'none',
            width: hover ? maxWidth : minWidth,
            height: hover ? maxHeight : minHeight,
            transition,
            border: '2px solid transparent',
            background: hover ? `${cor}24` : 'transparent',
            position: 'absolute',
            opacity: hover ? .9 : .6,
            borderRight: !!right ? `2px solid ${cor}` : 'none',
            borderLeft: !!left ? `2px solid ${cor}` : 'none',
            borderTop: bt_animation ? `2px solid ${cor}` : 'none',
            borderBottom: bb_animation ? `2px solid ${cor}` : 'none',
            borderRadius: '.2rem',
            right,
            top,
            left,
            bottom,
            zIndex: 10
        }} />
