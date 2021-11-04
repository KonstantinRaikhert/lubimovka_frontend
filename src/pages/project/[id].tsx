import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import { ProjectPage } from 'components/project-page';
import { ProjecPageSection } from 'components/project-page/projec-page-section';
import { ProjectHeader } from 'components/project-header';
import { ProjectDescription } from 'components/project-description';
import { Photos } from 'components/photos';
import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { PersonCardList } from 'components/ui/person-card';
import { PersonCard } from 'components/ui/person-card';

import projectData from './assets/mock-project-data.json';
import { VideoGallery } from 'components/video-gallery';
import { VideoGalleryItem } from 'components/video-gallery/video-gallery-item';
import { AnnouncedPlayCardList } from 'components/ui/announced-play-card/announced-play-card-list';
import { BasicPlayCardList } from 'components/ui/basic-play-card/list';
import { ProjectCooperation } from 'components/project-cooperation';
/* import { Button } from 'components/ui/button'; */


const Project: NextPage = () => {
  const cardsNum3 = [1, 2, 3];
  const cardsNum2 = [1, 2];

  return (
    <AppLayout>
      <Head>
        <title>{projectData.titledata.title}</title>
      </Head>
      <ProjectPage>
        {/* <Button
          size="s"
          iconPlace="right"
          icon="arrow-left"
          label="Проекты"
          border="bottomRight"
          width='120px'

        ></Button> */}
        <ProjectHeader
          title={projectData.titledata.title}
          intro={projectData.titledata.intro}
          image={projectData.titledata.image}
          imageDesc={projectData.titledata.imageDesc}
        />
        <ProjectDescription>
          {projectData.titledata.description}
        </ProjectDescription>
        <ProjecPageSection type="video" title="Заголовок блока с видео">
          <VideoGallery>
            <VideoGalleryItem>

            </VideoGalleryItem>
          </VideoGallery>
        </ProjecPageSection>
        <ProjecPageSection type="photo" title="Заголовок блока с фотографиями">
          <Photos images={projectData.images}></Photos>
        </ProjecPageSection>
        <ProjecPageSection
          type="performances"
          title="Заголовок блока c тремя и более спектаклями"
        >
          <AnnouncedPlayCardList>
            {cardsNum3.map((card, index) => (
              <div key={index}>
                <AnnouncedPlayCard
                  date={projectData.cards.date}
                  time={projectData.cards.time}
                  title={projectData.cards.title}
                  playwrightArray={projectData.cards.playwrightArray}
                  directorArray={projectData.cards.directorArray}
                  buttonLinks={projectData.cards.buttonLinks}
                  coverResourceUrl={projectData.cards.coverResourceUrl}
                ></AnnouncedPlayCard>
              </div>
            ))}
          </AnnouncedPlayCardList>
        </ProjecPageSection>
        <ProjecPageSection
          type="performances"
          title="Заголовок блока с двумя спектаклями"
        >
          <AnnouncedPlayCardList>
            {cardsNum2.map((i, index) => (
              <div key={index}>
                <AnnouncedPlayCard
                  date={projectData.cards.date}
                  time={projectData.cards.time}
                  title={projectData.cards.title}
                  playwrightArray={projectData.cards.playwrightArray}
                  directorArray={projectData.cards.directorArray}
                  buttonLinks={projectData.cards.buttonLinks}
                  coverResourceUrl={projectData.cards.coverResourceUrl}
                ></AnnouncedPlayCard>
              </div>
            ))}
          </AnnouncedPlayCardList>
        </ProjecPageSection>
        <ProjecPageSection
          type="performances"
          title="Заголовок блока с одним спектаклем"
        >
          <AnnouncedPlayCardList>
            <AnnouncedPlayCard
              date={projectData.cards.date}
              time={projectData.cards.time}
              title={projectData.cards.title}
              playwrightArray={projectData.cards.playwrightArray}
              directorArray={projectData.cards.directorArray}
              buttonLinks={projectData.cards.buttonLinks}
              coverResourceUrl={projectData.cards.coverResourceUrl}
            ></AnnouncedPlayCard>
          </AnnouncedPlayCardList>
        </ProjecPageSection>
        <ProjecPageSection type="plays" title="Заголовок блока с пьесами">
          <BasicPlayCardList>
            {cardsNum2.map((i, index) => (
              <BasicPlayCard
                key={index}
                play={projectData.basicPlayCard.play}
                author={projectData.basicPlayCard.author}
                buttonVisibility={projectData.basicPlayCard.buttonVisibility}
              ></BasicPlayCard>
            ))}
          </BasicPlayCardList>
        </ProjecPageSection>
        <ProjecPageSection type="person" title="Заголовок блока с персонами">
          <PersonCardList>
            {cardsNum3.map((i, index) => (
              <PersonCard
                key={index}
                name={projectData.personCard.name}
                link={projectData.personCard.link}
                about={projectData.personCard.about}
                participant={projectData.personCard.participant}
              ></PersonCard>
            ))}
          </PersonCardList>
        </ProjecPageSection>
        <ProjecPageSection type='through-block' title='Заголовок блока с кнопкой/ссылкой' description='Видео прошедших мероприятий можно посмотреть в плейлисте на канале Любимовки в YouTube'>
        </ProjecPageSection>
        <ProjecPageSection type='cooperation'>
          <ProjectCooperation email={projectData.email}></ProjectCooperation>
        </ProjecPageSection>
      </ProjectPage>
    </AppLayout>
  );
};

export default Project;
