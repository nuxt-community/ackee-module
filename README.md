# @nuxtjs/ackee

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Track without being tracked on Nuxt 2 with [Ackee analytics](https://ackee.electerious.com)

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [📖 &nbsp;Read the documentation](https://ackee.nuxtjs.org)

## Setup

1. Add `@nuxtjs/ackee` dependency to your project

```bash
yarn add @nuxtjs/ackee # or npm install @nuxtjs/ackee
```

2. Add `@nuxtjs/ackee` to the `buildModules` section of `nuxt.config.js`

```js
{
  buildModules: [
    '@nuxtjs/ackee',
  ],
  ackee: {
    server: 'https://example.com',
    domainId: 'xxx-xxx-xxx'
    // see documentation for more!
  }
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install`
3. Start development server using `yarn dev`

## License

[MIT License](./LICENSE)

Thanks to [Sergey Bedritsky](https://github.com/bdrtsky) for the initial implementation and transfer to the community of [nuxt-ackee](https://github.com/bdrtsky/nuxt-ackee).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/ackee/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/ackee
[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxtjs/ackee.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/ackee
[github-actions-ci-src]: https://github.com/nuxt-community/ackee-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/ackee-module/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/ackee-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/ackee-module
[license-src]: https://img.shields.io/npm/l/@nuxtjs/ackee.svg
[license-href]: https://npmjs.com/package/@nuxtjs/ackee
