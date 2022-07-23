import classNames from 'classnames'
import React, { ComponentType, memo, useState } from 'react'
import {
	AiOutlineFile,
	AiOutlineMinusSquare,
	AiOutlinePlusSquare,
} from 'react-icons/ai'
import { BsFolder } from 'react-icons/bs'
import { FiFolderMinus, FiFolderPlus } from 'react-icons/fi'
import { TreeContextProvider, useTree } from './TreeContext'
import { FileProps, FolderProps, TreeViewProps } from './TreeView.types'

export const TreeView = ({ children }: { children: React.ReactNode }) => {
	return <div className='treeview'>{children}</div>
}

export const Folder: ComponentType<FolderProps> = memo(
	({ children, name, open, defaultOpen = false }) => {
		const depth = useTree()
		const [isOpen, setIsOpen] = useState(defaultOpen)

		return (
			<TreeContextProvider value={1 + depth}>
				<li
					className={classNames('treeview-folder', {
						'treeview-folder-open': isOpen || open,
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
					{(open || isOpen) && (
						<ul className='treeview-folder-children'>{children}</ul>
					)}
				</li>
			</TreeContextProvider>
		)
	}
)

export const File: ComponentType<FileProps> = memo(({ name, active, type }) => {
	const depth = useTree()
	return (
		<li
			className={classNames('treeview-file', {
				'treeview-file-active': active,
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
			<div className='treeview-file-label'>
				<span className='treeview-file-label-icon '>
					<AiOutlineFile className='treeview-icons' />
				</span>
				<span className='treeview-file-label-name'>{name}</span>
			</div>
		</li>
	)
})

export default TreeView
