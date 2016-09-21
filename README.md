# ksrv:datatables-ru
Language file for jQuery dataTables plugin.

## Installation

```
$ meteor add ksrv:datatables-ru
```

## Usage

```js
import { DataTablesRu } from 'meteor/ksrv:datatables-ru';

Template.noname.helpers({
    options () {
        return {
            ...
            language: DataTableRu
            ...
        }
    }
})
```

See [ksrv:datatables](https://atmospherejs.com/ksrv/datatables), [ksrv:datatables-bootstrap3](https://atmospherejs.com/ksrv/datatables-bootstrap3)
