import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleViewSelector } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
	getArticlesPageError,
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPageNum,
	getArticlesPageView,
} from 'pages/ArticlesPage/modal/selectors/articlesPageSelectors';
import { Page } from 'shared/ui/Page/Page';
import { fetchArticlesList } from '../../modal/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions, articlesPageReduser, getArticles } from '../../modal/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/modal/services/fetchNextArticlesPage/fetchNextArticlesPage';

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReduser,
};

const ArticlesPage = (props: ArticlesPageProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);
	const page = useSelector(getArticlesPageNum);
	const hasMore = useSelector(getArticlesPageHasMore);

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view));
	}, [dispatch]);

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(articlesPageActions.initState());
		dispatch(fetchArticlesList({
			page: 1,
		}));
	});

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page
				onScrollEnd={onLoadNextPart}
				className={classNames(cls.ArticlesPage, {}, [className])}
			>
				<ArticleViewSelector view={view} onViewClick={onChangeView} />
				<ArticleList
					isLoading={isLoading}
					view={view}
					articles={articles}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);