/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { format, parseISO } from 'date-fns';

import { MdVisibility } from 'react-icons/md';

import { Div, PositionModal } from './styles';

export default function SimpleModal({ data }) {
  const [open, setOpen] = useState(false);

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
              {data.recipient.street}, {data.recipient.number}
              <br /> {data.recipient.city} - {data.recipient.state}
              <br /> Cep: {data.recipient.zipcode}
            </p>
          </div>
          <div>
            <strong>Datas</strong>
            <p>
              <strong>Retirada: </strong>
              {data.start_date !== null
                ? format(parseISO(data.start_date), 'MM/dd/yyyy')
                : 'Não retirada ainda'}
            </p>
            <p>
              <strong>Entrega: </strong>
              {data.end_date !== null
                ? format(parseISO(data.end_date), 'MM/dd/yyyy')
                : 'Processando...'}
            </p>
          </div>

          <div>
            <strong>Assinatura do destinatário</strong>
            <span className="spanImg">
              {data.signature ? (
                <img src={data.signature.url} alt="Assinatura" />
              ) : (
                'Não assinou'
              )}
            </span>
          </div>
        </PositionModal>
      </Modal>
    </>
  );
}
