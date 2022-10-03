import { ChangeEvent, useEffect, useState } from 'react';
import { Card, InputWithMessage } from '../../components';
import './signup.css';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
	const [passwordsMatch, setPasswordsMatch] = useState(true);

	useEffect(() => {
		if (!!passwordConfirmation && !!password) {
			setPasswordsMatch(passwordConfirmation === password);
		} else {
			setPasswordsMatch(true);
		}
	}, [passwordConfirmation, password]);

	const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
	const handlePasswordConfirmationChange = (e: ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value);

	const submitButtonDisabled = !passwordsMatch || !password || !passwordConfirmation || !username;
	return (
		<div className='signup-screen-wrapper'>
			<Card>
				<div className='signup-screen-card-container'>
					<div className='signup-screen-header-text-wrapper'>
						<h1>Sign up.</h1>
						<p>Create a username and password to see your data</p>
					</div>
					<div className='signup-screen-card-inputs-container'>
						<InputWithMessage
							placeholder='Username'
							onChange={handleUsernameChange}
							value={username} />
						<InputWithMessage
							placeholder='Password'
							onChange={handlePasswordChange}
							value={password} />
						<InputWithMessage
							placeholder='Confirm password'
							onChange={handlePasswordConfirmationChange}
							value={passwordConfirmation}
							showErrorMessage={!passwordsMatch}
							errorMessage='Passwords do not match' />
					</div>
					<div>
						<button disabled={submitButtonDisabled}>Submit</button>
					</div>
				</div>
			</Card>
		</div>
	)
};

export default Signup;
