import { ReactNode } from 'react';
import './button.css';

interface ButtonProps {
	children?: ReactNode,
	onClick?: () => {},
	disabled?: boolean
};

const Button = ({ children, onClick, disabled, ...props }: ButtonProps) => (
	<button className={`btn ${disabled ? 'btn-disabled' : ''}`} onClick={onClick} {...props}>{children}</button>
);

export default Button;
