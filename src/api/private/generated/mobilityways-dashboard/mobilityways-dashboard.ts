/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Liftshare Private API
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useMutation } from '@tanstack/vue-query';
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  QueryKey,
  UseQueryReturnType
} from '@tanstack/vue-query';
import { unref } from 'vue';
import type { MaybeRef } from '@tanstack/vue-query/build/lib/types';
import type {
  GetDashboardAcelReportsParams,
  GetDashboardAcelAssumptionsParams,
  SetPrimaryAcelReportBaseRequestUclxqzi,
  SetAcelReportTargetRequestCixsni,
  SetAcelReportPrivacyRequestHwghvq,
  RenameAcelReportRequestFbbepxy,
  AcelReportCreateBaseRequestFuollui,
  AcelBreakdownFromSurveyRequestWjcxq,
  AcelReportCreateFromSurveyBaseRequestFeeyti,
  GetDashboardAcelAcelSurveysParams,
  AdminTokenCreateResponseNnmuhq,
  UnauthorizedResultPecray,
  ValidationExceptionResponseBaseDtoVtrnlzi,
  GetTokenForClientAccountHandlerRequestTthtui
} from '.././model';
import { customInstance } from '../../../axiosInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * Gets full information on acel report and breakdown of transport types
 * @summary Acel report details
 */
export const getDashboardAcelReportReportId = (
  reportId: MaybeRef<string>,
  signal?: AbortSignal
) => {
  return customInstance<void>({
    url: `/dashboard/acel/report/${unref(reportId)}`,
    method: 'get',
    signal
  });
};

export const getGetDashboardAcelReportReportIdQueryKey = (reportId: MaybeRef<string>) =>
  ['dashboard', 'acel', 'report', reportId] as const;

export const getGetDashboardAcelReportReportIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getDashboardAcelReportReportId>>,
  TError = unknown
>(
  reportId: MaybeRef<string>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getDashboardAcelReportReportId>>,
      TError,
      TData
    >;
  }
): UseQueryOptions<Awaited<ReturnType<typeof getDashboardAcelReportReportId>>, TError, TData> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetDashboardAcelReportReportIdQueryKey(reportId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getDashboardAcelReportReportId>>> = ({
    signal
  }) => getDashboardAcelReportReportId(reportId, signal);

  return { queryKey, queryFn, enabled: !!reportId, ...queryOptions };
};

export type GetDashboardAcelReportReportIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getDashboardAcelReportReportId>>
>;
export type GetDashboardAcelReportReportIdQueryError = unknown;

/**
 * @summary Acel report details
 */
export const useGetDashboardAcelReportReportId = <
  TData = Awaited<ReturnType<typeof getDashboardAcelReportReportId>>,
  TError = unknown
