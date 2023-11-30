/* eslint-disable */
// Styles
import "./App.css"

//Pages
import HomeHeader from "../pages/HomeHeader"
import HowItWorks from "../pages/HowItWorks"
import HowItWorksQuery from "../pages/HowItWorksQuery"
import Features from "../pages/Features"
import Feedbacks from "../pages/Feedbacks"
import FinalCTA from "../pages/FinalCTA"
import OperatingMarket from "../pages/OperatingMarket"

export default function App() {
	return (
		<>
			<HomeHeader/>
			<HowItWorks/>
			<HowItWorksQuery/>
			<Features/>
			<OperatingMarket/>
			<Feedbacks/>
			<FinalCTA/>
		</>
	)
}
