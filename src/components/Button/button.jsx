import * as S from './style'
import { Text } from '../../ui/Text'

export const Button = (props) => {
    return(
        <S.WrapperButton {...props}>
            <Text onClick={props.onClick}>{props.children}</Text>
        </S.WrapperButton>
    )
}