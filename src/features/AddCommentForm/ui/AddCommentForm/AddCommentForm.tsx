import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReduser } from '../../modal/slice/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../modal/selectors/addCommentFrom';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
	className?: string;
	onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReduser,
};

const AddCommentForm = (props: AddCommentFormProps) => {
	const { t } = useTranslation();
	const { className, onSendComment } = props;
	const text = useSelector(getAddCommentFormText);
	const error = useSelector(getAddCommentFormError);
	const dispatch = useAppDispatch();

	const onCommentTextChange = useCallback((value: string) => {
		dispatch(addCommentFormActions.setText(value));
	}, [dispatch]);

	const onSendHandler = useCallback(() => {
		onSendComment(text || '');
		onCommentTextChange('');
	}, [onCommentTextChange, onSendComment, text]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.AddCommentForm, {}, [className])}>
				<Input
					className={cls.input}
					placeholder={t('Введите текс комментария')}
					value={text}
					onChange={onCommentTextChange}
				/>
				<Button
					theme={ButtonTheme.OUTLINE}
					onClick={onSendHandler}
				>
					{t('Отправить')}
				</Button>
			</div>
		</DynamicModuleLoader>

	);
};

export default AddCommentForm;