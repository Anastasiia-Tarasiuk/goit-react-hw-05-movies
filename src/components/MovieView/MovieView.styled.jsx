import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
`

export const Poster = styled.img`
    margin-right: 20px;
    margin-bottom: 50px;
`

export const GenresList = styled.ul`
    display: flex;
    list-style-type: none;
    padding-left: 0;    
`

export const GenresItem = styled.li`    
    :not(:last-child) {
       margin-right: 10px; 
    }
`