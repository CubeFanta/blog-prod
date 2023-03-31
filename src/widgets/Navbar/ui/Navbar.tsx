import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername/index';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, []);

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ThemeButton.CLEAR_INVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Войти')}
			</Button>
			{/* <Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{t('texttexttexttexttexttexttexttext')}
			</Modal> */}
			<LoginModal
				isOpen={isAuthModal}
				onClose={onCloseModal}
			/>
		</div>
	);
};