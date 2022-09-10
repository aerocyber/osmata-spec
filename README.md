# omio specification

This repository contains information about omio file format and a validator for omio format compatibility.

## About omio

Osmata stores all the osmations (technical name of bookmarks in Osmata) in a file with the extension `.omio`.

This is version **3.0.0**

## License

osmata-spec
© 2021 by aerocyber is licensed under CC BY 4.0

## Links

[omio file validator](https://aerocyber.github.io/osmata-spec/tester)
[My profile](https://github.com/aerocyber)

[Project page](https://aerocyber.github.io/osmata-spec)

[License](http://creativecommons.org/licenses/by/4.0/)

## spec

```json
{
  "Header": {
    "Omio Version": "3.0"
  },
  "Data": "JSON string of specific format: <string> (see note)",
  "Footer": {
    "End of DB": 'true',
  }
}
```

Note:

- `Omio Version` is the version of omio file format.
- `Data` is a JSON string of following format:

```json
{
  "<Name>": {
    "URL": "<URL>::<string>",
    "Categories": "<Category>::<Array of string>"
  }
}
```

- `End of DB` is `true` to indicate the end of file.
- `<Name>` is to be replaced with the name of the item.
- `<Name>` is of type `string`
