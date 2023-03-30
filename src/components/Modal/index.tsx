import { Button } from "../Button";
import { ModalStyle } from "./styles";
import { AiOutlineClose } from 'react-icons/ai';
import { ghostClick } from "../../helpers/ghostClick";

interface ModalProps {
    isModalOpen: boolean,
    closeModal: () => void
}

export function Modal({isModalOpen, closeModal}: ModalProps){

    return(
        <ModalStyle isModalOpen={isModalOpen} >
            <span className="close_modal_area" onClick={() => closeModal()}></span>
            <div className="modal modalEntryAnimation">
                <AiOutlineClose style={{color: '#fff'}} onClick={() => closeModal()} />

                <h1>Tem interesse?</h1>
                <p className="description">Assine a nossa newsletter para ficar por dentro quando abrirmos uma nova turma com desconto de pré-venda</p>

                <form id="modal" action="">
                    <input className="inputEntry" type="text" name="" id="" placeholder="Nome" />
                    <input className="inputEntry delay1" type="text" name="" id="" placeholder="Telefone" />
                    <input className="inputEntry delay2" type="email" name="" id="" placeholder="Email" />
                    <input className="inputEntry delay3" type="text" name="" id="" placeholder="Profissão" />
                    <span>
                        <input className="inputEntry delay2" type="checkbox" name="" id="" />
                        <p>Li e aceito os <a href="#">termos de uso</a></p>
                    </span>
                    <Button
                        onClick={() => ghostClick()}
                        background="#F89D24"
                        text="declarar interesse"
                    />
                </form>
            </div>
        </ModalStyle>
    );
}