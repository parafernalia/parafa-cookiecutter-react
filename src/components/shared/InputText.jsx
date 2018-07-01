import React from 'react'
import { bool, func, string } from 'prop-types'

const InputText = ({ label, name, required, type = 'text', ...props }) => (
	<div>
		<label htmlFor={name}>{label}</label>
		<input
			{...props}
			type={type}
			id={name}
			name={name}
			required={!!required}
			aria-required={!!required}
		/>
	</div>
)

InputText.propTypes = {
	autoFocus: bool,
	disabled: bool,
	label: string.isRequired,
	name: string.isRequired,
	onChange: func.isRequired,
	placeholder: string,
	required: bool,
	type: string,
	value: string.isRequired,
}

export default InputText
