import React from "react"
import { bg, noise_6 } from "../assets"
import { IChildren } from "../Common/Type/Utils"
import { Circle } from "../Components/Circle"



export const Layout = ({ children }: IChildren) => {
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false)
    const handleLoad = () => {
        setIsLoaded(true)
    }
    return (
        <div
            onLoad={handleLoad}
            style={{
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                backgroundImage: `url(${bg})`,
                backgroundSize: '100vw 100vh',
                display: isLoaded ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
            }}>


            <Circle top={60} left={30} color="#0066cc80" />
            <Circle top={150} left={150} color="#ff0000af" />
            <Circle top={140} right={0} color="#0066cc80" />
            <Circle top={-20} right={-20} color="#ff00005f" />

            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backdropFilter: 'blur(20px)',
                zIndex: 100,
            }} />

            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundImage: `url(${noise_6})`,
                backgroundSize: '100vw 100vh',
                opacity: .03,
                zIndex: 1000
            }} />

            {children}
        </div>
    )
}