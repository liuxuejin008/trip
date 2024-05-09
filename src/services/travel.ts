import { axios } from '.'
import type { Page, PageResponse } from './'

export type TravelLineListItem = {
  id: string
  title: string
  location: string
}

export const enum TravelLineStatus {
  SEARCH = 0,
  SAVED = 1
}
export function getMyTravelLinePage(params: Page<{
  status: TravelLineStatus
}>) {
  return axios.get<PageResponse<TravelLineListItem>>('/v1/traline/page', {params})
}

export function getSearchList() {
  return axios.get('/ai/result/searchList')
}

export type TravelResult = {
  tralineId: string;
  /**
   * 作者名称
   */
  author_name: string;
  /**
   * 天数
   */
  dayNumber: number;
  /**
   * 描述
   */
  describe: string;
  /**
   * 结束时间
   */
  endTime: string;
  /**
   * 位置
   */
  location: string;
  /**
   * 开始时间
   */
  startTime: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 具体行程
   */
  tralineInfoList: TravelLineLineList[];
}

export type TravelLineLineList = {
  /**
   * 内容
   */
  content: string;
  /**
   * 副标题
   */
  subTitle: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 具体行程id
   */
  tralineId: string;
  tralineInfoId?: string;
  /**
   * 旅行时间
   */
  tralineTime: string;
}

export function getTravelLineInfoById(id: string) {
  return axios.get<TravelResult>(`/v1/traline/infoList/${id}`)
}

export type GenerateTravelLineParams = {
  location: string
  startTime: string
  endTime: string
}
export function generateTravelLine(data: GenerateTravelLineParams) {
  return axios.post<TravelResult>('/v1/traline/generation', data)
}

export function saveTravelLine(data: TravelResult) {
  return axios.post<{id: string}>('/v1/traline/save', data)
}

export function refreshTravelLine(id: string) {
  return axios.get<TravelResult>(`/v1/traline/regeneration/${id}`)
}

export function regenerationTravelLineInfo(id: string) {
  return axios.get<TravelLineLineList>(`/v1/traline/info/regeneration/${id}`)
}

export type TravelLineByTimeParams = {
  location: string
  tralineTime: string
}

export function addTravelLineByTime(params: TravelLineByTimeParams) {
  return axios.get('/v1/traline/info/addByTime', {params})
}
