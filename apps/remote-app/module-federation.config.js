module.exports = {
  name: 'remote-app',
  exposes: {
    './RemoteAppModule': 'apps/remote-app/src/app/remote-entry/entry.module.ts',
  },
};
