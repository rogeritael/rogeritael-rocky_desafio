import { LimiterContainer } from "./styles";

interface AppLimiterProps {
    children: any,
    className?: string
}

export function AppLimiter({ children, className }: AppLimiterProps){
    return(
        <LimiterContainer className='app_limiter'>
            {children}
        </LimiterContainer>
    )
}