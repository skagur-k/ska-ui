interface KBDProps extends DefaultProps {
	mac?: boolean
	meta?: boolean
	shift?: boolean
	alt?: boolean
	ctrl?: boolean
	windows?: boolean
	option?: boolean
	fn?: boolean
	enter?: boolean
	deletekey?: boolean
}

type KBD = JSX.Element

export { KBD, KBDProps }
