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
  PendingBookingsResponseDtoNqieea,
  ConfirmBookingResponseDtoCxydui,
  CancelBookingResponseDtoEdcwa,
  CancelBookingRequestBaseDtoTdrudvy,
  BookJourneyResponseDtoEqvlq,
  UnauthorizedResultPecray,
  ValidationExceptionResponseDtoLtlwwzy,
  BookJourneyRequestBaseDtoYjbarzq
} from '.././model';
import { customInstance } from '../../../axiosInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary Get a list of any pending share requests for current user
 */
export const getBookingPending = (signal?: AbortSignal) => {
  return customInstance<PendingBookingsResponseDtoNqieea>({
    url: `/booking/pending`,
    method: 'get',
    signal
  });
};

export const getGetBookingPendingQueryKey = () => ['booking', 'pending'] as const;

export const getGetBookingPendingQueryOptions = <
  TData = Awaited<ReturnType<typeof getBookingPending>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getBookingPending>>, TError, TData>;
}): UseQueryOptions<Awaited<ReturnType<typeof getBookingPending>>, TError, TData> => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getGetBookingPendingQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getBookingPending>>> = ({ signal }) =>
    getBookingPending(signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetBookingPendingQueryResult = NonNullable<
  Awaited<ReturnType<typeof getBookingPending>>
>;
export type GetBookingPendingQueryError = unknown;

/**
 * @summary Get a list of any pending share requests for current user
 */
export const useGetBookingPending = <
  TData = Awaited<ReturnType<typeof getBookingPending>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getBookingPending>>, TError, TData>;
}): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetBookingPendingQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey as QueryKey;

  return query;
};

/**
 * @summary Accepts the request to share. Sends email to passenger and driver.
 */
export const postBookingConfirmPublicBookingId = (publicBookingId: MaybeRef<string>) => {
  return customInstance<ConfirmBookingResponseDtoCxydui>({
    url: `/booking/confirm/${unref(publicBookingId)}`,
    method: 'post'
  });
};

export const getPostBookingConfirmPublicBookingIdMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postBookingConfirmPublicBookingId>>,
    TError,
    { publicBookingId: string },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postBookingConfirmPublicBookingId>>,
  TError,
  { publicBookingId: string },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postBookingConfirmPublicBookingId>>,
    { publicBookingId: string }
  > = (props) => {
    const { publicBookingId } = props ?? {};

    return postBookingConfirmPublicBookingId(publicBookingId);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostBookingConfirmPublicBookingIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof postBookingConfirmPublicBookingId>>
>;

export type PostBookingConfirmPublicBookingIdMutationError = unknown;

/**
 * @summary Accepts the request to share. Sends email to passenger and driver.
 */
export const usePostBookingConfirmPublicBookingId = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postBookingConfirmPublicBookingId>>,
    TError,
    { publicBookingId: string },
    TContext
  >;
}) => {
  const mutationOptions = getPostBookingConfirmPublicBookingIdMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Cancels or declines the request to share. Sends email to passenger and driver.
 */
export const deleteBookingCancelPublicBookingId = (
  publicBookingId: MaybeRef<string>,
  cancelBookingRequestBaseDtoTdrudvy: MaybeRef<CancelBookingRequestBaseDtoTdrudvy>
) => {
  return customInstance<CancelBookingResponseDtoEdcwa>({
    url: `/booking/cancel/${unref(publicBookingId)}`,
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    data: cancelBookingRequestBaseDtoTdrudvy
  });
};

export const getDeleteBookingCancelPublicBookingIdMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteBookingCancelPublicBookingId>>,
    TError,
    { publicBookingId: string; data: CancelBookingRequestBaseDtoTdrudvy },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteBookingCancelPublicBookingId>>,
  TError,
  { publicBookingId: string; data: CancelBookingRequestBaseDtoTdrudvy },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteBookingCancelPublicBookingId>>,
    { publicBookingId: string; data: CancelBookingRequestBaseDtoTdrudvy }
  > = (props) => {
    const { publicBookingId, data } = props ?? {};

    return deleteBookingCancelPublicBookingId(publicBookingId, data);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteBookingCancelPublicBookingIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteBookingCancelPublicBookingId>>
>;
export type DeleteBookingCancelPublicBookingIdMutationBody = CancelBookingRequestBaseDtoTdrudvy;
export type DeleteBookingCancelPublicBookingIdMutationError = unknown;

/**
 * @summary Cancels or declines the request to share. Sends email to passenger and driver.
 */
export const useDeleteBookingCancelPublicBookingId = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteBookingCancelPublicBookingId>>,
    TError,
    { publicBookingId: string; data: CancelBookingRequestBaseDtoTdrudvy },
    TContext
  >;
}) => {
  const mutationOptions = getDeleteBookingCancelPublicBookingIdMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Creat a booking request / request to share journey
 */
export const postBookingBook = (
  bookJourneyRequestBaseDtoYjbarzq: MaybeRef<BookJourneyRequestBaseDtoYjbarzq>
) => {
  return customInstance<BookJourneyResponseDtoEqvlq>({
    url: `/booking/book`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: bookJourneyRequestBaseDtoYjbarzq
  });
};

export const getPostBookingBookMutationOptions = <
  TError = UnauthorizedResultPecray | ValidationExceptionResponseDtoLtlwwzy,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postBookingBook>>,
    TError,
    { data: BookJourneyRequestBaseDtoYjbarzq },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postBookingBook>>,
  TError,
  { data: BookJourneyRequestBaseDtoYjbarzq },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postBookingBook>>,
    { data: BookJourneyRequestBaseDtoYjbarzq }
  > = (props) => {
    const { data } = props ?? {};

    return postBookingBook(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostBookingBookMutationResult = NonNullable<
  Awaited<ReturnType<typeof postBookingBook>>
>;
export type PostBookingBookMutationBody = BookJourneyRequestBaseDtoYjbarzq;
export type PostBookingBookMutationError =
  | UnauthorizedResultPecray
  | ValidationExceptionResponseDtoLtlwwzy;

/**
 * @summary Creat a booking request / request to share journey
 */
export const usePostBookingBook = <
  TError = UnauthorizedResultPecray | ValidationExceptionResponseDtoLtlwwzy,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postBookingBook>>,
    TError,
    { data: BookJourneyRequestBaseDtoYjbarzq },
    TContext
  >;
}) => {
  const mutationOptions = getPostBookingBookMutationOptions(options);

  return useMutation(mutationOptions);
};
