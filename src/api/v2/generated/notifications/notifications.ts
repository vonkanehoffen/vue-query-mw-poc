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
import type { AbstractModuleApiResponseNotificationListRequestNotificationListResponseNotificationListResponseTuiexq } from '.././model';
import { customInstance } from '../../../axiosInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export const getV2LiftshareNotifications = (signal?: AbortSignal) => {
  return customInstance<AbstractModuleApiResponseNotificationListRequestNotificationListResponseNotificationListResponseTuiexq>(
    { url: `/v2/liftshare/notifications`, method: 'get', signal }
  );
};

export const getGetV2LiftshareNotificationsQueryKey = () =>
  ['v2', 'liftshare', 'notifications'] as const;

export const getGetV2LiftshareNotificationsQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2LiftshareNotifications>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getV2LiftshareNotifications>>, TError, TData>;
}): UseQueryOptions<Awaited<ReturnType<typeof getV2LiftshareNotifications>>, TError, TData> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetV2LiftshareNotificationsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getV2LiftshareNotifications>>> = ({
    signal
  }) => getV2LiftshareNotifications(signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetV2LiftshareNotificationsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2LiftshareNotifications>>
>;
export type GetV2LiftshareNotificationsQueryError = unknown;

export const useGetV2LiftshareNotifications = <
  TData = Awaited<ReturnType<typeof getV2LiftshareNotifications>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getV2LiftshareNotifications>>, TError, TData>;
}): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2LiftshareNotificationsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};
