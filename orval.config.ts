import { defineConfig } from 'orval'

export default defineConfig({
  /**
   * Liftshare Private API & Mobilityways V2 API
   * Note we're in the process of moving everything to V2, hence generating from both specs for now.
   *
   * @see https://interface-dev.liftshare.com/swagger/index.html?urls.primaryName=Liftshare%20Private%20API%201.0.0
   * @see https://interface-dev.liftshare.com/swagger/private/swagger.yaml
   *
   * @see https://interface-dev.liftshare.com/swagger/index.html?urls.primaryName=Mobilityways%20API%202.0.0
   * @see https://interface-dev.liftshare.com/swagger/v2/swagger.yaml
   */
  liftsharePrivate: {
    output: {
      mode: 'tags-split',
      target: './src/api/private/generated/liftshare-private.ts',
      schemas: './src/api/private/generated/model',
      client: 'vue-query',
      mock: false,
      clean: true,
      override: {
        mutator: {
          path: './src/api/axiosInstance.ts',
          name: 'customInstance'
        }
      }
    },
    input: {
      target: './src/api/private/swagger.yaml'
    }
  },
  mobilitywaysV2: {
    output: {
      mode: 'tags-split',
      target: './src/api/v2/generated/liftshare-private.ts',
      schemas: './src/api/v2/generated/model',
      client: 'vue-query',
      mock: false,
      clean: true,
      override: {
        mutator: {
          path: './src/api/axiosInstance.ts',
          name: 'customInstance'
        }
      }
    },
    input: {
      target: './src/api/v2/swagger.yaml'
    }
  }
})
