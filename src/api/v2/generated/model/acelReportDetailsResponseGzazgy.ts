/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Mobilityways API
 * OpenAPI spec version: 2.0.0
 */
import type { AcelReportTypeIegky } from './acelReportTypeIegky';
import type { AcelBreakdownInputTypeCgsomi } from './acelBreakdownInputTypeCgsomi';

export interface AcelReportDetailsResponseGzazgy {
  companyShuttleBus?: number;
  electricCompanyShuttleBus?: number;
  electricMotorcycle?: number;
  vanPool?: number;
  electricVanPool?: number;
  busOrCoach?: number;
  carshare?: number;
  cycle?: number;
  drive?: number;
  electricBusOrCoach?: number;
  electricCarshare?: number;
  electricDrive?: number;
  electricScooter?: number;
  electricTaxi?: number;
  fly?: number;
  lightRail?: number;
  motorcycle?: number;
  other?: number;
  parkAndRide?: number;
  taxi?: number;
  train?: number;
  walk?: number;
  workFromHome?: number;
  readonly companyShuttleBusPercent?: number;
  readonly electricCompanyShuttleBusPercent?: number;
  readonly electricMotorcyclePercent?: number;
  readonly vanPoolPercent?: number;
  readonly electricVanPoolPercent?: number;
  readonly busOrCoachPercent?: number;
  readonly carsharePercent?: number;
  readonly cyclePercent?: number;
  readonly drivePercent?: number;
  readonly electricBusOrCoachPercent?: number;
  readonly electricCarsharePercent?: number;
  readonly electricDrivePercent?: number;
  readonly electricScooterPercent?: number;
  readonly electricTaxiPercent?: number;
  readonly flyPercent?: number;
  readonly lightRailPercent?: number;
  readonly motorcyclePercent?: number;
  readonly otherPercent?: number;
  readonly parkAndRidePercent?: number;
  readonly taxiPercent?: number;
  readonly trainPercent?: number;
  readonly walkPercent?: number;
  readonly workFromHomePercent?: number;
  readonly total?: number;
  readonly zeroImpact?: number;
  readonly zeroImpactPercent?: number;
  readonly lowImpact?: number;
  readonly lowImpactPercent?: number;
  readonly highImpact?: number;
  readonly highImpactPercent?: number;
  name?: string | null;
  reportVersion?: number;
  numberOfOutliersRemoved?: number;
  description?: string | null;
  assumptionDataLastUpdatedUtc?: string;
  dateCreatedUtc?: string;
  surveyDateUtc?: string;
  simulation?: boolean;
  certified?: boolean;
  statisticallySignificant?: boolean;
  isPrivate?: boolean;
  employees?: number | null;
  audience?: number;
  responses?: number;
  carParkingSpacesNeeded?: number;
  cycleParkingSpacesNeeded?: number;
  acelScore?: number;
  acelTargetScore?: number;
  acelTargetDate?: string;
  netZeroTargetYear?: number | null;
  reportType?: AcelReportTypeIegky;
  acelBaseDataId?: number;
  publicSurveyId?: string | null;
  reportNotes?: string | null;
  publicCommunityId?: string | null;
  location?: string | null;
  acelBreakdownInputType?: AcelBreakdownInputTypeCgsomi;
  companyShuttleBusCO2E?: number;
  electricCompanyShuttleBusCO2E?: number;
  electricMotorcycleCO2E?: number;
  vanPoolCO2E?: number;
  electricVanPoolCO2E?: number;
  busOrCoachCO2E?: number;
  carshareCO2E?: number;
  cycleCO2E?: number;
  driveCO2E?: number;
  electricBusOrCoachCO2E?: number;
  electricCarshareCO2E?: number;
  electricDriveCO2E?: number;
  electricScooterCO2E?: number;
  electricTaxiCO2E?: number;
  flyCO2E?: number;
  lightRailCO2E?: number;
  motorcycleCO2E?: number;
  otherCO2E?: number;
  parkAndRideCO2E?: number;
  taxiCO2E?: number;
  trainCO2E?: number;
  walkCO2E?: number;
  workFromHomeCO2E?: number;
}
