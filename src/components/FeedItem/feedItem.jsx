import * as S from './style'
import { Text } from "../../ui/Text";


export const FeedItem = (props) => {

    return (
        <S.Wrapper>
            <S.ImageFeed {...props} src={props.imageData}/>
            <Text>{props.author ? `@${props.author}` : ''}</Text>
        </S.Wrapper>
    )
 }

