import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	ProfileCard,
	ValidateProfileError,
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileLoading,
	getProfileReadonly,
	getProfileValidateErrors,
	profileActions,
	profileReducer,
} from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useCallback } from 'react';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Page } from 'shared/ui/Page/Page';

const redusers: ReducersList = {
	profile: profileReducer,

};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useDispatch();
	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);
	const { id } = useParams<{ id: string }>();

	const validateErrorTranslates = {
		[ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранеии'),
		[ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
		[ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
		[ValidateProfileError.NO_DATA]: t('Данные не указаны'),
	};

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}
	});

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ first: value || '' }));
	}, [dispatch]);

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ lastname: value || '' }));
	}, [dispatch]);

	const onChangeAge = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
	}, [dispatch]);

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ city: value || '' }));
	}, [dispatch]);

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ username: value || '' }));
	}, [dispatch]);

	const onChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ avatar: value || '' }));
	}, [dispatch]);

	const onChangeCurrency = useCallback((currency: Currency) => {
		dispatch(profileActions.updateProfile({ currency }));
	}, [dispatch]);

	const onChangeCountry = useCallback((country: Country) => {
		dispatch(profileActions.updateProfile({ country }));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={redusers} removeAfterUnmount>
			<Page className={classNames('', {}, [className])}>
				<ProfilePageHeader />
				{validateErrors?.length && validateErrors.map((error) => (
					<Text
						key={error}
						theme={TextTheme.ERROR}
						text={validateErrorTranslates[error]}
					/>
				))}
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
				/>
			</Page>
		</DynamicModuleLoader>

	);
};

export default ProfilePage;