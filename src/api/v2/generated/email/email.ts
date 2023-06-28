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
  AbstractModuleApiResponseEmailTemplateListRequestEmailTemplateListResponseEmailTemplateListResponseVxysday,
  AbstractModuleApiResponseEmailCheckRequestEmailCheckResponseEmailCheckResponseJlcepq,
  EmailCheckRequestZopznuy,
  AbstractModuleApiResponseEmailVerifyRequestEmailVerifyResponseEmailVerifyResponseOjoljla
} from '.././model'
import { customInstance } from '../../../axiosInstance'

type AwaitedInput<T> = PromiseLike<T> | T

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never

export const getV2Email = (signal?: AbortSignal) => {
  return customInstance<AbstractModuleApiResponseEmailTemplateListRequestEmailTemplateListResponseEmailTemplateListResponseVxysday>(
    { url: `/v2/email`, method: 'get', signal }
  )
}

export const getGetV2EmailQueryKey = () => ['v2', 'email'] as const

export const getGetV2EmailQueryOptions = <
  TData = Awaited<ReturnType<typeof getV2Email>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getV2Email>>, TError, TData>
}): UseQueryOptions<Awaited<ReturnType<typeof getV2Email>>, TError, TData> => {
  const { query: queryOptions } = options ?? {}

  const queryKey = getGetV2EmailQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getV2Email>>> = ({ signal }) =>
    getV2Email(signal)

  return { queryKey, queryFn, ...queryOptions }
}

export type GetV2EmailQueryResult = NonNullable<Awaited<ReturnType<typeof getV2Email>>>
export type GetV2EmailQueryError = unknown

export const useGetV2Email = <
  TData = Awaited<ReturnType<typeof getV2Email>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getV2Email>>, TError, TData>
}): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetV2EmailQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey as QueryKey

  return query
}

export const postV2EmailPreviewKey = (key: MaybeRef<string>) => {
  return customInstance<void>({ url: `/v2/email/preview/${unref(key)}`, method: 'post' })
}

export const getPostV2EmailPreviewKeyMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2EmailPreviewKey>>,
    TError,
    { key: string },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2EmailPreviewKey>>,
  TError,
  { key: string },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2EmailPreviewKey>>,
    { key: string }
  > = (props) => {
    const { key } = props ?? {}

    return postV2EmailPreviewKey(key)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2EmailPreviewKeyMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2EmailPreviewKey>>
>

export type PostV2EmailPreviewKeyMutationError = unknown

export const usePostV2EmailPreviewKey = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2EmailPreviewKey>>,
    TError,
    { key: string },
    TContext
  >
}) => {
  const mutationOptions = getPostV2EmailPreviewKeyMutationOptions(options)

  return useMutation(mutationOptions)
}
export const postV2LiftshareEmailCheck = (
  emailCheckRequestZopznuy: MaybeRef<EmailCheckRequestZopznuy>
) => {
  return customInstance<AbstractModuleApiResponseEmailCheckRequestEmailCheckResponseEmailCheckResponseJlcepq>(
    {
      url: `/v2/liftshare/email/check`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: emailCheckRequestZopznuy
    }
  )
}

export const getPostV2LiftshareEmailCheckMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2LiftshareEmailCheck>>,
    TError,
    { data: EmailCheckRequestZopznuy },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2LiftshareEmailCheck>>,
  TError,
  { data: EmailCheckRequestZopznuy },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2LiftshareEmailCheck>>,
    { data: EmailCheckRequestZopznuy }
  > = (props) => {
    const { data } = props ?? {}

    return postV2LiftshareEmailCheck(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2LiftshareEmailCheckMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2LiftshareEmailCheck>>
>
export type PostV2LiftshareEmailCheckMutationBody = EmailCheckRequestZopznuy
export type PostV2LiftshareEmailCheckMutationError = unknown

export const usePostV2LiftshareEmailCheck = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2LiftshareEmailCheck>>,
    TError,
    { data: EmailCheckRequestZopznuy },
    TContext
  >
}) => {
  const mutationOptions = getPostV2LiftshareEmailCheckMutationOptions(options)

  return useMutation(mutationOptions)
}
export const postV2LiftshareEmailVerifyToken = (token: MaybeRef<string>) => {
  return customInstance<AbstractModuleApiResponseEmailVerifyRequestEmailVerifyResponseEmailVerifyResponseOjoljla>(
    { url: `/v2/liftshare/email/verify/${unref(token)}`, method: 'post' }
  )
}

export const getPostV2LiftshareEmailVerifyTokenMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2LiftshareEmailVerifyToken>>,
    TError,
    { token: string },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2LiftshareEmailVerifyToken>>,
  TError,
  { token: string },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2LiftshareEmailVerifyToken>>,
    { token: string }
  > = (props) => {
    const { token } = props ?? {}

    return postV2LiftshareEmailVerifyToken(token)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2LiftshareEmailVerifyTokenMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2LiftshareEmailVerifyToken>>
>

export type PostV2LiftshareEmailVerifyTokenMutationError = unknown

export const usePostV2LiftshareEmailVerifyToken = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2LiftshareEmailVerifyToken>>,
    TError,
    { token: string },
    TContext
  >
}) => {
  const mutationOptions = getPostV2LiftshareEmailVerifyTokenMutationOptions(options)

  return useMutation(mutationOptions)
}
