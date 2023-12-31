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
import type { AbstractModuleApiResponseMyLeaderboardCommunitiesRequestMyLeaderboardCommunitiesResponseMyLeaderboardCommunitiesResponseHebra } from '.././model';
import { customInstance } from '../../../axiosInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export const getV2LiftshareGamificationLeaderboardCommunities = (signal?: AbortSignal) => {
  return customInstance<AbstractModuleApiResponseMyLeaderboardCommunitiesRequestMyLeaderboardCommunitiesResponseMyLeaderboardCommunitiesResponseHebra>(
    { url: `/v2/liftshare/gamification/leaderboard-communities`, method: 'get', signal }
  );
};

export const getGetV2LiftshareGamificationLeaderboardCommunitiesQueryKey = () =>
  ['v2', 'liftshare', 'gamification', 'leaderboard-communities'] as const;

export const getGetV2LiftshareGamificationLeaderboardCommunitiesQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2LiftshareGamificationLeaderboardCommunities>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getV2LiftshareGamificationLeaderboardCommunities>>,
    TError,
    TData
  >;
}): UseQueryOptions<
  Awaited<ReturnType<typeof getV2LiftshareGamificationLeaderboardCommunities>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetV2LiftshareGamificationLeaderboardCommunitiesQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getV2LiftshareGamificationLeaderboardCommunities>>
  > = ({ signal }) => getV2LiftshareGamificationLeaderboardCommunities(signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetV2LiftshareGamificationLeaderboardCommunitiesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2LiftshareGamificationLeaderboardCommunities>>
>;
export type GetV2LiftshareGamificationLeaderboardCommunitiesQueryError = unknown;

export const useGetV2LiftshareGamificationLeaderboardCommunities = <
  TData = Awaited<ReturnType<typeof getV2LiftshareGamificationLeaderboardCommunities>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getV2LiftshareGamificationLeaderboardCommunities>>,
    TError,
    TData
  >;
}): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2LiftshareGamificationLeaderboardCommunitiesQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};
