import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    padding: 1rem;
    
    border-bottom: 3px solid;

    nav {
        width: fit-content;
        ul {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            
            width: fit-content;
    
            list-style-type: none;
            
            li {
                width: 100%;

                .link-page {
                    text-decoration: none;
                    font-weight: 500;
                    color: black;
                    
                    padding: 0.5rem;
                    
                    transition: 0.2s;
                    &:hover {
                        color: white;
                        background-color: black;
                    }
                }
                & + li {
                    margin-left: 0.7rem;
                }
            }
        }
    }
`