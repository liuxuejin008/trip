import { axios } from '.'
import type { Page, PageResponse } from './'

const defaultPageParams: Page = {
  page: 1,
  pageSize: 10
}

export type TravelLineListItem = {
  id: string
  title: string
  location: string
}

export function getMyTravelLinePage (params: Page = defaultPageParams) {
  return axios.get<PageResponse<TravelLineListItem>>('/v1/traline/page', { params })
}

export function getSearchList () {
  return axios.get('/ai/result/searchList')
}