<template>
  <app-table :columns="displayColumns"
             :rows="rows"
             :currentPage="currentPage"
             :totalRows="totalRows"
             :perPage="perPage"
             :sort="sort"
             :isLoading="isLoading"
             :loadHint="loadHint"
             @pageChanged="onChangePage"
             @sortChanged="onChangeSort"
             @cellChanged="onChangeCell">
    <template #empty>
      <slot name="empty"></slot>
    </template>
  </app-table>
</template>

<script>
import { TableMapper } from './tableMapper'
import { PAGE_ROW_COUNT } from '@/components/currencies/list/constants'

export default {
  props: {
    // currencies: Array,
    // columns: Array,
    sort: null,
    currentPage: Number,
    watchlist: Array,
    isLoading: Boolean,
    isOnlyWatchlistShown: Boolean,
    loadHint: String
  },
  data () {
    return {
      perPage: PAGE_ROW_COUNT,
      currencies: [
        { digitalCurrency: 'Bitcoin', country: 'Nepal', governingBody: 'governing 1', announcementYear: 2020, status: 'Active', updateRate: 5, interoperability: 'High' },
        { digitalCurrency: 'Ethereum', country: 'USA', governingBody: 'governing 2', announcementYear: 2015, status: 'Inactive', updateRate: 3, interoperability: 'Medium' },
        { digitalCurrency: 'Ripple', country: 'India', governingBody: 'governing 3', announcementYear: 2012, status: 'Active', updateRate: 4, interoperability: 'Low' }
      ],
      columns: [
        { name: 'aiPolicyName', title: 'AI Policy Name', visible: true, hideable: true },
        { name: 'country', title: 'Country / Region', visible: true },
        { name: 'governingBody', title: 'Governing Body', visible: true },
        { name: 'announcementYear', title: 'Announcement Year', visible: true, hideable: true },
        { name: 'status', title: 'Status', visible: true, hideable: true },
        { name: 'updateRate', title: 'Update Rate', visible: true, hideable: true },
        { name: 'interoperability', title: 'Interoperability', visible: true, hideable: true }
      ]
    }
  },
  computed: {
    watchlistCurrencies () {
      return this.currencies.filter((item) => {
        return this.watchlist.includes(item.tag)
      })
    },
    displayColumns () {
      const tableMapper = new TableMapper()
      return tableMapper.mapColumns(this.columns)
    },
    rows () {
      const tableMapper = new TableMapper()

      return tableMapper.mapTablePage({
        columns: this.displayColumns,
        currencies: this.isOnlyWatchlistShown ? this.watchlistCurrencies : this.currencies,
        watchlist: this.watchlist,
        sort: this.sort,
        currentPage: this.currentPage,
        perPage: this.perPage
      })
    },
    totalRows () {
      return this.isOnlyWatchlistShown ? this.watchlistCurrencies.length : this.currencies.length
    }
  },
  methods: {
    onChangePage (event) {
      this.$emit('changePage', { currentPage: event })
    },
    onChangeSort (event) {
      this.$emit('changeSort', { sort: event })
    },
    onChangeCell ({ row, payload }) {
      const currency = row.data
      const hasAtWatchlist = payload.hasAtWatchlist

      hasAtWatchlist ? this.addCurrencyToWatchlist({ currency }) : this.removeCurrencyFromWatchlist({ currency })
    },
    addCurrencyToWatchlist (event) {
      this.$emit('addCurrencyToWatchlist', event)
    },
    removeCurrencyFromWatchlist (event) {
      this.$emit('removeCurrencyFromWatchlist', event)
    }
  }
}
</script>
