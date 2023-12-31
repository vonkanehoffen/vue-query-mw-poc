/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Mobilityways API
 * OpenAPI spec version: 2.0.0
 */
import type { AddOrEditJourneyRequestLocationDtoPtcly } from './addOrEditJourneyRequestLocationDtoPtcly';
import type { JourneyTypeIdmei } from './journeyTypeIdmei';
import type { JourneyFrequencyVvhvfbq } from './journeyFrequencyVvhvfbq';
import type { JourneyFlexibilityLteey } from './journeyFlexibilityLteey';
import type { LuggageSpacePini } from './luggageSpacePini';

export interface JourneyUpsertRequestXbmluey {
  subscriberId?: number;
  id?: string | null;
  origin?: AddOrEditJourneyRequestLocationDtoPtcly;
  destination?: AddOrEditJourneyRequestLocationDtoPtcly;
  route?: string | null;
  type?: JourneyTypeIdmei;
  frequency?: JourneyFrequencyVvhvfbq;
  mon?: boolean;
  tue?: boolean;
  wed?: boolean;
  thu?: boolean;
  fri?: boolean;
  sat?: boolean;
  sun?: boolean;
  flexibility?: JourneyFlexibilityLteey;
  outboundDate?: string;
  returnDate?: string | null;
  price?: number;
  currency?: string | null;
  luggageSpace?: LuggageSpacePini;
  happyWithEating?: boolean;
  happyWithPets?: boolean;
  happyWithSmoking?: boolean;
  happyWithMusic?: boolean;
  private?: boolean;
  comments?: string | null;
  distanceInMeters?: number;
  durationInSeconds?: number;
}
