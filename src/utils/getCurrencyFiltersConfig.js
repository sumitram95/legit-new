import { STATUS_NAMES } from '@/constants/statuses'
import { CURRENCY_FIELD_NAMES } from '@/constants/currencies'
import { FILTER_TYPES } from '@/services/filter.service'

export const STATUS_FILTER_POSSIBLE_VALUES = [
  STATUS_NAMES.CANCELLED,
  STATUS_NAMES.RESEARCH,
  STATUS_NAMES.PROOF_OF_CONCEPT,
  STATUS_NAMES.PILOT,
  // STATUS_NAMES.DEVELOPMENT,
  STATUS_NAMES.LAUNCHED
]
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

export const getCurrencyFiltersConfig = () => {
  return [{
    name: CURRENCY_FIELD_NAMES.AIPOLICYNAME,

    label: 'AI Policy Name',
    placeholder: 'Select...',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: AIPOLICYNAME
    },
    value: null
  }, {
    name: CURRENCY_FIELD_NAMES.COUNTRY,
    label: 'Country / Region',
    placeholder: 'Select...',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: COUNTRY
    },
    value: null
  }, {
    name: CURRENCY_FIELD_NAMES.ANNOUNCEMENT_YEAR,
    label: 'Announcement year',
    type: FILTER_TYPES.YEAR_RANGE,
    value: null
  }, {
    name: CURRENCY_FIELD_NAMES.STATUS,
    label: 'Status',
    placeholder: 'Select...',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: STATUS_FILTER_POSSIBLE_VALUES
    },
    value: null
  }, {
    name: CURRENCY_FIELD_NAMES.TECHNOLOGY,
    label: 'Technology partners',
    placeholder: 'Select...',
    type: FILTER_TYPES.MULTIPLE_SELECT,
    settings: {
      possibleValues: []
    },
    value: null
  }
  ]
}
