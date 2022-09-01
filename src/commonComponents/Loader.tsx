import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { THEME } from "../helpers/theme";

export default function Loader() {
  return (
    <Container>
      <CircularProgress
        sx={{
          color: THEME.colors.tertiary,
        }}
        size={100}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
