/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Mobilityways API
 * OpenAPI spec version: 2.0.0
 */
import type { EmailCampaignMetricsByDayDtoQsqbuq } from './emailCampaignMetricsByDayDtoQsqbuq'
import type { EmailCampaignMetricsDtoJyjyla } from './emailCampaignMetricsDtoJyjyla'

export interface TravelPlanEmailCampaignMetricsResponseJywnzi {
  dateFrom?: string
  dateTo?: string
  chartData?: EmailCampaignMetricsByDayDtoQsqbuq[] | null
  totals?: EmailCampaignMetricsDtoJyjyla
  totalPlansGenerated?: number
}
