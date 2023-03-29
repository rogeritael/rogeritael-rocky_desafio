import { AppLimiter } from "../../AppLimiter";
import { TestimonialsStyle } from "./styles";
import leftArrow from '../../../assets/left_arrow_controller.png' 
import rightArrow from '../../../assets/right_arrow_controller.png'
import plus from '../../../assets/plus.png'
import { useState } from "react";

const testimonials = [
    {
        id: 1,
        name: 'João Silva',
        title: 'Empreendedor de E-commerce',
        testimonial: 'O curso foi incrível! Aprendi muito sobre estratégias de SEO e mídias sociais que estão me ajudando a aumentar o tráfego do meu site. Recomendo muito!'
    },
    {
        id: 2,
        name: 'Maria Souza',
        title: 'Analista de Marketing',
        testimonial: 'Como profissional de marketing, sempre busco me atualizar sobre as melhores práticas da área, e esse curso superou minhas expectativas! '
    },
    {
        id: 3,
        name: 'Paulo Oliveira',
        title: 'Empresário',
        testimonial: 'Eu sempre quis entender melhor como funcionam as estratégias de marketing digital, mas achava que era algo muito complexo. Com o curso, percebi que é possível aprender de maneira simples e prática!'
    },
    {
        id: 4,
        name: 'Ana Santos',
        title: 'Estudante de Publicidade',
        testimonial: 'O curso de marketing digital foi uma excelente oportunidade para complementar minha formação acadêmica. Aprendi sobre temas que são muito relevantes para minha área'
    },
]

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
                    <div className="testimonial_box">
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
                        <img src={plus} onClick={() => selectTestimonial(1)} alt=""/>
                        <img src={plus} onClick={() => selectTestimonial(2)} alt=""/>
                        <img src={plus} onClick={() => selectTestimonial(3)} alt=""/>
                        <img src={plus} onClick={() => selectTestimonial(4)} alt=""/>
                    </div>
                </div>
            </AppLimiter>
        </TestimonialsStyle>
    )
}