import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  height: 500px;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #540463;
  h1 {
    font-family: "Roboto", sans-serif;
    color: #ffff
  }

  h1 {
    font-family: "roboto";
    color: #Fafafa;
  }

  input {
  width: 270px;
  height: 32px;
  margin-top: 18px;
  border-radius: 10px;
  border: none;
  }

  button {
  width: 269px;
  height: 44px;
  background: #FFEB39;
  border-radius: 5px;
  font-family: "roboto";
  font-weight: 700;
  font-size: 16px;
  margin-top: 25px;
  margin-bottom: 20px;
  color: #540463;
  border: none;
  }
`

export const ContainerFlex = styled.div`
  width: 269px;
  display: flex;
  justify-content: space-around;

  a {
  font-family: "roboto";
  color: #fff;
  text-decoration: none;
}

a link:hover {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: #fff;
  text-decoration: none;
}

p {
  color: #fff;
  font-family: "roboto";
}
`
