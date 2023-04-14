import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, RedusersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const redusers: RedusersList = {
	profile: profileReducer,

};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation();

	return (
		<DynamicModuleLoader reducers={redusers} removeAfterUnmount>
			<div className={classNames('', {}, [className])}>
				{t('PROFILE PAGE')}
			</div>
		</DynamicModuleLoader>

	);
};

export default ProfilePage;