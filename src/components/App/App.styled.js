import styled from '@emotion/styled'

export const Wrapper = styled.div`    
display: grid;
grid-template-columns: 1fr;
grid-gap: 16px;
padding-bottom: 24px;`;

export const Message = styled.div`
text-align: center;
font-size: 24px;
font-wight: 500px;
`;
  
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;