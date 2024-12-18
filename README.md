# omio specification

This repository contains information about omio file format usd by Sitemarker.

## About omio

The `.omio` file is used by [Sitemarker](https://aerocyber.github.io/sitemarker) for exporting records.

This is version **4.0.0**

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
    "Omio Version": "4.1.2",
    "Data Hash": <SHA 256 hash of the Data section>,
    "Record Count": <Number of records in Data section>,
    "Created On": <Timestamp of when the file was created>
  },
  "Data": {
    <Name>: {
      "URL": <Valid URL>,
      "Categories": <Tags separated by comma(,)>,
      "Added On": <Date-time of when the record was added>
    }
  }
  "Omio Info": {
    "Header Hash": <SHA 256 hash of the Header section treated as a json>
  }
}
```
