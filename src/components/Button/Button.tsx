import { ReactNode } from 'react';
interface ButtonProps {
	children?: ReactNode,
	onClick?: () => {}
};

const Button = ({ children, onClick, ...props }: ButtonProps) => (
	<button onClick={onClick} {...props}>{children}</button>
);

export default Button;
