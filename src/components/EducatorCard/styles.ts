import styled from "styled-components";

export const EducatorCardStyle = styled.div`
    padding: 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    width: max-content;
    height: max-content;

    .educator_profile {
        width: 311.67px;
        height: 268px;
        transition: 500ms;
        background-color: #fff;
        border-radius: 3px;
        margin-bottom: 25px;
        overflow: hidden;

        img {
            object-fit: contain;
            max-width: 100%;
            transition: 500ms;
        }

        &:hover {
            img {
                transform: scale(1.1);
            }
        }
    }

    .text_container {
        width: 311.67px;

        h2 {
            text-transform: uppercase;
            color: var(--orange);
            font-size: var(--sub3);
        }

        p {
            margin-top: 10px;
            font-size: var(--sub3);
        }
    }
`;