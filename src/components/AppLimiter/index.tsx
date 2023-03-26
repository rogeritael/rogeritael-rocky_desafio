import { LimiterContainer } from "./styles";

interface AppLimiterProps {
    children: any,
    className?: string
}

export function AppLimiter({ children, className }: AppLimiterProps){
    return(
        <LimiterContainer className={className}>
            {children}
        </LimiterContainer>
    )
}