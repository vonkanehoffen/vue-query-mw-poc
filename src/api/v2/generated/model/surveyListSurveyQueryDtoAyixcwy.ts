/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Mobilityways API
 * OpenAPI spec version: 2.0.0
 */
import type { SurveyStatusFguygi } from './surveyStatusFguygi';
import type { SurveyDeliveryMethodZbwy } from './surveyDeliveryMethodZbwy';

export interface SurveyListSurveyQueryDtoAyixcwy {
  publicId?: string;
  name?: string | null;
  surveyType?: string | null;
  surveyed?: number;
  responses?: number;
  readonly dateCreated?: string;
  readonly dateLastEdited?: string | null;
  readonly datePublished?: string | null;
  published?: boolean;
  status?: SurveyStatusFguygi;
  deliveryMethod?: SurveyDeliveryMethodZbwy;
  publicAnalytics?: boolean;
  publicSurveyAnalyticsId?: string;
}
