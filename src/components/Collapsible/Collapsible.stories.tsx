import { Avatar } from '../Avatar'
import { Collapsible } from '.'
export default {
	title: 'ska-ui/Collapsible',
	component: Collapsible,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Collapsible title='Question 1'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Eveniet repellat a facilis libero reprehenderit, voluptatum
				magnam odio voluptas iusto est illo nobis saepe laborum,
				possimus adipisci cupiditate sunt inventore cumque.! Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Eveniet repellat a
				facilis libero reprehenderit, voluptatum magnam odio voluptas
				iusto est illo nobis saepe laborum, possimus adipisci cupiditate
				sunt inventore cumque.! Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Eveniet repellat a facilis libero
				reprehenderit, voluptatum magnam odio voluptas iusto est illo
				nobis saepe laborum, possimus adipisci cupiditate sunt inventore
				cumque.! Lorem ipsum dolor, sit amet consectetur adipisicing
				elit. Eveniet repellat a facilis libero reprehenderit,
				voluptatum magnam odio voluptas iusto est illo nobis saepe
				laborum, possimus adipisci cupiditate sunt inventore cumque.!
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Eveniet repellat a facilis libero reprehenderit, voluptatum
				magnam odio voluptas iusto est illo nobis saepe laborum,
				possimus adipisci cupiditate sunt inventore cumque.! Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Eveniet repellat a
				facilis libero reprehenderit, voluptatum magnam odio voluptas
				iusto est illo nobis saepe laborum, possimus adipisci cupiditate
				sunt inventore cumque.!
				<Avatar />
			</Collapsible>
			<Collapsible title='Question 1'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Eveniet repellat a facilis libero reprehenderit, voluptatum
				magnam odio voluptas iusto est illo nobis saepe laborum,
				possimus adipisci cupiditate sunt inventore cumque.!
			</Collapsible>
			<Collapsible title='Question 1'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Eveniet repellat a facilis libero reprehenderit, voluptatum
				magnam odio voluptas iusto est illo nobis saepe laborum,
				possimus adipisci cupiditate sunt inventore cumque.!
			</Collapsible>
		</div>
	)
}

export const FormExample = Template.bind({})
