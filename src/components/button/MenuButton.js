import { Menu } from 'lucide-react';

export default function MenuButton(props) {
	return(
		<button className="menu-button" href onClick={props.onClick}>
			<Menu color="grey" size={30}/>
		</button>
	)
}
