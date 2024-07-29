import { FILTER_TYPES } from '@/services/filter.service'
import { TAG_FIELD_NAMES } from '@/constants/tags'

export const AIPOLICYNAME = [
  'AI Policy Name 1',
  'AI Policy Name 2',
  'AI Policy Name 3',
  'AI Policy Name 4'
]
export const COUNTRY = [
  'Nepal',
  'India',
  'America',
  'Bhutan'
]

export const getNewsFiltersConfig = () => {
  return [{
    name: TAG_FIELD_NAMES.CURRENCY,
    label: 'AI Policy Name',
    placeholder: 'Select...',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: AIPOLICYNAME
    },
    value: null
  }, {
    name: TAG_FIELD_NAMES.COUNTRY,
    label: 'Country / Region',
    placeholder: 'Select...',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: COUNTRY
    },
    value: null
  }]
}
