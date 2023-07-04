/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Mobilityways API
 * OpenAPI spec version: 2.0.0
 */
import { useQuery, useMutation } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  QueryKey,
  UseQueryReturnType
} from '@tanstack/vue-query'
import { unref } from 'vue'
import type { MaybeRef } from '@tanstack/vue-query/build/lib/types'
import type {
  AbstractModuleApiResponseHighFreqDataImportBatchDeleteRequestHighFreqDataImportBatchDeleteResponseHighFreqDataImportBatchDeleteResponseVsmgma,
  HighFreqDataImportBatchDeleteRequestHisiq,
  AbstractModuleApiResponseHighFreqDataImportCreateRequestHighFreqDataImportCreateResponseHighFreqDataImportCreateResponseSyoijzq,
  AbstractModuleApiResponseHighFreqDataImportsRequestHighFreqDataImportsResponseHighFreqDataImportsResponseGfwfcpa,
  AbstractModuleApiResponseHighFreqDataImportDeleteRequestHighFreqDataImportDeleteResponseHighFreqDataImportDeleteResponseSxfwmgq,
  AbstractModuleApiResponseHighFreqDataSourcesRequestHighFreqDataSourcesResponseHighFreqDataSourcesResponseGjwy,
  AbstractModuleApiResponseHighFreqEmissionsRequestHighFreqEmissionsResponseHighFreqEmissionsResponseHgoueq,
  HighFreqEmissionsRequestGkimcty,
  AbstractModuleApiResponseLowFreqDashboardRequestLowFreqDashboardResponseLowFreqDashboardResponseLulgsfi,
  GetV2EmissionsLowFrequencyDashboardParams,
  AbstractModuleApiResponseLowFreqEmissionsRequestLowFreqEmissionsResponseLowFreqEmissionsResponseTkjglby,
  LowFreqEmissionsRequestMysha
} from '.././model'
import { customInstance } from '../../../axiosInstance'

type AwaitedInput<T> = PromiseLike<T> | T

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never

export const postV2EmissionsHighFrequencyImportsDelete = (
  highFreqDataImportBatchDeleteRequestHisiq: MaybeRef<HighFreqDataImportBatchDeleteRequestHisiq>
) => {
  return customInstance<AbstractModuleApiResponseHighFreqDataImportBatchDeleteRequestHighFreqDataImportBatchDeleteResponseHighFreqDataImportBatchDeleteResponseVsmgma>(
    {
      url: `/v2/emissions/high-frequency/imports/delete`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: highFreqDataImportBatchDeleteRequestHisiq
    }
  )
}

export const getPostV2EmissionsHighFrequencyImportsDeleteMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2EmissionsHighFrequencyImportsDelete>>,
    TError,
    { data: HighFreqDataImportBatchDeleteRequestHisiq },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2EmissionsHighFrequencyImportsDelete>>,
  TError,
  { data: HighFreqDataImportBatchDeleteRequestHisiq },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2EmissionsHighFrequencyImportsDelete>>,
    { data: HighFreqDataImportBatchDeleteRequestHisiq }
  > = (props) => {
    const { data } = props ?? {}

    return postV2EmissionsHighFrequencyImportsDelete(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2EmissionsHighFrequencyImportsDeleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2EmissionsHighFrequencyImportsDelete>>
>
export type PostV2EmissionsHighFrequencyImportsDeleteMutationBody =
  HighFreqDataImportBatchDeleteRequestHisiq
export type PostV2EmissionsHighFrequencyImportsDeleteMutationError = unknown

export const usePostV2EmissionsHighFrequencyImportsDelete = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2EmissionsHighFrequencyImportsDelete>>,
    TError,
    { data: HighFreqDataImportBatchDeleteRequestHisiq },
    TContext
  >
}) => {
  const mutationOptions = getPostV2EmissionsHighFrequencyImportsDeleteMutationOptions(options)

  return useMutation(mutationOptions)
}
export const postV2EmissionsHighFrequencyImports = () => {
  return customInstance<AbstractModuleApiResponseHighFreqDataImportCreateRequestHighFreqDataImportCreateResponseHighFreqDataImportCreateResponseSyoijzq>(
    { url: `/v2/emissions/high-frequency/imports`, method: 'post' }
  )
}

export const getPostV2EmissionsHighFrequencyImportsMutationOptions = <
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2EmissionsHighFrequencyImports>>,
    TError,
    TVariables,
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2EmissionsHighFrequencyImports>>,
  TError,
  TVariables,
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2EmissionsHighFrequencyImports>>,
    TVariables
  > = () => {
    return postV2EmissionsHighFrequencyImports()
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2EmissionsHighFrequencyImportsMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2EmissionsHighFrequencyImports>>
>

export type PostV2EmissionsHighFrequencyImportsMutationError = unknown

export const usePostV2EmissionsHighFrequencyImports = <
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2EmissionsHighFrequencyImports>>,
    TError,
    TVariables,
    TContext
  >
}) => {
  const mutationOptions = getPostV2EmissionsHighFrequencyImportsMutationOptions(options)

  return useMutation(mutationOptions)
}
export const getV2EmissionsHighFrequencyImports = (signal?: AbortSignal) => {
  return customInstance<AbstractModuleApiResponseHighFreqDataImportsRequestHighFreqDataImportsResponseHighFreqDataImportsResponseGfwfcpa>(
    { url: `/v2/emissions/high-frequency/imports`, method: 'get', signal }
  )
}

