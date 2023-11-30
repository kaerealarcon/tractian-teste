//Libs
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Style CSS
import './Navbar.css';

//Components
import Logo from "../../assets/Logo.png"
import SolutionsNav from './SolutionsNav';
import MenuButton from '../button/MenuButton';

export default function Navbar() {
	const [solutionsDropdown, setSolutionsDropdown] = useState(false);
	const [activeMenu, setActiveMenu] = useState(false);

	return (
		<>
		<div className='sticky'>
			<section className="top-bar">

			<nav className="navbar-container">
				<a><img src={Logo} alt="Tractian Logo" /></a>
				<ul className="grid-columns">
					<button
						className="nav-button pointer big"
						onMouseEnter={() => {setSolutionsDropdown(true)} }
					>
						<span>Soluções
								{ !solutionsDropdown ?
									<ChevronDown color="grey" size={20}/>
									:
									<ChevronUp color="#185EF6" size={20}/>
								}
						</span>
					</button>
					<button className="nav-button pointer big">
						<span>Indústrias <ChevronDown color="grey" size={20}/></span>
					</button>
					<button className="nav-button pointer big">
						<span>Sobre <ChevronDown color="grey" size={20}/></span>
					</button>
					<button className="nav-button pointer big">
						<span>Materiais <ChevronDown color="grey" size={20}/></span>
					</button>
					<button className="nav-button pointer big">
						<span href="https://tractian.com/blog">Blog</span>
					</button>
				</ul>
			</nav>
			<a href="https://app.tractian.com/login" className="big">Área do cliente</a>
			{solutionsDropdown &&
				<SolutionsNav
					setSolutionsDropdown={setSolutionsDropdown}
				/>
			}

		</section></div>
		<section className="hamburguer-nav">
			<a><img src={Logo} alt="Tractian Logo" /></a>
			<MenuButton onClick={() => {setActiveMenu(!activeMenu)}}/>
			{
				activeMenu &&
				<div className="menu">
					<div className="menu-container">
							<button className="menu-button pointer big">
								<span>Soluções <ChevronDown color="grey" size={20}/></span>
							</button>
							<button className="menu-button pointer big">
								<span>Indústrias <ChevronDown color="grey" size={20}/></span>
							</button>
							<button className="menu-button pointer big">
								<span>Sobre <ChevronDown color="grey" size={20}/></span>
							</button>
							<button className="menu-button pointer big">
								<span>Materiais <ChevronDown color="grey" size={20}/></span>
							</button>
							<button className="menu-button pointer big">
								<span href="https://tractian.com/blog">Blog</span>
							</button>
					</div>
				</div>
			}
		</section>
		</>
	)
}
