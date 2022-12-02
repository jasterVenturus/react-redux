import styled from 'styled-components';

export const Container = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 1rem;

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;

        width: 750px;
    }
`

export const Article = styled.article`

    width: 100%;
    border: 2px solid;
    padding: 0.7rem;

    & + article {
        margin-top: 1rem;
    }
    h2 {
        margin-bottom: 0.5rem;
    }

    .post-content {
        /* font-weight: 500; */
        font-style: italic;
    }
    .post-info {
        margin-top: 1.5rem;
        .link-to {
            /* text-decoration: ; */
            color: #000000;
            padding: 0.5rem;

            transition: 0.2s;

            &:hover {
                color: #ffffff;
                background: black;
            }
        }
    }
`