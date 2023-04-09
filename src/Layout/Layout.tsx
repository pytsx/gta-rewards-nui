import React from "react"
import { bg, noise_6, R, R2, money, money_2, money_3 } from "../assets"
import { IChildren } from "../Common/Type/Utils"
import { Circle } from "../Components/Circle"
import { Typography } from "@mui/material"



export const Layout = ({ children }: IChildren) => {
    const [isImageLoaded, setIsImageLoaded] = React.useState<boolean>(false)

    React.useEffect(() => {
        const imageUrls = [
            bg, noise_6, R, R2, money, money_2, money_3
        ];

        let loadedCount = 0;

        const checkAllImagesLoaded = () => {
            loadedCount++;
            if (loadedCount === imageUrls.length) {
                setIsImageLoaded(true);
            }
        };

        imageUrls.forEach((imageUrl) => {
            const image = new Image();
            image.onload = checkAllImagesLoaded;
            image.src = imageUrl;
        });
    }, []);


    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                backgroundImage: `url(${bg})`,
                backgroundSize: '100vw 100vh',
                display: isImageLoaded ? 'flex' : 'none',
                opacity: isImageLoaded ? 1 : 0,
                transition: 'all 1s ease',
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