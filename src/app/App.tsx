import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', { hovered: true, selected: false }, [theme])}>
			<Navbar />
			<div className="content-page">
				<Sidebar className='content-page' />
				<AppRouter />
			</div>


		</div>
	)
}

export default App;