import { ICircle } from "../../Common/Type/Components";

export const Circle = ({ top, left, right, color }: ICircle) => <div
    className='animatedBG'
    style={{
        width: '20rem',
        height: '20rem',
        background: color,
        top,
        left,
        right,
        borderRadius: '0rem 0 0rem 50rem',
        position: 'absolute',
        zIndex: 10
    }} />