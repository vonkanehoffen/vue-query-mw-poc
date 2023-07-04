/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Mobilityways API
 * OpenAPI spec version: 2.0.0
 */
import { useMutation } from '@tanstack/vue-query';
import type { UseMutationOptions, MutationFunction } from '@tanstack/vue-query';
import type { MaybeRef } from '@tanstack/vue-query/build/lib/types';
import type {
  AbstractModuleApiResponsePushTokenUpsertRequestPushTokenUpsertResponsePushTokenUpsertResponseMoolnq,
  PushTokenUpsertBaseRequestNiua
} from '.././model';
import { customInstance } from '../../../axiosInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export const postV2LiftsharePushToken = (
  pushTokenUpsertBaseRequestNiua: MaybeRef<PushTokenUpsertBaseRequestNiua>
) => {
  return customInstance<AbstractModuleApiResponsePushTokenUpsertRequestPushTokenUpsertResponsePushTokenUpsertResponseMoolnq>(
    {
      url: `/v2/liftshare/push-token`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: pushTokenUpsertBaseRequestNiua
    }
  );
};

export const getPostV2LiftsharePushTokenMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2LiftsharePushToken>>,
    TError,
    { data: PushTokenUpsertBaseRequestNiua },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postV2LiftsharePushToken>>,
  TError,
  { data: PushTokenUpsertBaseRequestNiua },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postV2LiftsharePushToken>>,
    { data: PushTokenUpsertBaseRequestNiua }
  > = (props) => {
    const { data } = props ?? {};

    return postV2LiftsharePushToken(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostV2LiftsharePushTokenMutationResult = NonNullable<
  Awaited<ReturnType<typeof postV2LiftsharePushToken>>
>;
export type PostV2LiftsharePushTokenMutationBody = PushTokenUpsertBaseRequestNiua;
export type PostV2LiftsharePushTokenMutationError = unknown;

export const usePostV2LiftsharePushToken = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postV2LiftsharePushToken>>,
    TError,
    { data: PushTokenUpsertBaseRequestNiua },
    TContext
  >;
}) => {
  const mutationOptions = getPostV2LiftsharePushTokenMutationOptions(options);

  return useMutation(mutationOptions);
};
