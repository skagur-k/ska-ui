import classNames from 'classnames'

export const useCheckboxClass = ({}: props) => {
	const sizes = {
		sm: 'checkbox-sm',
		md: 'checbox-md',
		lg: 'checkbox-lg',
	}
	const classes = classNames()
	return classes
}
