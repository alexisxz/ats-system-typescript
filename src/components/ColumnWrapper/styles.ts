import styled from "styled-components";


export const Container = styled.div`
`;

export const Column = styled.div`
    border: 1px solid #ccc;

    margin: 10px 10px 0;
    padding: 10px;

    min-height: 400px;

    h2 {
        text-align: center;
        margin-bottom: 10px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 5px;
        flex-wrap: wrap;

        padding: 5px;

        border-bottom: 1px solid #ccc;

        div {
            border-bottom: none;
        }
    }
`;