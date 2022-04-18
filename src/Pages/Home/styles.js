import styled from "styled-components";

export const Container = styled.div`
    h1{
        text-align: center;
        margin: 4rem 0;
    }    
`

export const MoveList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 2rem;
`

export const Movie = styled.li`
    flex: 1 2 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 300px;
        height: 450px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        font-size: 120%
        text-align: center;
    }

    a{
        transition: all 0.3s ease-in;
    }

    a:hover{
        transform: scale(1.05);
    }
`