import { Button } from "../Button";
import { ModalStyle } from "./styles";
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

export function Modal(){
    const isModalOpen = useState(true)

    return(
        <ModalStyle isModalOpen={isModalOpen}>
            <div className="modal modalEntryAnimation">
                <GrClose />

                <h1>Tem interesse?</h1>
                <p className="description">Assine a nossa newsletter para ficar por dentro quando abrirmos uma nova turma com desconto de pré-venda</p>

                <form id="modal" action="">
                    <input className="leftEntry" type="text" name="" id="" placeholder="Nome" />
                    <input className="rightEntry"type="text" name="" id="" placeholder="Telefone" />
                    <input className="leftEntry" type="email" name="" id="" placeholder="Email" />
                    <input className="rightEntry"type="text" name="" id="" placeholder="Profissão" />
                    <span>
                        <input className="leftEntry" type="checkbox" name="" id="" />
                        <p>Li e aceito os <a href="#">termos de uso</a></p>
                    </span>
                    <Button
                        background="#F89D24"
                        text="declarar interesse"
                    />
                </form>
            </div>
        </ModalStyle>
    );
}