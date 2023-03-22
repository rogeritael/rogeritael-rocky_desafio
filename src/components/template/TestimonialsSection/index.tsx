import { AppLimiter } from "../../AppLimiter";
import { TestimonialsStyle } from "./styles";
import leftArrow from '../../../assets/left_arrow_controller.png' 
import rightArrow from '../../../assets/right_arrow_controller.png'
import plus from '../../../assets/plus.png'

export function TestmonialsSection(){
    return (
        <TestimonialsStyle>
            <AppLimiter>
                <div className="slider_container">
                    <div className="testimonial_box">
                        <img src={leftArrow} alt="botão voltar" className="testimonial_arrow_controller" />
                        <div className="testimonial">
                            <p>
                                "Quando eu fiz esse curso, eu fui muito feliz e eu quero fazer de novo
                                agora porque é muito bom mesmo"
                            </p>
                            <h3> João Henrique,</h3>
                            <h3>PhD em Medicina</h3>
                        </div>
                        <img src={rightArrow} alt="botão avançar" className="testimonial_arrow_controller"/>
                    </div>
                    <div className="testimonial_controllers_box">
                        <img src={plus} alt=""/>
                        <img src={plus} alt=""/>
                        <img src={plus} alt=""/>
                        <img src={plus} alt=""/>
                    </div>
                </div>
            </AppLimiter>
        </TestimonialsStyle>
    )
}