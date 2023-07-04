/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Mobilityways API
 * OpenAPI spec version: 2.0.0
 */
import { useQuery } from '@tanstack/vue-query';
import type {
  UseQueryOptions,
  QueryFunction,
  QueryKey,
  UseQueryReturnType
} from '@tanstack/vue-query';
import type { MaybeRef } from '@tanstack/vue-query/build/lib/types';
import type {
  AbstractModuleApiResponseCumulativeMembersInCommunityRequestCumulativeMembersInCommunityResponseCumulativeMembersInCommunityResponseUkiudy,
  GetV2LiftshareDashboardStatisticsCurrentCumulativeMembersParams,
  AbstractModuleApiResponseCumulativeTripAuthenticationsRequestCumulativeTripAuthenticationsResponseCumulativeTripAuthenticationsResponseEpyni,
  GetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsParams,
  AbstractModuleApiResponseJourneysInCommunityRequestJourneysInCommunityResponseJourneysInCommunityResponseCatmysq,
  GetV2LiftshareDashboardStatisticsCurrentJourneysParams,
  AbstractModuleApiResponseLiftshareCurrentStatsSummaryRequestLiftshareCurrentStatsSummaryResponseLiftshareCurrentStatsSummaryResponseKeqvzhq,
  GetV2LiftshareDashboardStatisticsCurrentSummaryParams,
  AbstractModuleApiResponseLiftshareTeamsInCommunityRequestLiftshareTeamsInCommunityResponseLiftshareTeamsInCommunityResponseVaiyxeq,
  GetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsParams,
  AbstractModuleApiResponseMembersInCommunityRequestMembersInCommunityResponseMembersInCommunityResponseYwlaq,
  GetV2LiftshareDashboardStatisticsCurrentMembersParams,
  AbstractModuleApiResponseRequestToSharesInCommunityRequestRequestToSharesInCommunityResponseRequestToSharesInCommunityResponseQoeq,
  GetV2LiftshareDashboardStatisticsCurrentRequestToSharesParams,
  AbstractModuleApiResponseTripAuthenticationsLeagueTableRequestTripAuthenticationsLeagueTableResponseTripAuthenticationsLeagueTableResponseQkkdui,
  GetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardParams,
  AbstractModuleApiResponseMembershipStatsRequestMembershipStatsResponseMembershipStatsResponseXhety
} from '.././model';
import { customInstance } from '../../../axiosInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export const getV2LiftshareDashboardStatisticsCurrentCumulativeMembers = (
  params: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentCumulativeMembersParams>,
  signal?: AbortSignal
) => {
  return customInstance<AbstractModuleApiResponseCumulativeMembersInCommunityRequestCumulativeMembersInCommunityResponseCumulativeMembersInCommunityResponseUkiudy>(
    {
      url: `/v2/liftshare/dashboard/statistics/current/cumulative-members`,
      method: 'get',
      params,
      signal
    }
  );
};

export const getGetV2LiftshareDashboardStatisticsCurrentCumulativeMembersQueryKey = (
  params: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentCumulativeMembersParams>
) =>
  [
    'v2',
    'liftshare',
    'dashboard',
    'statistics',
    'current',
    'cumulative-members',
    ...(params ? [params] : [])
  ] as const;

export const getGetV2LiftshareDashboardStatisticsCurrentCumulativeMembersQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeMembers>>,
  TError = unknown
