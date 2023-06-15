import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../Sidebar.item/SidebarItem';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selector/getSidebarItems';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSelector(getSidebarItems);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	const itemsList = useMemo(() => sidebarItemsList.map((item) => (
		<SidebarItem
			item={item}
			collapsed={collapsed}
			key={item.path}
		/>
	)), [collapsed, sidebarItemsList]);

	return (
		<div
			data-testid="sidebar"
			className={
				classNames(
					cls.Sidebar,
					{ [cls.collapsed]: collapsed },
					[className],
				)
			}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapsedBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				<div>
					{itemsList}
				</div>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.lang} />
			</div>
		</div>
	);
});