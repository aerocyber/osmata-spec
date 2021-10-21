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
    "Header" : {
        "Program Name": "string",
        "Program version": "string",
        "Omio Spec version": "string",
        "Additional info": "Map"
    },
    "Data": {
        [
            {
                "Name": "string",
                "Url": "string",
                "Category": "Array of string"
            },
            "..."
        ]
    },
    "Footer": {
        "Last Modified On": "string",
        "Last Modified At": "string",
        "Omio Author": "string"
    }
}
```

This omio spec is divided into three sections:

- Header
- Data
- Footer

### Header

Apart from `Omio Spec version`, none of the others are mandatory.

- `Program Name`:: Optional:: Name of the program with which omio is written.
- `Program version`:: Optional:: Version of the program with which the omio is written.
- `Omio Spec version`:: Required:: The omio format version.
- `Additional info`:: Optional with **NO RECOMMENDATION OF PERSONAL DETAILS**:: Additional program specific details.

### Data

- `Name`:: Required:: Name given to the mapped URL
- `Url`:: Required:: Url to be osmated
- `Category`:: Optional:: For sorting in supported apps, Category contains list of string

### Footer

- `Last Modified On`:: Optional:: Last Date at which the omio was modified
- `Last Modified At`:: Optional:: Last Time at which the omio was modified
- `Omio Author`:: Optional:: Name of the person who actually created the omio file
