/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Liftshare Private API
 * OpenAPI spec version: 1.0.0
 */
import { useMutation } from '@tanstack/vue-query';
import type { UseMutationOptions, MutationFunction } from '@tanstack/vue-query';
import type { MaybeRef } from '@tanstack/vue-query/build/lib/types';
import type {
  ValidationExceptionResponseDtoLtlwwzy,
  PushTokenUpsertBaseRequestNiua
} from '.././model';
import { customInstance } from '../../../axiosInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary Registers the current device for push notifications
 */
export const postPush = (
  pushTokenUpsertBaseRequestNiua: MaybeRef<PushTokenUpsertBaseRequestNiua>
) => {
  return customInstance<void>({
    url: `/push`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: pushTokenUpsertBaseRequestNiua
  });
};

export const getPostPushMutationOptions = <
  TError = ValidationExceptionResponseDtoLtlwwzy,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postPush>>,
    TError,
    { data: PushTokenUpsertBaseRequestNiua },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postPush>>,
  TError,
  { data: PushTokenUpsertBaseRequestNiua },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postPush>>,
    { data: PushTokenUpsertBaseRequestNiua }
  > = (props) => {
    const { data } = props ?? {};

    return postPush(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostPushMutationResult = NonNullable<Awaited<ReturnType<typeof postPush>>>;
export type PostPushMutationBody = PushTokenUpsertBaseRequestNiua;
export type PostPushMutationError = ValidationExceptionResponseDtoLtlwwzy;

/**
 * @summary Registers the current device for push notifications
 */
export const usePostPush = <
  TError = ValidationExceptionResponseDtoLtlwwzy,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postPush>>,
    TError,
    { data: PushTokenUpsertBaseRequestNiua },
    TContext
  >;
}) => {
  const mutationOptions = getPostPushMutationOptions(options);

  return useMutation(mutationOptions);
};
