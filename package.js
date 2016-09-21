Package.describe({
  name:     'ksrv:datatables-ru',
  version:  '0.0.1',
  summary:  'Language file for jQuery dataTables plugin.',
  git:      'https://github.com/ksrv/datatables-ru',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');
  api.export('DataTablesRu', ['client']);
  api.mainModule('datatables-ru.js', ['client']);
});
