// import './style.css'
import styled from 'styled-components'

export const Text = styled.div`
    font-weight: ${(props) => props.bold ? 'bold' : ''};
    color: white;
`
// export const Text = (props) => {
//     const classes = props.bold ? 'bold' : '';
//     return <div className={classes}>{props.children}</div>
// }