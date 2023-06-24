import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../modal/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
	const { t } = useTranslation();
	const {
		className,
		comments,
		isLoading,
	} = props;

	if (isLoading) {
		return (
			<div className={classNames(cls.CommentList, {}, [className])}>
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
			</div>
		);
	}

	return (
		<div className={classNames(cls.CommentList, {}, [className])}>
			{comments?.length
				? comments.map((comment) => (
					<CommentCard
						isLoading={isLoading}
						className={cls.comment}
						comment={comment}
						key={comment.id}
					/>
				))
				: <Text text={t('Комментарии отсутствуют')} />}
		</div>
	);
};