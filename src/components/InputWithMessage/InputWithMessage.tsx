import { ChangeEvent } from 'react';
import './inputWithMessage.css';

type InputType = 'password' | 'text';

interface InputWithMessageProps {
	errorMessage?: string,
	showErrorMessage?: boolean,
	placeholder?: string,
	onChange: (e: ChangeEvent<HTMLInputElement>) => void,
	value: string,
	type?: InputType
};

const InputWithMessage = ({
	errorMessage,
	showErrorMessage = false,
	placeholder = '',
	onChange,
	value,
	type = 'text'
}: InputWithMessageProps) => (
	<div className='input-with-message-container'>
		<input
			className='input-with-message-input'
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange} />
		{showErrorMessage && <p className='error-text'>{errorMessage}</p>}
	</div>
);

export default InputWithMessage;
