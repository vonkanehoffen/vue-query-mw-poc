/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Mobilityways API
 * OpenAPI spec version: 2.0.0
 */
import type { PendingLiftshareAccountBatchStatusVtwhkvq } from './pendingLiftshareAccountBatchStatusVtwhkvq';

export interface PendingLiftshareAccountBatchListBatchResultsWithStatusDfzney {
  batchId?: string;
  recipients?: number;
  accountsCreated?: number;
  invites?: number;
  activationEmails?: number;
  totalJourneysAdded?: number;
  confirmedShares?: number;
  accountsRemoved?: number;
  journeysRegistered?: number;
  activations?: number;
  communityId?: string | null;
  name?: string | null;
  status?: PendingLiftshareAccountBatchStatusVtwhkvq;
  dateCreatedUtc?: string;
  createdById?: string | null;
  createdByName?: string | null;
  dateLastEditedUtc?: string;
  editedById?: string | null;
  editedByName?: string | null;
}
