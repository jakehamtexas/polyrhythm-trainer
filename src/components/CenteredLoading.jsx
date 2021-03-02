import styled from 'styled-components'
import { Loading } from 'waskode'

const Centered = styled.div`
	position: fixed;
	top: 40vh;
	width: 100vw;
	text-align: center;
`

const CenteredLoading = ({ message }) => (
	<Centered><Loading message={message} /></Centered>
)

export default CenteredLoading
