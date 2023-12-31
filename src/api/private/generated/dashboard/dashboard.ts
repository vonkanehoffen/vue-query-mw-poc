/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Liftshare Private API
 * OpenAPI spec version: 1.0.0
 */
import { useQuery } from '@tanstack/vue-query';
import type {
  UseQueryOptions,
  QueryFunction,
  QueryKey,
  UseQueryReturnType
} from '@tanstack/vue-query';
import type { MobileAppDashboardResponseJshi } from '.././model';
import { customInstance } from '../../../axiosInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary Get information about current user and savings
 */
export const getDashboard = (signal?: AbortSignal) => {
  return customInstance<MobileAppDashboardResponseJshi>({
    url: `/dashboard`,
    method: 'get',
    signal
  });
};

export const getGetDashboardQueryKey = () => ['dashboard'] as const;

export const getGetDashboardQueryOptions = <
  TData = Awaited<ReturnType<typeof getDashboard>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboard>>, TError, TData>;
}): UseQueryOptions<Awaited<ReturnType<typeof getDashboard>>, TError, TData> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetDashboardQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getDashboard>>> = ({ signal }) =>
    getDashboard(signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetDashboardQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboard>>>;
export type GetDashboardQueryError = unknown;

/**
 * @summary Get information about current user and savings
 */
export const useGetDashboard = <
  TData = Awaited<ReturnType<typeof getDashboard>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboard>>, TError, TData>;
}): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetDashboardQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};
