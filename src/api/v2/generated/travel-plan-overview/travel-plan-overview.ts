/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Mobilityways API
 * OpenAPI spec version: 2.0.0
 */
import { useMutation } from '@tanstack/vue-query'
import type { UseMutationOptions, MutationFunction } from '@tanstack/vue-query'
import type { MaybeRef } from '@tanstack/vue-query/build/lib/types'
import type {
  AbstractModuleApiResponseModalShiftBreakdownRequestModalShiftBreakdownResponseModalShiftBreakdownResponseYcdji,
  ModalShiftBreakdownRequestGbfi,
  AbstractModuleApiResponsePublicTransportResultsModeBreakdownRequestPublicTransportResultsModeBreakdownResponsePublicTransportResultsModeBreakdownResponseArefi,
  PublicTransportResultsModeBreakdownRequestZkoacy,
  AbstractModuleApiResponseTotalModalShiftRequestTotalModalShiftResponseTotalModalShiftResponseWhnka,
  TotalModalShiftRequestNxjidhy,
  AbstractModuleApiResponseTravelPlanEmailMetricsRequestTravelPlanEmailMetricsResponseTravelPlanEmailMetricsResponseBkgxy,
  TravelPlanEmailMetricsRequestIlngfmy
} from '.././model'
import { customInstance } from '../../../axiosInstance'

// https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir/49579497#49579497
type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? A
  : B

type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
}[keyof T]

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never
type DistributeReadOnlyOverUnions<T> = T extends any ? NonReadonly<T> : never

type Writable<T> = Pick<T, WritableKeys<T>>
type NonReadonly<T> = [T] extends [UnionToIntersection<T>]
  ? {
      [P in keyof Writable<T>]: T[P] extends object ? NonReadonly<NonNullable<T[P]>> : T[P]
    }
  : DistributeReadOnlyOverUnions<T>

type AwaitedInput<T> = PromiseLike<T> | T

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never

export const postV2TravelPlanAdminOverviewModalShiftBreakdown = (
  modalShiftBreakdownRequestGbfi: MaybeRef<NonReadonly<ModalShiftBreakdownRequestGbfi>>
) => {
  return customInstance<AbstractModuleApiResponseModalShiftBreakdownRequestModalShiftBreakdownResponseModalShiftBreakdownResponseYcdji>(
    {
      url: `/v2/travel-plan/admin-overview/modal-shift-breakdown`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: modalShiftBreakdownRequestGbfi
    }
  )
}

export const getPostV2TravelPlanAdminOverviewModalShiftBreakdownMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewModalShiftBreakdown>>,
    TError,
    { data: NonReadonly<ModalShiftBreakdownRequestGbfi> },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewModalShiftBreakdown>>,
  TError,
  { data: NonReadonly<ModalShiftBreakdownRequestGbfi> },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewModalShiftBreakdown>>,
    { data: NonReadonly<ModalShiftBreakdownRequestGbfi> }
  > = (props) => {
    const { data } = props ?? {}

    return postV2TravelPlanAdminOverviewModalShiftBreakdown(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2TravelPlanAdminOverviewModalShiftBreakdownMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewModalShiftBreakdown>>
>
export type PostV2TravelPlanAdminOverviewModalShiftBreakdownMutationBody =
  NonReadonly<ModalShiftBreakdownRequestGbfi>
export type PostV2TravelPlanAdminOverviewModalShiftBreakdownMutationError = unknown

export const usePostV2TravelPlanAdminOverviewModalShiftBreakdown = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewModalShiftBreakdown>>,
    TError,
    { data: NonReadonly<ModalShiftBreakdownRequestGbfi> },
    TContext
  >
}) => {
  const mutationOptions =
    getPostV2TravelPlanAdminOverviewModalShiftBreakdownMutationOptions(options)

  return useMutation(mutationOptions)
}
export const postV2TravelPlanAdminOverviewPublicTransportModes = (
  publicTransportResultsModeBreakdownRequestZkoacy: MaybeRef<
    NonReadonly<PublicTransportResultsModeBreakdownRequestZkoacy>
  >
) => {
  return customInstance<AbstractModuleApiResponsePublicTransportResultsModeBreakdownRequestPublicTransportResultsModeBreakdownResponsePublicTransportResultsModeBreakdownResponseArefi>(
    {
      url: `/v2/travel-plan/admin-overview/public-transport-modes`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: publicTransportResultsModeBreakdownRequestZkoacy
    }
  )
}

