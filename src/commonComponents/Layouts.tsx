import styled from "styled-components";

export const BlankSpace = styled.div<{ height?: number, width?:number }>`
  height: ${({ height }) => `${height}px` || "100%"};
  width: ${({ width }) => `${width}px` || "100%"};
`;
export const CenterContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CenterContainerRow = styled.div`
  display: flex;
  flex-direction: Row;
  justify-content: center;
  align-items: center;
`;