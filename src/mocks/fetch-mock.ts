import fetchMock from 'fetch-mock';

import { addOriginToApiPath } from 'shared/helpers/url';

import projects from './data/projects';
import partners from './data/partners';
import performance from './data/performance';
import contacts from 'mocks/data/contacts';
import form from 'mocks/data/form';
import project from './data/project';
import { PaginatedProjectListList } from 'api-typings';

fetchMock.config.fallbackToNetwork = true;

const mockedFetch = fetchMock.sandbox();

mockedFetch
  .get({ matcher: new RegExp(addOriginToApiPath('/projects/\\d+')) }, project)
  .get(addOriginToApiPath('/projects/'), (<PaginatedProjectListList>{
    results: projects,
  }))
  .get({ matcher: addOriginToApiPath('/info/partners/'), query: { type: 'general' } }, partners.filter(({ type }) => type === 'general'))
  .get({ matcher: new RegExp(addOriginToApiPath('/library/performances/\\d+')) }, performance)
  .get(addOriginToApiPath('/contacts'), contacts)
  .get(addOriginToApiPath('/form'), form);

export default mockedFetch;
