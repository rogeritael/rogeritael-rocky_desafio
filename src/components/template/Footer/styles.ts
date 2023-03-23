import styled from "styled-components";

export const FooterStyle = styled.footer`
    background-color: #000;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .socials {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
        cursor: pointer;

        svg {
            font-size: 32px;
        }
    }

    ul {
        display: flex;
        gap: 20px;
        margin-top: 10px;

        li {
            list-style: none;
            font-weight: 300;

            a {
                text-decoration: none;
            }
        }
    }

    @media (max-width: 540px){
        .socials {
            svg {
                font-size: 25px;
            }
        }

        ul {
            /* flex-wrap: wrap; */
            flex-direction: column;
            margin-top: 30px;

            li {
                text-align: center;
            }
        } 
    }
`;