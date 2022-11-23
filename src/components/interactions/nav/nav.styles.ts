import styled from 'styled-components';

export const NavContent = styled.div`
  padding: 0 ${({ theme }) => theme.space[4]};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: 1155px;
  margin: 0 auto;
`;
