import { AppLimiter } from "../../AppLimiter";
import { TestimonialsStyle } from "./styles";
import leftArrow from '../../../assets/left_arrow_controller.png' 
import rightArrow from '../../../assets/right_arrow_controller.png'
import { useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { testimonials } from "../../../mocks/testimonials";

export function TestmonialsSection(){
    const [activeTestimonial, setActiveTestmonial] = useState(2);

    function next(){
        testimonials.length === activeTestimonial ?
            setActiveTestmonial(1)
        :
            setActiveTestmonial(activeTestimonial+1)
    }

    function previous(){
        activeTestimonial === 1 ?
            setActiveTestmonial(testimonials.length)
        :
            setActiveTestmonial(activeTestimonial-1)
    }

    function selectTestimonial(id: number){
        setActiveTestmonial(id);
    }

    return (
        <TestimonialsStyle>
            <AppLimiter>
                <div className="slider_container">
                    <div className="testimonial_box" data-aos="zoom-in">
                        <img src={leftArrow} onClick={() => previous()} alt="botão voltar" className="testimonial_arrow_controller" />
                        
                        <div className="testimonial_text_container">
                            {testimonials.map((testimonial) => (
                                <div className={`testimonial ${testimonial.id === activeTestimonial? 'active' : '' } `}>
                                    <p>{testimonial.testimonial}</p>
                                    <h3>{testimonial.name},</h3>
                                    <h3>{testimonial.title}</h3>
                                </div>
                            ))}
                            
                        </div>
                        <img src={rightArrow} onClick={() => next()} alt="botão avançar" className="testimonial_arrow_controller"/>
                    </div>
                    <div className="testimonial_controllers_box">
                        <AiOutlinePlus className={`${activeTestimonial === 1 ? 'disabled' : ''}`} onClick={() => selectTestimonial(1)} />
                        <AiOutlinePlus className={`${activeTestimonial === 2 ? 'disabled' : ''}`} onClick={() => selectTestimonial(2)} />
                        <AiOutlinePlus className={`${activeTestimonial === 3 ? 'disabled' : ''}`} onClick={() => selectTestimonial(3)} />
                        <AiOutlinePlus className={`${activeTestimonial === 4 ? 'disabled' : ''}`} onClick={() => selectTestimonial(4)} />
                    </div>
                </div>
            </AppLimiter>
        </TestimonialsStyle>
    )
}