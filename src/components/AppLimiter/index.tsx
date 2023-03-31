import { LimiterContainer } from "./styles";

interface AppLimiterProps {
    children: string | JSX.Element | JSX.Element[],
    className?: string
}

export function AppLimiter({ children, className }: AppLimiterProps){
    return(
        <LimiterContainer className='app_limiter'>
            {children}
        </LimiterContainer>
    )
}