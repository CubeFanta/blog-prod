import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

export enum TextAling {
	RIGHT = 'right',
	LEFT = 'left',
	CENTER = 'center',
}

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
	aling?: TextAling;
}

export const Text = memo((props: TextProps) => {
	const {
		className,
		title,
		text,
		theme = TextTheme.PRIMARY,
		aling = TextAling.LEFT,
	} = props;

	const mods: Mods = {
		[cls[theme]]: true,
		[cls[aling]]: true,
	}

	return (
		<div className={classNames(cls.Text, mods, [className])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});