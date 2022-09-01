import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../commonComponents/Button";
import Modal from "../commonComponents/Modal";
import PageContainer from "../commonComponents/PageContainer";
import Pagination from "../commonComponents/Pagination";
import Tooltip from "../commonComponents/Tooltip";
import { notificationsContext } from "../context/notificationsContext";

export default function Components() {
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { setNotification } = useContext(notificationsContext);

  function handleShowNotification() {
    setNotification({
      theme: "success",
      titleNotification: "Titulo",
      contentNotification: "Mensaje de la notificación",
      isVisible: true,
    });
  }

  return (
    <>
      <NotificationsContainer>
        <Button type="primary" onClick={() => setShowModal(!showModal)}>
          Modal
        </Button>
        <Button type="primary" onClick={handleShowNotification}>
          Notificaction
        </Button>
      </NotificationsContainer>
      <PageContainer>
        <Container>
          <Tooltip text="Texto Tooltip">
            <Button type="primary">Tooltip</Button>
          </Tooltip>
          <Pagination page={page} setPage={setPage} totalPages={10} />
        </Container>
      </PageContainer>
      <ButtonsContainer>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
      </ButtonsContainer>
      {showModal && (
        <Modal title="Titulo Modal">
          <ModalContainer>
            <ButtonsContainer>
              <Button type="primary">Aceptar</Button>
              <Button type="secondary" onClick={() => setShowModal(false)}>
                Cerrar
              </Button>
            </ButtonsContainer>
          </ModalContainer>
        </Modal>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 250px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-top: 20px;
`;
const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
  height: 300px;
  padding: 20px;
`;
