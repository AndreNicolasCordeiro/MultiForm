import styled from "styled-components";

export const Container = styled.div `
    p{
        font-size: 13px;
        color: #b8b8d4;
    }

    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr{
        height: 1px;
        border: 0;
        background-color: #3be996;
        margin: 30px 0;
    }

    label {
        font-size: 13px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #3be996;
            border-radius: 10px;
            color: white;
            outline: 0;
            font-size: 15px;
            background-color: #20212C;
            filter: drop-shadow(8px 8px 8px rgba(0,0,0, 0.40));
        }

    }

    button {
            background-color: #3be996;
            color: #20212C;;
            font-size: 14px;
            border: none;
            font-weight: bold;
            padding: 20px 40px;
            border-radius: 30px;
            cursor: pointer;
            margin-top: 32px;
            filter: drop-shadow(8px 8px 8px rgba(0,0,0, 0.40));
        }
`;