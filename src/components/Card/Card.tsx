import { ReactNode } from 'react';
import './card.css';

interface CardProps {
	children?: ReactNode
};

const Card = ({ children, ...props }: CardProps) => (
	<div className='card-wrapper' {...props}>
		{children}
	</div>
);

export default Card;
