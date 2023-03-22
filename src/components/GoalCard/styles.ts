import styled from 'styled-components';

export const GoalCardContainer = styled.section`
    /* max-width: 300px; */
    border: 1px solid #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px 10px 30px;


    img {
        width: 99px;
        height: 96px;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    h4 {
        font-size: var(--sub3);
        color: #F89D24;
        width: 100%;
        margin-bottom: 10px;
        width: 208px;
    }

    p {
        width: 208px;
        font-size: var(--sub3);
        font-weight: 300;
        opacity: 0.5;
    }
`;