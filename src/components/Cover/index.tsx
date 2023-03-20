import { Button } from "../Button";
import { CoverContainer } from "./styles";

export function Cover(){
    return(
        <CoverContainer>
            
            <h1 className="call_to_action_title">
                Lorem Ipsum Dolor Sit Amet,
                Consectetur Adipiscing Elit
            </h1>
            <p className="cover_description_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
            </p>

            <div className="button_container">
                <Button
                    text="tenho interesse"
                    background='transparent'
                />
                <Button
                    text="comprar agora" 
                    background='#F89D24' 
                />
            </div>
        </CoverContainer>
    );
}