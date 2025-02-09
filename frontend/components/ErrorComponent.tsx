import React from "react";

interface ErrorComponentProps {
	message: string;
	onReload?: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message, onReload }) => {
	const defaultReload = () => {
		window.location.reload();
	};
	return (
		<div className='error'>
			Error: {message}
			<button type='button' onClick={onReload || defaultReload}>
				Reload
			</button>
		</div>
	);
};

export default ErrorComponent;
