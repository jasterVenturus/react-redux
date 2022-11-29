import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 1rem 0;
    
    border: 1px solid;

    h2 {
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;

        input {
            width: 100%;
            max-width: 250px;
            margin-bottom: 1rem;
        }

        button {
            margin-top: 2rem;
            background: #cccccc;
        }
    }
`