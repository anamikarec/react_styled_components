import "./styles.css";
import styled from "styled-components";

const Sat = styled.div`
  border: 1px solid red;

  h1 {
    color: blue;
  }
  h2 {
    color: red;
  }
`;

const Cat = styled.a`
  font-size: 24px;
  text-decoration: none;
`;
export default function App() {
  return (
    <>
      <Sat className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Sat>
      <Cat href="https://www.google.com"> Go to Google</Cat>
    </>
  );
}
