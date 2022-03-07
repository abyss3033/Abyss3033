import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Abyss3033',
  description:
    'The most popular AMM on BSC by user count! Earn LUCKY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Abyss3033), NFTs, and more, on a platform you can trust.',
  image: 'https://Abyss3033.swap/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Abyss3033')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Abyss3033')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Abyss3033')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Abyss3033')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Abyss3033')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Abyss3033')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Abyss3033')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Abyss3033')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Abyss3033')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Abyss3033')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Abyss3033')}`,
      }
    default:
      return null
  }
}