export const getPostV2TravelPlanAdminOverviewPublicTransportModesMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewPublicTransportModes>>,
    TError,
    { data: NonReadonly<PublicTransportResultsModeBreakdownRequestZkoacy> },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewPublicTransportModes>>,
  TError,
  { data: NonReadonly<PublicTransportResultsModeBreakdownRequestZkoacy> },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewPublicTransportModes>>,
    { data: NonReadonly<PublicTransportResultsModeBreakdownRequestZkoacy> }
  > = (props) => {
    const { data } = props ?? {}

    return postV2TravelPlanAdminOverviewPublicTransportModes(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2TravelPlanAdminOverviewPublicTransportModesMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewPublicTransportModes>>
>
export type PostV2TravelPlanAdminOverviewPublicTransportModesMutationBody =
  NonReadonly<PublicTransportResultsModeBreakdownRequestZkoacy>
export type PostV2TravelPlanAdminOverviewPublicTransportModesMutationError = unknown

export const usePostV2TravelPlanAdminOverviewPublicTransportModes = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewPublicTransportModes>>,
    TError,
    { data: NonReadonly<PublicTransportResultsModeBreakdownRequestZkoacy> },
    TContext
  >
}) => {
  const mutationOptions =
    getPostV2TravelPlanAdminOverviewPublicTransportModesMutationOptions(options)

  return useMutation(mutationOptions)
}
export const postV2TravelPlanAdminOverviewTotalModalShift = (
  totalModalShiftRequestNxjidhy: MaybeRef<NonReadonly<TotalModalShiftRequestNxjidhy>>
) => {
  return customInstance<AbstractModuleApiResponseTotalModalShiftRequestTotalModalShiftResponseTotalModalShiftResponseWhnka>(
    {
      url: `/v2/travel-plan/admin-overview/total-modal-shift`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: totalModalShiftRequestNxjidhy
    }
  )
}

export const getPostV2TravelPlanAdminOverviewTotalModalShiftMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewTotalModalShift>>,
    TError,
    { data: NonReadonly<TotalModalShiftRequestNxjidhy> },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewTotalModalShift>>,
  TError,
  { data: NonReadonly<TotalModalShiftRequestNxjidhy> },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewTotalModalShift>>,
    { data: NonReadonly<TotalModalShiftRequestNxjidhy> }
  > = (props) => {
    const { data } = props ?? {}

    return postV2TravelPlanAdminOverviewTotalModalShift(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2TravelPlanAdminOverviewTotalModalShiftMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewTotalModalShift>>
>
export type PostV2TravelPlanAdminOverviewTotalModalShiftMutationBody =
  NonReadonly<TotalModalShiftRequestNxjidhy>
export type PostV2TravelPlanAdminOverviewTotalModalShiftMutationError = unknown

export const usePostV2TravelPlanAdminOverviewTotalModalShift = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewTotalModalShift>>,
    TError,
    { data: NonReadonly<TotalModalShiftRequestNxjidhy> },
    TContext
  >
}) => {
  const mutationOptions = getPostV2TravelPlanAdminOverviewTotalModalShiftMutationOptions(options)

  return useMutation(mutationOptions)
}
export const postV2TravelPlanAdminOverviewPlanEmailMetrics = (
  travelPlanEmailMetricsRequestIlngfmy: MaybeRef<NonReadonly<TravelPlanEmailMetricsRequestIlngfmy>>
) => {
  return customInstance<AbstractModuleApiResponseTravelPlanEmailMetricsRequestTravelPlanEmailMetricsResponseTravelPlanEmailMetricsResponseBkgxy>(
    {
      url: `/v2/travel-plan/admin-overview/plan-email-metrics`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: travelPlanEmailMetricsRequestIlngfmy
    }
  )
}

export const getPostV2TravelPlanAdminOverviewPlanEmailMetricsMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewPlanEmailMetrics>>,
    TError,
    { data: NonReadonly<TravelPlanEmailMetricsRequestIlngfmy> },
    TContext
  >
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewPlanEmailMetrics>>,
  TError,
  { data: NonReadonly<TravelPlanEmailMetricsRequestIlngfmy> },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewPlanEmailMetrics>>,
    { data: NonReadonly<TravelPlanEmailMetricsRequestIlngfmy> }
  > = (props) => {
    const { data } = props ?? {}

    return postV2TravelPlanAdminOverviewPlanEmailMetrics(data)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostV2TravelPlanAdminOverviewPlanEmailMetricsMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewPlanEmailMetrics>>
>
export type PostV2TravelPlanAdminOverviewPlanEmailMetricsMutationBody =
  NonReadonly<TravelPlanEmailMetricsRequestIlngfmy>
export type PostV2TravelPlanAdminOverviewPlanEmailMetricsMutationError = unknown

export const usePostV2TravelPlanAdminOverviewPlanEmailMetrics = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2TravelPlanAdminOverviewPlanEmailMetrics>>,
    TError,
    { data: NonReadonly<TravelPlanEmailMetricsRequestIlngfmy> },
    TContext
  >
}) => {
  const mutationOptions = getPostV2TravelPlanAdminOverviewPlanEmailMetricsMutationOptions(options)

  return useMutation(mutationOptions)
}
