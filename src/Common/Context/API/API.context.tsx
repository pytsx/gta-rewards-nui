import React from "react";
import { IAPIContext, IProvider, WeekType } from "../../Type/Context";
import rewards from './api.json'



export const APIContext = React.createContext<IAPIContext>({
    response: rewards
})


export const APIProvider = ({ children }: IProvider) => {
    const [response, setResponse] = React.useState<WeekType>(rewards)
    React.useEffect(() => {
        setResponse(rewards)
    }, [])
    return (
        <APIContext.Provider value={{ response }}>
            {children}
        </APIContext.Provider>
    )
}