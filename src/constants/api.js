export const envs = {
  DEVELOPMENT: 'dev',
  STAGING: 'staging',
  PRODUCTION: 'prod'
}

window.ENV = envs.DEVELOPMENT;

export const host = {
  [envs.DEVELOPMENT]: {
    HY_SERVICE: "http://localhost:8080",
  },
  [envs.PRODUCTION]: {
    HY_SERVICE: "http://api.hayum.in"
  }
};

export function resolveHost() {
  switch (window.ENV) {
    case envs.DEVELOPMENT:
      return host[envs.DEVELOPMENT].HY_SERVICE;
    default:
      return host[envs.PRODUCTION].HY_SERVICE;
  }
}
