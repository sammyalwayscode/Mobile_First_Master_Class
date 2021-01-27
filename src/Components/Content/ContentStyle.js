import styled from 'styled-components'

export const Container = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center
`
export const ContentWrapper = styled.div`
// width:90%;
// display:flex;
// // flex-flow: coloum nowrap;
// flex-direction:coloum;
// flex-wrap:nowrap;
width:1100px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
flex-wrap:nowrap;

`
export const Description = styled.div`
text-align:center;
font-size:25px;
margin-top:170px
`
export const Contents = styled.div`
width: 1000px;
display:flex;
justify-content:space-around;
align-items:center;


@media screen and (max-width:960px){
  display:flex;
  flex-direction: column;
}

@media screen and (max-width:620px){
  display:flex;
  flex-direction: column-reverse;
}

// @media screen and (max-width:960px){
//   display:flex;
//   flex-direction: column;
// }

`
export const ImageBox = styled.div`
height:350px;
width:350px;
object-fit:cover;
// background-color:red;
margin-bottom:30px
`
export const TextBox = styled.div`
height:350px;
width:350px;
text-align:center;
background-color:darkred;
color:#fff;
margin-bottom:30px
`