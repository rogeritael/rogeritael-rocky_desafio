import { Button } from "../Button";
import { ModalStyle } from "./styles";
import { GrClose } from 'react-icons/gr';

interface ModalProps {
    isModalOpen: boolean,
    closeModal: () => void
}

export function Modal({isModalOpen, closeModal}: ModalProps){

    return(
        <ModalStyle isModalOpen={isModalOpen}>
            <div className="modal modalEntryAnimation">
                <GrClose onClick={() => closeModal()} />

                <h1>Tem interesse?</h1>
                <p className="description">Assine a nossa newsletter para ficar por dentro quando abrirmos uma nova turma com desconto de pré-venda</p>

                <form id="modal" action="">
                    <input className="inputEntry" type="text" name="" id="" placeholder="Nome" />
                    <input className="inputEntry delay1"type="text" name="" id="" placeholder="Telefone" />
                    <input className="inputEntry delay2" type="email" name="" id="" placeholder="Email" />
                    <input className="inputEntry delay3"type="text" name="" id="" placeholder="Profissão" />
                    <span>
                        <input className="leftEntry" type="checkbox" name="" id="" />
                        <p>Li e aceito os <a href="#">termos de uso</a></p>
                    </span>
                    <Button
                        onClick={() => alert('ee')} //!!!!!!!!!!!!!!
                        background="#F89D24"
                        text="declarar interesse"
                    />
                </form>
            </div>
        </ModalStyle>
    );
}