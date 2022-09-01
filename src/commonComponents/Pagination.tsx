import styled from "styled-components";
import { useEffect, useState } from "react";
import { THEME } from "../helpers/theme";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function Pagination({
  page,
  totalPages,
  setPage,
}: {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}) {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPages(pages);
  }, [totalPages]);

  function nextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }
  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleSelectPage(page: number) {
    setPage(page);
  }

  return (
    <PaginationContainer>
      <PaginationButton onClick={previousPage}>
        <ArrowBackIcon />
        <ButtonText>Anterior</ButtonText>
      </PaginationButton>
      <TotalPagesContainer>
        <PaginationText>Páginas</PaginationText>
        <SelectPageContainer>
          <SelectPage>
            <SelectPageField
              value={page}
              onChange={({ target: { value } }) => handleSelectPage(+value)}
            >
              {pages?.map((page) => (
                <OptionPage key={page} value={page}>
                  {page}
                </OptionPage>
              ))}
            </SelectPageField>
          </SelectPage>
        </SelectPageContainer>
        <PaginationTextBold>de {totalPages}</PaginationTextBold>
      </TotalPagesContainer>

      <PaginationButton onClick={nextPage}>
        <ButtonText>Siguiente</ButtonText>
        <ArrowForwardIcon />
      </PaginationButton>
    </PaginationContainer>
  );
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 13px;
  gap: 20px;
  @media (max-width: 768px) {
    margin-right: 0px;
    width: 100%;
  }
`;

const PaginationButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px;
  height: 34px;
  background: #f9f9f9;
  border-radius: 5px;
  gap: 14px;
  color: ${THEME.colors.primary};
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;
const TotalPagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;
const PaginationTextBold = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #383838;
`;

const PaginationText = styled.div`
  font-size: 14px;
  line-height: 14px;
  color: #383838;
`;

const ButtonText = styled.p`
  font-size: 12px;
  line-height: 12px;
  color: ${THEME.colors.primary};
  @media (max-width: 768px) {
    display: none;
  }
`;
const SelectPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OptionPage = styled.option`
  font-size: 14px;
  color: #383838;
`;
const SelectPageField = styled.select`
  font-family: "D-DIN-PRO-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #383838;
  width: 80px;
  border: none;
  border-bottom: 1px solid #d2d2d2;
  padding: 8px 10px 8px 10px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  cursor: pointer;
  text-align: center;
`;
const SelectPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 40px;
`;
