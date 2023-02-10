import * as S from './style'

export const FeedItem = (props) => {

    return (
        <S.Wrapper>
            <S.ImageFeed src={props.imageData}/>
        </S.Wrapper>
    )
 }

