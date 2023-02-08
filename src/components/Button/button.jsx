import * as S from './style'
import { Text } from '../../ui/Text'

export const Button = (props) => {
    return(
        <S.WrapperButton>
            <Text>{props.children}</Text>
        </S.WrapperButton>
    )
}