import react from "react";
//Styles
import {Wrapper,Content} from './Grid.styles';


function Grid({header,children}){
return(
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);
}

export default Grid;