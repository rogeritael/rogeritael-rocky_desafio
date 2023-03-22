import { LimiterContainer } from "./styles";

export function AppLimiter({ children }:{ children: any}){
    return(
        <LimiterContainer>
            {children}
        </LimiterContainer>
    )
}