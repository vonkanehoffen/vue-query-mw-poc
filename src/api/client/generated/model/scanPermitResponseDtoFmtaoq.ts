/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Liftshare Client API
 * Private API for Liftshare client and partner integrations.
 * OpenAPI spec version: 1.0.0
 */
import type { AuthenticatedParkingPermitStatusTuskzy } from './authenticatedParkingPermitStatusTuskzy';
import type { PermitScanTeamDtoXetha } from './permitScanTeamDtoXetha';
import type { PermitScanTeamMemberDtoSjluy } from './permitScanTeamMemberDtoSjluy';
import type { PermitScanActivityDtoRyjcoi } from './permitScanActivityDtoRyjcoi';

export interface ScanPermitResponseDtoFmtaoq {
  status?: AuthenticatedParkingPermitStatusTuskzy;
  statusReason?: string | null;
  statusFurtherDetails?: string | null;
  duplicateScanWarning?: string | null;
  isFirstFailedStatus?: boolean;
  team?: PermitScanTeamDtoXetha;
  teamMembers?: PermitScanTeamMemberDtoSjluy[] | null;
  activity?: PermitScanActivityDtoRyjcoi[] | null;
}
