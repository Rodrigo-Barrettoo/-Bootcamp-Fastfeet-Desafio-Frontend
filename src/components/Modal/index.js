import React from 'react';
import Modal from '@material-ui/core/Modal';

import { MdVisibility } from 'react-icons/md';

import { Div, PositionModal } from './styles';
import assinatura from '../../assets/images/assinatura.png';

export default function SimpleModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Div onClick={handleOpen}>
        <MdVisibility size={18} color="#8E5BE8" />
        <span>Visualizar</span>
      </Div>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <PositionModal>
          <div>
            <strong>Informações da encomenda</strong>
            <p>
              Rua Beethoven,
              <br /> 1729 Diadema - SP <br /> 09960-580
            </p>
          </div>
          <div>
            <strong>Datas</strong>
            <p>
              <strong>Retirada: </strong>
              25/01/2020
            </p>
            <p>
              <strong>Entrega: </strong>
              25/01/2020
            </p>
          </div>

          <div>
            <strong>Assinatura do destinatário</strong>
            <span className="spanImg">
              <img src={assinatura} alt="" />
            </span>
          </div>
        </PositionModal>
      </Modal>
    </>
  );
}
