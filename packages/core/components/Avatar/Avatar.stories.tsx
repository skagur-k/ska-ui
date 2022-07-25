import { Badge } from '../Badge'
import {
	AiFillAlert,
	AiFillFacebook,
	AiFillGithub,
	AiFillSetting,
} from 'react-icons/ai'
import Avatar from './Avatar'
import { AvatarGroup } from './AvatarGroup'
export default {
	title: 'ska-ui/Avatar',
	component: Avatar,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => {
	return (
		<div className='flex flex-col gap-5'>
			<Avatar size='lg' name='Nam Hyuck' icon={AiFillSetting} />
			<div className='flex gap-10 items-center'>
				<Avatar size='xs' name='Nam Hyuck' icon={AiFillAlert} />
				<Avatar size='sm' name='Nam Hyuck' icon={AiFillAlert} />
				<Avatar size='md' name='Nam Hyuck' icon={AiFillAlert} />
				<Avatar size='lg' name='Nam Hyuck' icon={AiFillSetting} />
				<Avatar
					bordered
					size='xl'
					name='Nam Hyuck'
					icon={AiFillFacebook}
				/>
				<Avatar
					bordered
					size='2xl'
					name='Karina H'
					icon={AiFillGithub}
				/>
				<Avatar size='2xl' icon={AiFillGithub} />
			</div>
			<div className='flex gap-5 items-center'>
				<Avatar size='xs' name='Kyu Hyeun' />
				<Avatar size='sm' name='Pio Syuck' />
				<Avatar size='md' name='AD FS' />
				<Avatar size='lg' name='WD ZS' />
				<Avatar bordered size='xl' name='Nam Hyuck' />
				<Avatar bordered size='2xl' name='John Doe' />
			</div>

			<AvatarGroup size='xs' max={3}>
				<Avatar name='Nam Hyuck' />
				<Avatar
					name='Nam Hyuck'
					src='https://www.stockvault.net/data/2019/03/06/261776/thumb16.jpg'
				/>
				<Avatar
					name='Nam Hyuck'
					src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
				/>
				<Avatar
					name='Nam Hyuck'
					src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'
				/>
				<Avatar
					name='Nam Hyuck'
					src='https://i.pinimg.com/640x/26/12/73/261273da88b3732c008a871d0284642b.jpg'
				/>
				<Avatar
					bordered
					name='Nam Hyuck'
					src='https://upload.wikimedia.org/wikipedia/commons/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png'
				/>
				<Avatar
					bordered
					name='Nam Hyuck'
					src='https://img.sbs.co.kr/newsnet/etv/upload/2020/10/28/30000654805_1280.jpg'
				/>
				<Avatar bordered size='2xl' name='Nam Hyuck' />
			</AvatarGroup>
			<AvatarGroup size='lg' max={3}>
				<Avatar name='Nam Hyuck' />
				<Avatar name='Nam Hyuck' />
				<Avatar bordered name='Nam Hyuck' />
				<Avatar bordered name='Nam Hyuck' />
				<Avatar bordered size='2xl' name='Nam Hyuck' />
			</AvatarGroup>
		</div>
	)
}

export const FormExample = Template.bind({})
