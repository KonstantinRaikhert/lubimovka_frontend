// @ts-nocheck

import { useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';

import { AppLayout } from 'components/app-layout';
import { PerformanceLayout } from 'components/performance-layout';
import { PerformanceHeadline } from 'components/performance-headline';
import { PerformanceDetails } from 'components/performance-details';
import { PerformanceCrew } from 'components/performance-crew';
import { RawText } from 'components/raw-text';
import { Share } from 'components/share';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { Video } from 'components/video';
import { Section } from 'components/section';
import { PhotoGallery } from 'components/photo-gallery';
import { Lightbox } from 'components/lightbox';
// import { ReviewCarousel } from 'components/review-carousel';
// import { CritiqueCard } from 'components/critique-card';
// import { ReviewCard } from 'components/review-card';
import { fetcher } from 'shared/fetcher';
import { Performance as PerformanceModel } from 'api-typings';

const Performance = (props: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const {
    play,
    persons,
    images_in_block,
    name,
    main_image,
    bottom_image,
    video,
    description,
    text,
    age_limit,
  } = props;

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const toggleLightboxVisibility = () => setIsLightboxOpen(!isLightboxOpen);
  const handlePhotoGalleryItemClick = (id: number) => () => {
    setSelectedImage(id);
    setIsLightboxOpen(true);
  };

  // TODO: добавить недостающие данные в ответ бекенда
  const formattedDate = new Date('2021-05-13T01:00:00.000Z').toLocaleDateString('ru-Ru', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <AppLayout>
      <PerformanceLayout>
        <PerformanceLayout.Headline>
          <PerformanceHeadline
            title={name}
            // TODO: добавить в ответ бекенда недостающие данные
            description=""
            date={formattedDate}
            ticketsUrl=""
            text={description}
            image={main_image}
          />
        </PerformanceLayout.Headline>
        {video && (
          <PerformanceLayout.Video>
            <Video src={video}/>
          </PerformanceLayout.Video>
        )}
        <PerformanceLayout.Text>
          <RawText>
            {text}
          </RawText>
        </PerformanceLayout.Text>
        <PerformanceLayout.Play>
          <Section
            type='play'
            title='Почитать пьесу'
            titleTag='h6'
          >
            <BasicPlayCard
              type='performance'
              play={{
                title: play.name,
                city: play.city,
                year: play.year,
                linkView: play.url_reading,
                linkDownload: play.url_download,
                authors: play.authors
              }}
              buttonVisibility
            />
          </Section>
        </PerformanceLayout.Play>
        <PerformanceLayout.Aside>
          <PerformanceDetails
            // TODO: добавить в ответ бекенда недостающие данные
            duration="1 ч. 15 мин."
            ageLimit={age_limit}
          />
          <PerformanceCrew crew={persons}/>
        </PerformanceLayout.Aside>
        <PerformanceLayout.Gallery>
          <PhotoGallery>
            {images_in_block.map(({ image }, index) => (
              <PhotoGallery.Item
                key={image}
                image={image}
                zoomIn
                onClick={handlePhotoGalleryItemClick(index)}
              />
            ))}
          </PhotoGallery>
          <Lightbox
            isOpen={isLightboxOpen}
            initialSlideIndex={selectedImage}
            onClose={toggleLightboxVisibility}
          >
            {images_in_block.map((image, index) => (
              <Image
                key={index}
                src={image.image}
                // TODO: узнать насчет описания изображений в админке
                alt=''
                layout="fill"
                objectFit='cover'
              />
            ))}
          </Lightbox>
        </PerformanceLayout.Gallery>
        {/* TODO: добавить в ответ бекенда недостающие данные */}
        {/* <PerformanceLayout.Critique>
          <ReviewCarousel
            title="Рецензии"
            mode="single"
          >
            {critique.map(({ text, logo, href }, index) => (
              <CritiqueCard
                key={index}
                text={text}
                logo={logo}
                href={href}
              />
            ))}
          </ReviewCarousel>
        </PerformanceLayout.Critique>
        <PerformanceLayout.Review>
          <ReviewCarousel
            title="Отзывы зрителей"
            mode="multiple"
          >
            {data.review.map(({ text, author }, index) => (
              <ReviewCard
                key={index}
                text={text}
                author={author}
              />
            ))}
          </ReviewCarousel>
        </PerformanceLayout.Review> */}
        <PerformanceLayout.BottomImage>
          <Image
            src={bottom_image}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </PerformanceLayout.BottomImage>
        <PerformanceLayout.Share>
          <Share
            firstLine='Рассказать'
            secondLine='о спектакле'
            size='l'
          />
        </PerformanceLayout.Share>
      </PerformanceLayout>
    </AppLayout>
  );
};

const fetchPerformance = async (performanceId: string) => {
  let data;

  try {
    data = await fetcher<PerformanceModel>(`/library/performances/${performanceId}/`);
  } catch (error) {
    return;
  }

  return data;
};

export const getServerSideProps: GetServerSideProps<PerformanceModel, Record<'id', string>> = async ({ params }) => {
  const { id: performanceId } = params!;

  const performance = await fetchPerformance(performanceId);

  if (!performance) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...performance,
    },
  };
};

export default Performance;