>(
  reportId: MaybeRef<string>,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getDashboardAcelReportReportId>>,
      TError,
      TData
    >;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetDashboardAcelReportReportIdQueryOptions(reportId, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

/**
 * Delete an acel report. Throws DeletePrimaryAcelReportException if set as a primary report
 * @summary Delete acel report
 */
export const deleteDashboardAcelReportReportId = (reportId: MaybeRef<string>) => {
  return customInstance<void>({
    url: `/dashboard/acel/report/${unref(reportId)}`,
    method: 'delete'
  });
};

export const getDeleteDashboardAcelReportReportIdMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteDashboardAcelReportReportId>>,
    TError,
    { reportId: string },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteDashboardAcelReportReportId>>,
  TError,
  { reportId: string },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteDashboardAcelReportReportId>>,
    { reportId: string }
  > = (props) => {
    const { reportId } = props ?? {};

    return deleteDashboardAcelReportReportId(reportId);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteDashboardAcelReportReportIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteDashboardAcelReportReportId>>
>;

export type DeleteDashboardAcelReportReportIdMutationError = unknown;

/**
 * @summary Delete acel report
 */
export const useDeleteDashboardAcelReportReportId = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteDashboardAcelReportReportId>>,
    TError,
    { reportId: string },
    TContext
  >;
}) => {
  const mutationOptions = getDeleteDashboardAcelReportReportIdMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Lists all acel reports for given community ids
 * @summary List previous acel reports
 */
export const getDashboardAcelReports = (
  params?: MaybeRef<GetDashboardAcelReportsParams>,
  signal?: AbortSignal
) => {
  return customInstance<void>({ url: `/dashboard/acel/reports`, method: 'get', params, signal });
};

export const getGetDashboardAcelReportsQueryKey = (
  params?: MaybeRef<GetDashboardAcelReportsParams>
) => ['dashboard', 'acel', 'reports', ...(params ? [params] : [])] as const;

export const getGetDashboardAcelReportsQueryOptions = <
  TData = Awaited<ReturnType<typeof getDashboardAcelReports>>,
  TError = unknown
>(
  params?: MaybeRef<GetDashboardAcelReportsParams>,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardAcelReports>>, TError, TData>;
  }
): UseQueryOptions<Awaited<ReturnType<typeof getDashboardAcelReports>>, TError, TData> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetDashboardAcelReportsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getDashboardAcelReports>>> = ({
    signal
  }) => getDashboardAcelReports(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetDashboardAcelReportsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getDashboardAcelReports>>
>;
export type GetDashboardAcelReportsQueryError = unknown;

/**
 * @summary List previous acel reports
 */
export const useGetDashboardAcelReports = <
  TData = Awaited<ReturnType<typeof getDashboardAcelReports>>,
  TError = unknown
>(
  params?: MaybeRef<GetDashboardAcelReportsParams>,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardAcelReports>>, TError, TData>;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetDashboardAcelReportsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

/**
 * Get latest Acel assumptions for calculation
 * @summary Get latest Acel assumptions
 */
export const getDashboardAcelAssumptions = (
  params?: MaybeRef<GetDashboardAcelAssumptionsParams>,
  signal?: AbortSignal
) => {
  return customInstance<void>({
    url: `/dashboard/acel/assumptions`,
    method: 'get',
    params,
    signal
  });
};

export const getGetDashboardAcelAssumptionsQueryKey = (
  params?: MaybeRef<GetDashboardAcelAssumptionsParams>
) => ['dashboard', 'acel', 'assumptions', ...(params ? [params] : [])] as const;

export const getGetDashboardAcelAssumptionsQueryOptions = <
  TData = Awaited<ReturnType<typeof getDashboardAcelAssumptions>>,
  TError = unknown
>(
  params?: MaybeRef<GetDashboardAcelAssumptionsParams>,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardAcelAssumptions>>, TError, TData>;
  }
): UseQueryOptions<Awaited<ReturnType<typeof getDashboardAcelAssumptions>>, TError, TData> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetDashboardAcelAssumptionsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getDashboardAcelAssumptions>>> = ({
    signal
  }) => getDashboardAcelAssumptions(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetDashboardAcelAssumptionsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getDashboardAcelAssumptions>>
>;
export type GetDashboardAcelAssumptionsQueryError = unknown;

/**
 * @summary Get latest Acel assumptions
 */
export const useGetDashboardAcelAssumptions = <
  TData = Awaited<ReturnType<typeof getDashboardAcelAssumptions>>,
  TError = unknown
>(
  params?: MaybeRef<GetDashboardAcelAssumptionsParams>,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardAcelAssumptions>>, TError, TData>;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetDashboardAcelAssumptionsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

/**
 * Set primary acel report for user and community
 * @summary Set primary acel report
 */
export const postDashboardAcelPrimaryReport = (
  setPrimaryAcelReportBaseRequestUclxqzi: MaybeRef<SetPrimaryAcelReportBaseRequestUclxqzi>
) => {
  return customInstance<void>({
    url: `/dashboard/acel/primary-report`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: setPrimaryAcelReportBaseRequestUclxqzi
  });
};

export const getPostDashboardAcelPrimaryReportMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelPrimaryReport>>,
    TError,
    { data: SetPrimaryAcelReportBaseRequestUclxqzi },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postDashboardAcelPrimaryReport>>,
  TError,
  { data: SetPrimaryAcelReportBaseRequestUclxqzi },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postDashboardAcelPrimaryReport>>,
    { data: SetPrimaryAcelReportBaseRequestUclxqzi }
  > = (props) => {
    const { data } = props ?? {};

    return postDashboardAcelPrimaryReport(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostDashboardAcelPrimaryReportMutationResult = NonNullable<
  Awaited<ReturnType<typeof postDashboardAcelPrimaryReport>>
>;
export type PostDashboardAcelPrimaryReportMutationBody = SetPrimaryAcelReportBaseRequestUclxqzi;
export type PostDashboardAcelPrimaryReportMutationError = unknown;

/**
 * @summary Set primary acel report
 */
export const usePostDashboardAcelPrimaryReport = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelPrimaryReport>>,
    TError,
    { data: SetPrimaryAcelReportBaseRequestUclxqzi },
    TContext
  >;
}) => {
  const mutationOptions = getPostDashboardAcelPrimaryReportMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Set acel target and date.
 * @summary Set acel target and date
 */
export const postDashboardAcelSetTarget = (
  setAcelReportTargetRequestCixsni: MaybeRef<SetAcelReportTargetRequestCixsni>
) => {
  return customInstance<void>({
    url: `/dashboard/acel/set-target`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: setAcelReportTargetRequestCixsni
  });
};

export const getPostDashboardAcelSetTargetMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelSetTarget>>,
    TError,
    { data: SetAcelReportTargetRequestCixsni },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postDashboardAcelSetTarget>>,
  TError,
  { data: SetAcelReportTargetRequestCixsni },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postDashboardAcelSetTarget>>,
    { data: SetAcelReportTargetRequestCixsni }
  > = (props) => {
    const { data } = props ?? {};

    return postDashboardAcelSetTarget(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostDashboardAcelSetTargetMutationResult = NonNullable<
  Awaited<ReturnType<typeof postDashboardAcelSetTarget>>
>;
export type PostDashboardAcelSetTargetMutationBody = SetAcelReportTargetRequestCixsni;
export type PostDashboardAcelSetTargetMutationError = unknown;

/**
 * @summary Set acel target and date
 */
export const usePostDashboardAcelSetTarget = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelSetTarget>>,
    TError,
    { data: SetAcelReportTargetRequestCixsni },
    TContext
  >;
}) => {
  const mutationOptions = getPostDashboardAcelSetTargetMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Set report to public or private
 * @summary Set report to public or private
 */
export const postDashboardAcelTogglePrivate = (
  setAcelReportPrivacyRequestHwghvq: MaybeRef<SetAcelReportPrivacyRequestHwghvq>
) => {
  return customInstance<void>({
    url: `/dashboard/acel/toggle-private`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: setAcelReportPrivacyRequestHwghvq
  });
};

export const getPostDashboardAcelTogglePrivateMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelTogglePrivate>>,
    TError,
    { data: SetAcelReportPrivacyRequestHwghvq },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postDashboardAcelTogglePrivate>>,
  TError,
  { data: SetAcelReportPrivacyRequestHwghvq },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postDashboardAcelTogglePrivate>>,
    { data: SetAcelReportPrivacyRequestHwghvq }
  > = (props) => {
    const { data } = props ?? {};

    return postDashboardAcelTogglePrivate(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostDashboardAcelTogglePrivateMutationResult = NonNullable<
  Awaited<ReturnType<typeof postDashboardAcelTogglePrivate>>
>;
export type PostDashboardAcelTogglePrivateMutationBody = SetAcelReportPrivacyRequestHwghvq;
export type PostDashboardAcelTogglePrivateMutationError = unknown;

/**
 * @summary Set report to public or private
 */
export const usePostDashboardAcelTogglePrivate = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelTogglePrivate>>,
    TError,
    { data: SetAcelReportPrivacyRequestHwghvq },
    TContext
  >;
}) => {
  const mutationOptions = getPostDashboardAcelTogglePrivateMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Rename acel report
 * @summary Rename acel report
 */
export const postDashboardAcelRename = (
  renameAcelReportRequestFbbepxy: MaybeRef<RenameAcelReportRequestFbbepxy>
) => {
  return customInstance<void>({
    url: `/dashboard/acel/rename`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: renameAcelReportRequestFbbepxy
  });
};

export const getPostDashboardAcelRenameMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelRename>>,
    TError,
    { data: RenameAcelReportRequestFbbepxy },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postDashboardAcelRename>>,
  TError,
  { data: RenameAcelReportRequestFbbepxy },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postDashboardAcelRename>>,
    { data: RenameAcelReportRequestFbbepxy }
  > = (props) => {
    const { data } = props ?? {};

    return postDashboardAcelRename(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostDashboardAcelRenameMutationResult = NonNullable<
  Awaited<ReturnType<typeof postDashboardAcelRename>>
>;
export type PostDashboardAcelRenameMutationBody = RenameAcelReportRequestFbbepxy;
export type PostDashboardAcelRenameMutationError = unknown;

/**
 * @summary Rename acel report
 */
export const usePostDashboardAcelRename = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelRename>>,
    TError,
    { data: RenameAcelReportRequestFbbepxy },
    TContext
  >;
}) => {
  const mutationOptions = getPostDashboardAcelRenameMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Create an acel report
 * @summary Create an acel report
 */
export const postDashboardAcelCreate = (
  acelReportCreateBaseRequestFuollui: MaybeRef<AcelReportCreateBaseRequestFuollui>
) => {
  return customInstance<void>({
    url: `/dashboard/acel/create`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: acelReportCreateBaseRequestFuollui
  });
};

export const getPostDashboardAcelCreateMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelCreate>>,
    TError,
    { data: AcelReportCreateBaseRequestFuollui },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postDashboardAcelCreate>>,
  TError,
  { data: AcelReportCreateBaseRequestFuollui },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postDashboardAcelCreate>>,
    { data: AcelReportCreateBaseRequestFuollui }
  > = (props) => {
    const { data } = props ?? {};

    return postDashboardAcelCreate(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostDashboardAcelCreateMutationResult = NonNullable<
  Awaited<ReturnType<typeof postDashboardAcelCreate>>
>;
export type PostDashboardAcelCreateMutationBody = AcelReportCreateBaseRequestFuollui;
export type PostDashboardAcelCreateMutationError = unknown;

/**
 * @summary Create an acel report
 */
export const usePostDashboardAcelCreate = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelCreate>>,
    TError,
    { data: AcelReportCreateBaseRequestFuollui },
    TContext
  >;
}) => {
  const mutationOptions = getPostDashboardAcelCreateMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * gets a breakdown of transport models with count from ACEL answers from a survey (published in a paused or complete state)
 * @summary Breakdown of ACEl responses from survey
 */
export const postDashboardAcelFromSurvey = (
  acelBreakdownFromSurveyRequestWjcxq: MaybeRef<AcelBreakdownFromSurveyRequestWjcxq>
) => {
  return customInstance<void>({
    url: `/dashboard/acel/from-survey`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: acelBreakdownFromSurveyRequestWjcxq
  });
};

export const getPostDashboardAcelFromSurveyMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelFromSurvey>>,
    TError,
    { data: AcelBreakdownFromSurveyRequestWjcxq },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postDashboardAcelFromSurvey>>,
  TError,
  { data: AcelBreakdownFromSurveyRequestWjcxq },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postDashboardAcelFromSurvey>>,
    { data: AcelBreakdownFromSurveyRequestWjcxq }
  > = (props) => {
    const { data } = props ?? {};

    return postDashboardAcelFromSurvey(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostDashboardAcelFromSurveyMutationResult = NonNullable<
  Awaited<ReturnType<typeof postDashboardAcelFromSurvey>>
>;
export type PostDashboardAcelFromSurveyMutationBody = AcelBreakdownFromSurveyRequestWjcxq;
export type PostDashboardAcelFromSurveyMutationError = unknown;

/**
 * @summary Breakdown of ACEl responses from survey
 */
export const usePostDashboardAcelFromSurvey = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelFromSurvey>>,
    TError,
    { data: AcelBreakdownFromSurveyRequestWjcxq },
    TContext
  >;
}) => {
  const mutationOptions = getPostDashboardAcelFromSurveyMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Create an acel report from a survey (published in a paused or complete state)
 * @summary Create an acel report from survey
 */
export const postDashboardAcelCreateFromSurvey = (
  acelReportCreateFromSurveyBaseRequestFeeyti: MaybeRef<AcelReportCreateFromSurveyBaseRequestFeeyti>
) => {
  return customInstance<void>({
    url: `/dashboard/acel/create-from-survey`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: acelReportCreateFromSurveyBaseRequestFeeyti
  });
};

export const getPostDashboardAcelCreateFromSurveyMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelCreateFromSurvey>>,
    TError,
    { data: AcelReportCreateFromSurveyBaseRequestFeeyti },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postDashboardAcelCreateFromSurvey>>,
  TError,
  { data: AcelReportCreateFromSurveyBaseRequestFeeyti },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postDashboardAcelCreateFromSurvey>>,
    { data: AcelReportCreateFromSurveyBaseRequestFeeyti }
  > = (props) => {
    const { data } = props ?? {};

    return postDashboardAcelCreateFromSurvey(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostDashboardAcelCreateFromSurveyMutationResult = NonNullable<
  Awaited<ReturnType<typeof postDashboardAcelCreateFromSurvey>>
>;
export type PostDashboardAcelCreateFromSurveyMutationBody =
  AcelReportCreateFromSurveyBaseRequestFeeyti;
export type PostDashboardAcelCreateFromSurveyMutationError = unknown;

/**
 * @summary Create an acel report from survey
 */
export const usePostDashboardAcelCreateFromSurvey = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postDashboardAcelCreateFromSurvey>>,
    TError,
    { data: AcelReportCreateFromSurveyBaseRequestFeeyti },
    TContext
  >;
}) => {
  const mutationOptions = getPostDashboardAcelCreateFromSurveyMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Get Acel surveys in a published paused or complete state for report creation
 * @summary Get Acel surveys
 */
export const getDashboardAcelAcelSurveys = (
  params?: MaybeRef<GetDashboardAcelAcelSurveysParams>,
  signal?: AbortSignal
) => {
  return customInstance<void>({
    url: `/dashboard/acel/acel-surveys`,
    method: 'get',
    params,
    signal
  });
};

export const getGetDashboardAcelAcelSurveysQueryKey = (
  params?: MaybeRef<GetDashboardAcelAcelSurveysParams>
) => ['dashboard', 'acel', 'acel-surveys', ...(params ? [params] : [])] as const;

export const getGetDashboardAcelAcelSurveysQueryOptions = <
  TData = Awaited<ReturnType<typeof getDashboardAcelAcelSurveys>>,
  TError = unknown
>(
  params?: MaybeRef<GetDashboardAcelAcelSurveysParams>,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardAcelAcelSurveys>>, TError, TData>;
  }
): UseQueryOptions<Awaited<ReturnType<typeof getDashboardAcelAcelSurveys>>, TError, TData> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetDashboardAcelAcelSurveysQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getDashboardAcelAcelSurveys>>> = ({
    signal
  }) => getDashboardAcelAcelSurveys(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetDashboardAcelAcelSurveysQueryResult = NonNullable<
  Awaited<ReturnType<typeof getDashboardAcelAcelSurveys>>
>;
export type GetDashboardAcelAcelSurveysQueryError = unknown;

/**
 * @summary Get Acel surveys
 */
export const useGetDashboardAcelAcelSurveys = <
  TData = Awaited<ReturnType<typeof getDashboardAcelAcelSurveys>>,
  TError = unknown
>(
  params?: MaybeRef<GetDashboardAcelAcelSurveysParams>,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardAcelAcelSurveys>>, TError, TData>;
  }
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetDashboardAcelAcelSurveysQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

/**
 * Used to generate an admin JWT allowing liftshare admins to login on behalf of a client. 
Token is valid for 30 min. 
Token can be refreshed using the refresh token up to 90 days after issue.
 * @summary Generate authentication token to login of behalf of client
 */
export const postClientTokenGetClientToken = (
  getTokenForClientAccountHandlerRequestTthtui: MaybeRef<GetTokenForClientAccountHandlerRequestTthtui>
) => {
  return customInstance<AdminTokenCreateResponseNnmuhq>({
    url: `/client/token/get-client-token`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: getTokenForClientAccountHandlerRequestTthtui
  });
};

export const getPostClientTokenGetClientTokenMutationOptions = <
  TError = UnauthorizedResultPecray | ValidationExceptionResponseBaseDtoVtrnlzi,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postClientTokenGetClientToken>>,
    TError,
    { data: GetTokenForClientAccountHandlerRequestTthtui },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postClientTokenGetClientToken>>,
  TError,
  { data: GetTokenForClientAccountHandlerRequestTthtui },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postClientTokenGetClientToken>>,
    { data: GetTokenForClientAccountHandlerRequestTthtui }
  > = (props) => {
    const { data } = props ?? {};

    return postClientTokenGetClientToken(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostClientTokenGetClientTokenMutationResult = NonNullable<
  Awaited<ReturnType<typeof postClientTokenGetClientToken>>
>;
export type PostClientTokenGetClientTokenMutationBody =
  GetTokenForClientAccountHandlerRequestTthtui;
export type PostClientTokenGetClientTokenMutationError =
  | UnauthorizedResultPecray
  | ValidationExceptionResponseBaseDtoVtrnlzi;

/**
 * @summary Generate authentication token to login of behalf of client
 */
export const usePostClientTokenGetClientToken = <
  TError = UnauthorizedResultPecray | ValidationExceptionResponseBaseDtoVtrnlzi,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postClientTokenGetClientToken>>,
    TError,
    { data: GetTokenForClientAccountHandlerRequestTthtui },
    TContext
  >;
}) => {
  const mutationOptions = getPostClientTokenGetClientTokenMutationOptions(options);

  return useMutation(mutationOptions);
};
