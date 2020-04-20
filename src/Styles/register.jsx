import styled from 'styled-components';

export const Container = styled.div`
  background-color: #540463;
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  color:#ffff;
  font-family:"Roboto", sans-serif;
  
  h1 {
  font-family: "roboto";
  color: #FFF;
}

  input {
  width: 270px;
  height: 32px;
  border: none;
  background: #FAFAFA;
  border-radius: 5px;
  margin-top: 18px;
  }

  button {
  width: 269px;
  height: 44px;
  background: #FFEB39;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
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
.erro{
  font-size:300px;
  color:#ffff
}
p {
  color: #fff;
  font-family: "roboto";
}

`