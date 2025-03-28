import './App.css'
import styled from "styled-components";
import { MicroTasks } from './MicroTasks/MicroTasks';


function App() {
    return (
        <div className="App">
            <h1>mjbjdbsjdf</h1>
            <Title>Welcome to IT-INCUBATOR</Title>
            <MicroTasks/>
        </div>
    )
}

export default App

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;