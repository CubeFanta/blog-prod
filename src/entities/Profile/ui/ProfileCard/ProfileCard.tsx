import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation('profile');
	const data = useSelector(getProfileData);
	const isLoading = useSelector(getProfileLoading);
	const error = useSelector(getProfileError);

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('Профиль')} />
				<Button
					className={cls.editBtn}
					theme={ButtonTheme.OUTLINE}
				>
					{t('Редактировать')}
				</Button>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.first}
					placeholder={t('Ваше Имя')}
					className={cls.input}
				/>
				<Input
					value={data?.lastname}
					placeholder={t('Ваше Фамилия')}
					className={cls.input}
				/>
				<Input
					value={data?.city}
					placeholder={t('Ваш Город')}
					className={cls.input}
				/>
				<Input
					value={data?.country}
					placeholder={t('Ваша Страна')}
					className={cls.input}
				/>
				<Input
					value={data?.currency}
					placeholder={t('Ваша ЗП')}
					className={cls.input}
				/>
				<Input
					value={data?.avatart}
					placeholder={t('Ваш аватар')}
					className={cls.input}
				/>
			</div>
		</div>
	);
};