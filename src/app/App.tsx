import { Route, Routes, Link } from "react-router-dom";
import './styles/index.scss'
import React, { Suspense, useContext, useState } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', { hovered: true, selected: false }, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPage />} />
					<Route path={'/'} element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App;