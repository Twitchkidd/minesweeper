import styled from 'styled-components';

export const PancakeStack = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;

	${props => (props.full ? 'min-height: 100vh;' : null)}
`;

export const SuperCenter = styled.div`
	display: grid;
	place-items: center;
`;
