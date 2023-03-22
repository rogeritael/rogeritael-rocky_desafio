import styled from "styled-components";

export const FooterStyle = styled.footer`
    background-color: #000;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

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
`;