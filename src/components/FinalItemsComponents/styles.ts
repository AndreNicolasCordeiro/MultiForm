import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    align-items: center;
    text-align: center;


`;

export const Items = styled.div`
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: center;
            align-items: center;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 12px 10px;
            border: 2px solid #3be996;
            border-radius: 10px;
            color: white;
            outline: 0;
            font-size: 15px;
            background-color: #20212C;
            filter: drop-shadow(8px 8px 8px rgba(0,0,0, 0.40));
`;