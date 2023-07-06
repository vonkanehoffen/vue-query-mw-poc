import { defineConfig } from 'orval';

/**
 * Orval config
 * This defines how the API layer is generated from our swagger docs.
 */
export default defineConfig({
  /**
   * Liftshare Private API & Mobilityways V2 API
   * Note we're in the process of moving everything to V2, hence generating from both specs for now.
   * Also "client" as separate for auth things.
   *
   * @see https://interface-dev.liftshare.com/swagger/index.html?urls.primaryName=Liftshare%20Private%20API%201.0.0
   * @see https://interface-dev.liftshare.com/swagger/index.html?urls.primaryName=Mobilityways%20API%202.0.0
   */
  liftshareClient: {
    output: {
      mode: 'tags-split',
      target: './src/api/client/generated/liftshare-client.ts',
      schemas: './src/api/client/generated/model',
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
      target: './src/api/client/swagger.yaml'
    }
  },
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
});
