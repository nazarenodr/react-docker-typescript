import { CircularProgress } from "@mui/material";
import styled from "styled-components";

export default function Loader() {
  return (
    <Container>
      <CircularProgress
        sx={{
          color: "#88e9f6",
        }}
        size={100}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0771b8;
`;
