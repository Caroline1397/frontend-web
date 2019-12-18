import styled from 'styled-components';

export const Container = styled.nav`
img{
    align-items: center;
}
   width: 300px;
	height: 100%;
	position: fixed;
	background-color: #ccc;
	padding-top: 50px;
	left: -10px;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e98862;
   span {
      text-align: center;
      font-size: 20px;
      color: #000;
    }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 100%;
    padding: 20px;
    text-decoration: none;
  }
`;