export const getGetV2EmissionsHighFrequencyImportsQueryKey = () =>
  ['v2', 'emissions', 'high-frequency', 'imports'] as const

export const getGetV2EmissionsHighFrequencyImportsQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2EmissionsHighFrequencyImports>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getV2EmissionsHighFrequencyImports>>,
    TError,
    TData
  >
}): UseQueryOptions<
  Awaited<ReturnType<typeof getV2EmissionsHighFrequencyImports>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetV2EmissionsHighFrequencyImportsQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getV2EmissionsHighFrequencyImports>>> = ({
    signal
  }) => getV2EmissionsHighFrequencyImports(signal)

  return { queryKey, queryFn, ...queryOptions }
}

export type GetV2EmissionsHighFrequencyImportsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2EmissionsHighFrequencyImports>>
>
export type GetV2EmissionsHighFrequencyImportsQueryError = unknown

export const useGetV2EmissionsHighFrequencyImports = <
  TData = Awaited<ReturnType<typeof getV2EmissionsHighFrequencyImports>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getV2EmissionsHighFrequencyImports>>,
    TError,
    TData
  >
}): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2EmissionsHighFrequencyImportsQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey as QueryKey

  return query
}

export const deleteV2EmissionsHighFrequencyImportsImportId = (importId: MaybeRef<string>) => {
  return customInstance<AbstractModuleApiResponseHighFreqDataImportDeleteRequestHighFreqDataImportDeleteResponseHighFreqDataImportDeleteResponseSxfwmgq>(
    { url: `/v2/emissions/high-frequency/imports/${unref(importId)}`, method: 'delete' }
  )
}

export const getDeleteV2EmissionsHighFrequencyImportsImportIdMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteV2EmissionsHighFrequencyImportsImportId>>,
    TError,
    { importId: string },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteV2EmissionsHighFrequencyImportsImportId>>,
  TError,
  { importId: string },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteV2EmissionsHighFrequencyImportsImportId>>,
    { importId: string }
  > = (props) => {
    const { importId } = props ?? {}

    return deleteV2EmissionsHighFrequencyImportsImportId(importId)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteV2EmissionsHighFrequencyImportsImportIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteV2EmissionsHighFrequencyImportsImportId>>
>

export type DeleteV2EmissionsHighFrequencyImportsImportIdMutationError = unknown

export const useDeleteV2EmissionsHighFrequencyImportsImportId = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteV2EmissionsHighFrequencyImportsImportId>>,
    TError,
    { importId: string },
    TContext
  >
}) => {
  const mutationOptions = getDeleteV2EmissionsHighFrequencyImportsImportIdMutationOptions(options)

  return useMutation(mutationOptions)
}
export const getV2EmissionsHighFrequencyDataSources = (signal?: AbortSignal) => {
  return customInstance<AbstractModuleApiResponseHighFreqDataSourcesRequestHighFreqDataSourcesResponseHighFreqDataSourcesResponseGjwy>(
    { url: `/v2/emissions/high-frequency/data-sources`, method: 'get', signal }
  )
}

export const getGetV2EmissionsHighFrequencyDataSourcesQueryKey = () =>
  ['v2', 'emissions', 'high-frequency', 'data-sources'] as const

export const getGetV2EmissionsHighFrequencyDataSourcesQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2EmissionsHighFrequencyDataSources>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getV2EmissionsHighFrequencyDataSources>>,
    TError,
    TData
  >
}): UseQueryOptions<
  Awaited<ReturnType<typeof getV2EmissionsHighFrequencyDataSources>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetV2EmissionsHighFrequencyDataSourcesQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getV2EmissionsHighFrequencyDataSources>>
  > = ({ signal }) => getV2EmissionsHighFrequencyDataSources(signal)

  return { queryKey, queryFn, ...queryOptions }
}

export type GetV2EmissionsHighFrequencyDataSourcesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2EmissionsHighFrequencyDataSources>>
>
export type GetV2EmissionsHighFrequencyDataSourcesQueryError = unknown

export const useGetV2EmissionsHighFrequencyDataSources = <
  TData = Awaited<ReturnType<typeof getV2EmissionsHighFrequencyDataSources>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getV2EmissionsHighFrequencyDataSources>>,
    TError,
    TData
  >
}): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2EmissionsHighFrequencyDataSourcesQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey as QueryKey

  return query
}

