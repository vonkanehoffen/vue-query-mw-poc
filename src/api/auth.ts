import { postClientToken } from './client/generated/authentication-tokens/authentication-tokens'
import type { AdminTokenCreateRequestKiaya } from './client/generated/model'

// just do in component?
export const login = async (args: AdminTokenCreateRequestKiaya) => {
  const token = await postClientToken(args)
}