>(
  params: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentCumulativeMembersParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeMembers>>,
      TError,
      TData
    >;
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeMembers>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetV2LiftshareDashboardStatisticsCurrentCumulativeMembersQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeMembers>>
  > = ({ signal }) => getV2LiftshareDashboardStatisticsCurrentCumulativeMembers(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetV2LiftshareDashboardStatisticsCurrentCumulativeMembersQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeMembers>>
>;
export type GetV2LiftshareDashboardStatisticsCurrentCumulativeMembersQueryError = unknown;

export const useGetV2LiftshareDashboardStatisticsCurrentCumulativeMembers = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeMembers>>,
  TError = unknown
>(
  params: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentCumulativeMembersParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeMembers>>,
      TError,
      TData
    >;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2LiftshareDashboardStatisticsCurrentCumulativeMembersQueryOptions(
    params,
    options
  );

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

export const getV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthentications = (
  params: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsParams>,
  signal?: AbortSignal
) => {
  return customInstance<AbstractModuleApiResponseCumulativeTripAuthenticationsRequestCumulativeTripAuthenticationsResponseCumulativeTripAuthenticationsResponseEpyni>(
    {
      url: `/v2/liftshare/dashboard/statistics/current/cumulative-trip-authentications`,
      method: 'get',
      params,
      signal
    }
  );
};

export const getGetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsQueryKey = (
  params: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsParams>
) =>
  [
    'v2',
    'liftshare',
    'dashboard',
    'statistics',
    'current',
    'cumulative-trip-authentications',
    ...(params ? [params] : [])
  ] as const;

export const getGetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsQueryOptions =
  <
    TData = Awaited<
      ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthentications>
    >,
    TError = unknown
  >(
    params: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsParams>,
    options?: {
      query?: UseQueryOptions<
        Awaited<
          ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthentications>
        >,
        TError,
        TData
      >;
    }
  ): UseQueryOptions<
    Awaited<
      ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthentications>
    >,
    TError,
    TData
  > => {
    const { query: queryOptions } = options ?? {};

    const queryKey =
      getGetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsQueryKey(params);

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthentications>
      >
    > = ({ signal }) =>
      getV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthentications(params, signal);

    return { queryKey, queryFn, ...queryOptions };
  };

export type GetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsQueryResult =
  NonNullable<
    Awaited<
      ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthentications>
    >
  >;
export type GetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsQueryError =
  unknown;

export const useGetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthentications = <
  TData = Awaited<
    ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthentications>
  >,
  TError = unknown
>(
  params: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthentications>
      >,
      TError,
      TData
    >;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGetV2LiftshareDashboardStatisticsCurrentCumulativeTripAuthenticationsQueryOptions(
      params,
      options
    );

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

export const getV2LiftshareDashboardStatisticsCurrentJourneys = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentJourneysParams>,
  signal?: AbortSignal
) => {
  return customInstance<AbstractModuleApiResponseJourneysInCommunityRequestJourneysInCommunityResponseJourneysInCommunityResponseCatmysq>(
    { url: `/v2/liftshare/dashboard/statistics/current/journeys`, method: 'get', params, signal }
  );
};

export const getGetV2LiftshareDashboardStatisticsCurrentJourneysQueryKey = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentJourneysParams>
) =>
  [
    'v2',
    'liftshare',
    'dashboard',
    'statistics',
    'current',
    'journeys',
    ...(params ? [params] : [])
  ] as const;

export const getGetV2LiftshareDashboardStatisticsCurrentJourneysQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentJourneys>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentJourneysParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentJourneys>>,
      TError,
      TData
    >;
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentJourneys>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetV2LiftshareDashboardStatisticsCurrentJourneysQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentJourneys>>
  > = ({ signal }) => getV2LiftshareDashboardStatisticsCurrentJourneys(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetV2LiftshareDashboardStatisticsCurrentJourneysQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentJourneys>>
>;
export type GetV2LiftshareDashboardStatisticsCurrentJourneysQueryError = unknown;

export const useGetV2LiftshareDashboardStatisticsCurrentJourneys = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentJourneys>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentJourneysParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentJourneys>>,
      TError,
      TData
    >;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2LiftshareDashboardStatisticsCurrentJourneysQueryOptions(
    params,
    options
  );

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

export const getV2LiftshareDashboardStatisticsCurrentSummary = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentSummaryParams>,
  signal?: AbortSignal
) => {
  return customInstance<AbstractModuleApiResponseLiftshareCurrentStatsSummaryRequestLiftshareCurrentStatsSummaryResponseLiftshareCurrentStatsSummaryResponseKeqvzhq>(
    { url: `/v2/liftshare/dashboard/statistics/current/summary`, method: 'get', params, signal }
  );
};

export const getGetV2LiftshareDashboardStatisticsCurrentSummaryQueryKey = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentSummaryParams>
) =>
  [
    'v2',
    'liftshare',
    'dashboard',
    'statistics',
    'current',
    'summary',
    ...(params ? [params] : [])
  ] as const;

export const getGetV2LiftshareDashboardStatisticsCurrentSummaryQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentSummary>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentSummaryParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentSummary>>,
      TError,
      TData
    >;
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentSummary>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetV2LiftshareDashboardStatisticsCurrentSummaryQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentSummary>>
  > = ({ signal }) => getV2LiftshareDashboardStatisticsCurrentSummary(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetV2LiftshareDashboardStatisticsCurrentSummaryQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentSummary>>
>;
export type GetV2LiftshareDashboardStatisticsCurrentSummaryQueryError = unknown;

export const useGetV2LiftshareDashboardStatisticsCurrentSummary = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentSummary>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentSummaryParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentSummary>>,
      TError,
      TData
    >;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2LiftshareDashboardStatisticsCurrentSummaryQueryOptions(
    params,
    options
  );

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

export const getV2LiftshareDashboardStatisticsCurrentLiftshareTeams = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsParams>,
  signal?: AbortSignal
) => {
  return customInstance<AbstractModuleApiResponseLiftshareTeamsInCommunityRequestLiftshareTeamsInCommunityResponseLiftshareTeamsInCommunityResponseVaiyxeq>(
    {
      url: `/v2/liftshare/dashboard/statistics/current/liftshare-teams`,
      method: 'get',
      params,
      signal
    }
  );
};

export const getGetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsQueryKey = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsParams>
) =>
  [
    'v2',
    'liftshare',
    'dashboard',
    'statistics',
    'current',
    'liftshare-teams',
    ...(params ? [params] : [])
  ] as const;