export const postV2EmissionsHighFrequency = (
  highFreqEmissionsRequestGkimcty: MaybeRef<HighFreqEmissionsRequestGkimcty>
) => {
  return customInstance<AbstractModuleApiResponseHighFreqEmissionsRequestHighFreqEmissionsResponseHighFreqEmissionsResponseHgoueq>(
    {
      url: `/v2/emissions/high-frequency`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: highFreqEmissionsRequestGkimcty
    }
  )
}

export const getPostV2EmissionsHighFrequencyMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2EmissionsHighFrequency>>,
    TError,
    { data: HighFreqEmissionsRequestGkimcty },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2EmissionsHighFrequency>>,
  TError,
  { data: HighFreqEmissionsRequestGkimcty },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2EmissionsHighFrequency>>,
    { data: HighFreqEmissionsRequestGkimcty }
  > = (props) => {
    const { data } = props ?? {}

    return postV2EmissionsHighFrequency(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2EmissionsHighFrequencyMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2EmissionsHighFrequency>>
>
export type PostV2EmissionsHighFrequencyMutationBody = HighFreqEmissionsRequestGkimcty
export type PostV2EmissionsHighFrequencyMutationError = unknown

export const usePostV2EmissionsHighFrequency = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2EmissionsHighFrequency>>,
    TError,
    { data: HighFreqEmissionsRequestGkimcty },
    TContext
  >
}) => {
  const mutationOptions = getPostV2EmissionsHighFrequencyMutationOptions(options)

  return useMutation(mutationOptions)
}
export const getV2EmissionsLowFrequencyDashboard = (
  params?: MaybeRef<GetV2EmissionsLowFrequencyDashboardParams>,
  signal?: AbortSignal
) => {
  return customInstance<AbstractModuleApiResponseLowFreqDashboardRequestLowFreqDashboardResponseLowFreqDashboardResponseLulgsfi>(
    { url: `/v2/emissions/low-frequency/dashboard`, method: 'get', params, signal }
  )
}

export const getGetV2EmissionsLowFrequencyDashboardQueryKey = (
  params?: MaybeRef<GetV2EmissionsLowFrequencyDashboardParams>
) => ['v2', 'emissions', 'low-frequency', 'dashboard', ...(params ? [params] : [])] as const

export const getGetV2EmissionsLowFrequencyDashboardQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2EmissionsLowFrequencyDashboard>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2EmissionsLowFrequencyDashboardParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2EmissionsLowFrequencyDashboard>>,
      TError,
      TData
    >
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getV2EmissionsLowFrequencyDashboard>>,
  TError,
  TData
> => {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetV2EmissionsLowFrequencyDashboardQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getV2EmissionsLowFrequencyDashboard>>> = ({
    signal
  }) => getV2EmissionsLowFrequencyDashboard(params, signal)

  return { queryKey, queryFn, ...queryOptions }
}

export type GetV2EmissionsLowFrequencyDashboardQueryResult = NonNullable<
  Awaited<ReturnType<typeof getV2EmissionsLowFrequencyDashboard>>
>
export type GetV2EmissionsLowFrequencyDashboardQueryError = unknown

export const useGetV2EmissionsLowFrequencyDashboard = <
  TData = Awaited<ReturnType<typeof getV2EmissionsLowFrequencyDashboard>>,
  TError = unknown
>(
  params?: MaybeRef<GetV2EmissionsLowFrequencyDashboardParams>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getV2EmissionsLowFrequencyDashboard>>,
      TError,
      TData
    >
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2EmissionsLowFrequencyDashboardQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey as QueryKey

  return query
}

export const postV2EmissionsLowFrequency = (
  lowFreqEmissionsRequestMysha: MaybeRef<LowFreqEmissionsRequestMysha>
) => {
  return customInstance<AbstractModuleApiResponseLowFreqEmissionsRequestLowFreqEmissionsResponseLowFreqEmissionsResponseTkjglby>(
    {
      url: `/v2/emissions/low-frequency`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: lowFreqEmissionsRequestMysha
    }
  )
}

export const getPostV2EmissionsLowFrequencyMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2EmissionsLowFrequency>>,
    TError,
    { data: LowFreqEmissionsRequestMysha },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2EmissionsLowFrequency>>,
  TError,
  { data: LowFreqEmissionsRequestMysha },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2EmissionsLowFrequency>>,
    { data: LowFreqEmissionsRequestMysha }
  > = (props) => {
    const { data } = props ?? {}

    return postV2EmissionsLowFrequency(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2EmissionsLowFrequencyMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2EmissionsLowFrequency>>
>
export type PostV2EmissionsLowFrequencyMutationBody = LowFreqEmissionsRequestMysha
export type PostV2EmissionsLowFrequencyMutationError = unknown

export const usePostV2EmissionsLowFrequency = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2EmissionsLowFrequency>>,
    TError,
    { data: LowFreqEmissionsRequestMysha },
    TContext
  >
}) => {
  const mutationOptions = getPostV2EmissionsLowFrequencyMutationOptions(options)

  return useMutation(mutationOptions)
}
