import classNames from 'classnames'
import React, { ComponentType, memo, useState } from 'react'
import { FocusScope, useFocusRing } from 'react-aria'
import {
	AiOutlineFile,
	AiOutlineMinusSquare,
	AiOutlinePlusSquare,
} from 'react-icons/ai'
import { BsFolder } from 'react-icons/bs'
import { CSSTransition } from 'react-transition-group'
import { useFocusKeyDown } from '../../utils'
import { TreeContextProvider, useTree } from './TreeContext'
import { FileProps, FolderProps } from './TreeView.types'

export const TreeView = ({ children }: { children: React.ReactNode }) => {
	return (
		<FocusScope contain restoreFocus autoFocus>
			<div className='treeview'>{children}</div>
		</FocusScope>
	)
}

export const Folder: ComponentType<FolderProps> = memo(
	({ children, name, open, defaultOpen = false }) => {
		const depth = useTree()
		const [isOpen, setIsOpen] = useState(defaultOpen)

		const ref = React.useRef<HTMLUListElement>(null)
		const { focusProps, isFocusVisible } = useFocusRing()
		const onKeyDown = useFocusKeyDown()

		return (
			<TreeContextProvider value={1 + depth}>
				<li
					{...focusProps}
					tabIndex={0}
					onKeyDown={onKeyDown}
					className={classNames('treeview-folder', {
						'treeview-folder-open': isOpen || open,
						'treeview-folder-focused': isFocusVisible,
					})}>
					<a
						className={classNames('treeview-folder-label')}
						title={name}
						onClick={() => setIsOpen((open) => !open)}>
						{Array.from(Array(depth)).map((_e, i) => {
							return (
								<span
									key={i}
									className='treeview-indent treeview-indent-folder'
								/>
							)
						})}
						<div className='treeview-folder-label'>
							<span className='treeview-folder-label-status treeview-icons'>
								{open || isOpen ? (
									<AiOutlineMinusSquare className='align-middle' />
								) : (
									<AiOutlinePlusSquare />
								)}
							</span>
							<span className='treeview-folder-label-icon'>
								<BsFolder className='treeview-icons' />
							</span>
							<span className='treeview-folder-label-name'>
								{name}
							</span>
						</div>
					</a>

					<CSSTransition
						in={open || isOpen}
						appear
						unmountOnExit
						nodeRef={ref}
						timeout={{ enter: 0, exit: 250 }}
						classNames={{
							enter: 'max-h-0',
							enterDone:
								'max-h-[1000px] transition-all ease-in duration-500',
							exit: 'max-h-0 transition-all ease-out duration-250',
						}}>
						<ul
							ref={ref}
							className='treeview-folder-children overflow-hidden'>
							{children}
						</ul>
					</CSSTransition>
				</li>
			</TreeContextProvider>
		)
	}
)

export const File: ComponentType<FileProps> = memo(({ name, active, type }) => {
	const depth = useTree()
	const { focusProps, isFocusVisible } = useFocusRing()
	const onKeyDown = useFocusKeyDown()

	return (
		<li
			{...focusProps}
			tabIndex={0}
			onKeyDown={onKeyDown}
			className={classNames('treeview-file', {
				'treeview-file-active': active,
				'treeview-file-focused': isFocusVisible,
			})}>
			<a>
				{Array.from(Array(depth)).map((_e, i) => {
					return (
						<span
							className='treeview-indent treeview-indent-file'
							key={i}
						/>
					)
				})}
			</a>
			<div className={classNames('treeview-file-label')}>
				<span className='treeview-file-label-icon '>
					<AiOutlineFile className='treeview-icons' />
				</span>
				<span className='treeview-file-label-name'>{name}</span>
			</div>
		</li>
	)
})

export default TreeView