export const getGetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentLiftshareTeams>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentLiftshareTeams>>,
      TError,
      TData
    >;
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentLiftshareTeams>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentLiftshareTeams>>
  > = ({ signal }) => getV2LiftshareDashboardStatisticsCurrentLiftshareTeams(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentLiftshareTeams>>
>;
export type GetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsQueryError = unknown;

export const useGetV2LiftshareDashboardStatisticsCurrentLiftshareTeams = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentLiftshareTeams>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentLiftshareTeams>>,
      TError,
      TData
    >;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2LiftshareDashboardStatisticsCurrentLiftshareTeamsQueryOptions(
    params,
    options
  );

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

export const getV2LiftshareDashboardStatisticsCurrentMembers = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentMembersParams>,
  signal?: AbortSignal
) => {
  return customInstance<AbstractModuleApiResponseMembersInCommunityRequestMembersInCommunityResponseMembersInCommunityResponseYwlaq>(
    { url: `/v2/liftshare/dashboard/statistics/current/members`, method: 'get', params, signal }
  );
};

export const getGetV2LiftshareDashboardStatisticsCurrentMembersQueryKey = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentMembersParams>
) =>
  [
    'v2',
    'liftshare',
    'dashboard',
    'statistics',
    'current',
    'members',
    ...(params ? [params] : [])
  ] as const;

export const getGetV2LiftshareDashboardStatisticsCurrentMembersQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentMembers>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentMembersParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentMembers>>,
      TError,
      TData
    >;
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentMembers>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetV2LiftshareDashboardStatisticsCurrentMembersQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentMembers>>
  > = ({ signal }) => getV2LiftshareDashboardStatisticsCurrentMembers(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetV2LiftshareDashboardStatisticsCurrentMembersQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentMembers>>
>;
export type GetV2LiftshareDashboardStatisticsCurrentMembersQueryError = unknown;

export const useGetV2LiftshareDashboardStatisticsCurrentMembers = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentMembers>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentMembersParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentMembers>>,
      TError,
      TData
    >;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2LiftshareDashboardStatisticsCurrentMembersQueryOptions(
    params,
    options
  );

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

export const getV2LiftshareDashboardStatisticsCurrentRequestToShares = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentRequestToSharesParams>,
  signal?: AbortSignal
) => {
  return customInstance<AbstractModuleApiResponseRequestToSharesInCommunityRequestRequestToSharesInCommunityResponseRequestToSharesInCommunityResponseQoeq>(
    {
      url: `/v2/liftshare/dashboard/statistics/current/request-to-shares`,
      method: 'get',
      params,
      signal
    }
  );
};

