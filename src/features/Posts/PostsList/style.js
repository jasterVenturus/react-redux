import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid;

    .wrapper {
        width: 100%;
        max-width: 500px;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        padding: 1rem;

        h2 {
            width: 100%;
            text-align: center;
            margin-bottom: 1rem;
        }

        article {
            width: 100%;
            border: 1px solid black;
            padding: 0.7rem;

            & + article {
                margin-top: 1rem;
            }
            h3 {
                margin-bottom: 0.5rem;
            }
        }
    }
`