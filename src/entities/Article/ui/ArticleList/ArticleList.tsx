import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	target?: HTMLAttributeAnchorTarget;
	view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
	.fill(0)
	.map((item, index) => (
		<ArticleListItemSkeleton className={cls.card} key={index} view={view} />
	));

export const ArticleList = memo((props: ArticleListProps) => {
	const { t } = useTranslation();
	const {
		className,
		articles,
		isLoading,
		view = ArticleView.SMALL,
		target,
	} = props;

	const renderArticle = (article: Article) => (
		<ArticleListItem
			article={article}
			view={view}
			className={cls.card}
			key={article.id}
			target={target}
		/>
	);

	if (!isLoading && !articles.length) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				<Text size={TextSize.L} title={t('Статьи не найдены')} />
			</div>
		);
	}

	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles.length > 0
				? articles.map(renderArticle)
				: null}
			{isLoading && getSkeletons(view)}
			{isLoading && getSkeletons(view)}
		</div>
	);
});