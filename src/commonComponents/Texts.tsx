import styled from 'styled-components';

const Text = styled.label`
  font-weight: ${({bold}:{bold?:boolean})=>bold?'bold':'normal'};
`;
export const T12 = styled(Text)`
  font-size: 12px;
`;
export const T16 = styled(Text)`
  font-size: 16px;
`;
export const T18 = styled(Text)`
  font-size: 18px;
`;
export const T24 = styled(Text)`
  font-size: 24px;
`;