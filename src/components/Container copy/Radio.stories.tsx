import { Radio } from './'
import { RadioGroup } from './'
export default {
	title: 'ska-ui/Radio',
	component: Radio,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div>
			<RadioGroup label='Choose your animal'>
				<Radio caption='Choose this if you want dogs' value='dogs'>
					Dogs
				</Radio>
				<Radio caption='Choose this if you want cats' value='cats'>
					Cats
				</Radio>
				<Radio caption='Choose this if you want ducks' value='ducks'>
					Ducks
				</Radio>
				<Radio
					caption='Choose this if you want chicken'
					value='chicken'>
					Chickens
				</Radio>
			</RadioGroup>
			<RadioGroup row label='Choose your animal'>
				<Radio value='dogs'>Dogs</Radio>
				<Radio value='cats'>Cats</Radio>
				<Radio value='ducks'>Ducks</Radio>
				<Radio value='chicken'>Chickens</Radio>
				<Radio value='rabbit'>Rabbit</Radio>
				<Radio value='horse'>Horse</Radio>
				<Radio value='turtle'>Turtle</Radio>
			</RadioGroup>
		</div>
	)
}

export const FormExample = Template.bind({})
