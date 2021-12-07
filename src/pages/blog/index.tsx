import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import { AppLayout } from 'components/app-layout/index';
import { SectionTitleForBlog } from 'components/section-title-for-blog/section-title-for-blog';
import { SectionGridForBlog } from 'components/section-grid-for-blog/section-grid-for-blog';
import { fetcher } from 'shared/fetcher';
import { PaginatedBlogItemListList } from 'api-typings';
import { BlogItemList } from 'api-typings/models/BlogItemList';

// import { BlogCard } from 'components/ui/blog-card';
// import data from './assets/mock-cardData.json';

interface IBlogProps {
  metaTitle: string;
}
const Blog: NextPage<IBlogProps> = (props: IBlogProps) => {
  const { metaTitle } = props;

  const [blogs, setBlogs] = useState<Array<BlogItemList> | undefined>(undefined);

  const fetchPerformance = async () => {
    let data;
    try {
      data = await fetcher<PaginatedBlogItemListList>('/blog');
    } catch (error) {
      return;
    }
    return data;
  };

  useEffect(() => {
    fetchPerformance()
      .then(data => {
        return setBlogs(data?.results);
      })
      .catch(err => alert(`err: ${err}`));
  }, []);

  useEffect(() => {
    if (blogs !== undefined && blogs.length > 0)
      console.log('useEffect', blogs);
  }, [blogs]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <AppLayout>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <SectionTitleForBlog email='critics@lubimovka.ru' setBlogs={setBlogs}/>
      <SectionGridForBlog isLoaded={isLoaded}/>
    </AppLayout>
  );
};

export default Blog;
