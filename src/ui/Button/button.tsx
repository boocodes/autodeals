import styled from "styled-components";

interface Props{
    text: string;
}



function Button({text}:Props){
    return(
            <Root>
                {text}
            </Root>
    )
}

const Root = styled.button`
    cursor: pointer;
    color: #1E1F24;
    background-color: white;
    font-family: 'Muller';
    font-weight: 500;
    font-size: 22px;
    padding: 16px 0px;
    border-radius: 8px;
    border: none;
    position: relative;
    width: 100%;
    @media(max-width: 1700px){
        font-size: 20px;
    }    
    @media(max-width: 1440px){
        padding: 15px 0px;
        border-radius: 8px;
    }
    // @media(max-width: 1200px){
    //     padding: 14px 0px;
    //     font-size: 14px;
    //     border-radius: 14px;
    // }
    @media(max-width: 1024px){
        font-size: 16px;
        padding: 18px 0px;
    }
    
    @media(max-width: 540px){
        font-size: 16px;
        padding: 15px 0px;
    }
    @media(max-width: 510px){
        font-size: 14px;
        padding: 12px 0px;
        border-radius: 8px;
    }
`


export default Button;