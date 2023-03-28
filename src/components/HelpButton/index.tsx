import { HelpButtonStyle } from "./styles";

interface HelpButtonProps {
    isChatbotOpen: boolean,
    setIsChatbotOpen: React.Dispatch<boolean>
}

export function HelpButton({ isChatbotOpen, setIsChatbotOpen }: HelpButtonProps){
    
    function clickHandler(){
        isChatbotOpen ? setIsChatbotOpen(false) : setIsChatbotOpen(true);
    }

    return (
        <HelpButtonStyle onClick={() => clickHandler()}>
            <div className="text_chain" >
                <p>?</p>
            </div>
        </HelpButtonStyle>
    )
}