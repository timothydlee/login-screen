import { ChangeEvent } from 'react';
import './inputWithMessage.css';
interface InputWithMessageProps {
	errorMessage?: string,
	showErrorMessage?: boolean,
	placeholder?: string,
	onChange: (e: ChangeEvent<HTMLInputElement>) => void,
	value: string;
};

const InputWithMessage = ({
	errorMessage,
	showErrorMessage = false,
	placeholder = '',
	onChange,
	value
}: InputWithMessageProps) => (
	<div className='input-with-message-container'>
		<input
			className='input-with-message-input'
			type='text'
			placeholder={placeholder}
			value={value}
			onChange={onChange} />
		{showErrorMessage && <p className='error-text'>{errorMessage}</p>}
	</div>
);

export default InputWithMessage;
