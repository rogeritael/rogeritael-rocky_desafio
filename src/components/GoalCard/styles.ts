import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    50%{
        opacity: .2;
    }
`;

export const GoalCardContainer = styled.div`
    width: 255px;
    height: 255px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 30px 10px 30px;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        border: 1px solid #fff;
        position: absolute;
        left: 0;
        top: 0;
    }

    &:hover {
        &::before {
            animation: ${pulse} 2s ease-in-out infinite;
        }

    }


    img {
        width: 99px;
        height: 96px;
        margin: 0 auto;
        /* margin-bottom: 20px; */
    }

    .text_container {
        h4 {
            font-size: var(--sub3);
            color: #F89D24;
            width: 100%;
            margin-bottom: 5px;
            width: 208px;
            position: relative;

        }

        p {
            width: 208px;
            font-size: var(--sub3);
            font-weight: 300;
            opacity: 0.5;
        }
    }
    
`;