export const getGetV2LiftshareDashboardStatisticsCurrentRequestToSharesQueryKey = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentRequestToSharesParams>
) =>
  [
    'v2',
    'liftshare',
    'dashboard',
    'statistics',
    'current',
    'request-to-shares',
    ...(params ? [params] : [])
  ] as const;

export const getGetV2LiftshareDashboardStatisticsCurrentRequestToSharesQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentRequestToShares>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentRequestToSharesParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentRequestToShares>>,
      TError,
      TData
    >;
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentRequestToShares>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetV2LiftshareDashboardStatisticsCurrentRequestToSharesQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentRequestToShares>>
  > = ({ signal }) => getV2LiftshareDashboardStatisticsCurrentRequestToShares(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetV2LiftshareDashboardStatisticsCurrentRequestToSharesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentRequestToShares>>
>;
export type GetV2LiftshareDashboardStatisticsCurrentRequestToSharesQueryError = unknown;

export const useGetV2LiftshareDashboardStatisticsCurrentRequestToShares = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentRequestToShares>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentRequestToSharesParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentRequestToShares>>,
      TError,
      TData
    >;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2LiftshareDashboardStatisticsCurrentRequestToSharesQueryOptions(
    params,
    options
  );

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

export const getV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboard = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardParams>,
  signal?: AbortSignal
) => {
  return customInstance<AbstractModuleApiResponseTripAuthenticationsLeagueTableRequestTripAuthenticationsLeagueTableResponseTripAuthenticationsLeagueTableResponseQkkdui>(
    {
      url: `/v2/liftshare/dashboard/statistics/current/trip-authentications-leaderboard`,
      method: 'get',
      params,
      signal
    }
  );
};

export const getGetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardQueryKey = (
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardParams>
) =>
  [
    'v2',
    'liftshare',
    'dashboard',
    'statistics',
    'current',
    'trip-authentications-leaderboard',
    ...(params ? [params] : [])
  ] as const;

export const getGetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardQueryOptions =
  <
    TData = Awaited<
      ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboard>
    >,
    TError = unknown
  >(
    params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardParams>,
    options?: {
      query?: UseQueryOptions<
        Awaited<
          ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboard>
        >,
        TError,
        TData
      >;
    }
  ): UseQueryOptions<
    Awaited<
      ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboard>
    >,
    TError,
    TData
  > => {
    const { query: queryOptions } = options ?? {};

    const queryKey =
      getGetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardQueryKey(params);

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboard>
      >
    > = ({ signal }) =>
      getV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboard(params, signal);

    return { queryKey, queryFn, ...queryOptions };
  };

export type GetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardQueryResult =
  NonNullable<
    Awaited<
      ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboard>
    >
  >;
export type GetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardQueryError =
  unknown;

export const useGetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboard = <
  TData = Awaited<
    ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboard>
  >,
  TError = unknown
>(
  params?: MaybeRef<GetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<typeof getV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboard>
      >,
      TError,
      TData
    >;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGetV2LiftshareDashboardStatisticsCurrentTripAuthenticationsLeaderboardQueryOptions(
      params,
      options
    );

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

export const getV2LiftshareDashboardStatisticsMembership = (signal?: AbortSignal) => {
  return customInstance<AbstractModuleApiResponseMembershipStatsRequestMembershipStatsResponseMembershipStatsResponseXhety>(
    { url: `/v2/liftshare/dashboard/statistics/membership`, method: 'get', signal }
  );
};

export const getGetV2LiftshareDashboardStatisticsMembershipQueryKey = () =>
  ['v2', 'liftshare', 'dashboard', 'statistics', 'membership'] as const;

export const getGetV2LiftshareDashboardStatisticsMembershipQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsMembership>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsMembership>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsMembership>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetV2LiftshareDashboardStatisticsMembershipQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsMembership>>
  > = ({ signal }) => getV2LiftshareDashboardStatisticsMembership(signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetV2LiftshareDashboardStatisticsMembershipQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsMembership>>
>;
export type GetV2LiftshareDashboardStatisticsMembershipQueryError = unknown;

export const useGetV2LiftshareDashboardStatisticsMembership = <
  TData = Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsMembership>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getV2LiftshareDashboardStatisticsMembership>>,
    TError,
    TData
  >;
}): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2LiftshareDashboardStatisticsMembershipQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};
