import { FaGithub } from 'react-icons/fa'
import { Item } from 'react-stately'
import Tabs from './Tabs'
export default {
	title: 'ska-ui/Tabs',
	component: Tabs,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Tabs aria-label='History of Ancient Rome'>
				<Item key='FoR' title={'Tab Title'}>
					Arma virumque cano, Troiae qui primus ab oris.
				</Item>
				<Item key='MaR' title='Monarchy and Republic'>
					Senatus Populusque Romanus.
				</Item>
				<Item key='Emp' title='Empire Long Title for Tabs'>
					Alea jacta est.
				</Item>
			</Tabs>
		</div>
	)
}

export const FormExample = Template.bind({})
