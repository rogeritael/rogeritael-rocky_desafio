import { TopicStyle } from "./styles";

interface TopicProps {
    metodology: string,
    content: string
}

export function Topic({ metodology, content }: TopicProps){
    return(
        <TopicStyle>
            <h4>{metodology}</h4>
            <p>{content}</p>
        </TopicStyle>
    )
}