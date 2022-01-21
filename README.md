# omio specification

This repository contains information about omio file format and a checker for omio format compatibility.

## About omio

Osmata stores all the osmations (technical name of bookmarks in Osmata) in a file with the extension `.omio`.

This is version **1.0.0**

## License

osmata-spec
© 2021 by aerocyber is licensed under CC BY 4.0

## Links

[My profile](https://github.com/aerocyber)

[Project page](https://aerocyber.github.io/osmata-spec)

[License](http://creativecommons.org/licenses/by/4.0/)

## spec

```json
{
    "Header": {
      "Omio Version": "2.0",
      "Restricted": "true if omio is password protected: <bool>",
      "Password Hash": "Empty if omio is not password protected: <string>",
    },
    "Data": "JSON string of following format: <string> (see note)",
    "Footer": {
      "End of DB": true,
    },
  };
```

Note:

- `Omio Version` is the version of omio file format.
- `Restricted` is `true` if omio is password protected.
- `Password hash` is the SHA256 hash of the password.
- `Data` is a JSON string of following format:

```json
{
  "<Name>": {
    "URL": "<URL>::<string>",
    "Category": "<Category>::<Array of string>"
  }
 ...
}
```

- `End of DB` is `true` to indicate the end of file.

This omio spec is divided into three sections:
