function checkHead(head_sample) {
    /**
   * Check if the number of items in 'Header' is more than one.
   * Then check if the key is 'Omio Version'.
   * Check the version of omio spec used.
   * If either of the tests fail, return an error status. Else a success status.
   */
    try {
        var head_items_count = head_sample.keys().length;
        if (head_items_count > 1) {
            return {
                Status: "Invalid",
                Error: "Number of parameters exceeded in header.",
            };
        } else {
            if (!("Omio Version" in head_sample.keys())) {
                return {
                    Status: "Invalid",
                    Remark: "'Omio Version' parameter not found in header.",
                };
            }
        }
        if (head_sample['Omio Version'] != '3.0') {
            return {
                Status: "Invalid",
                Remark: "Invalid version of Omio spec used.",
            };
        }
        return {
            Status: "Valid",
            Remark: "Valid header found.",
        };
    } catch (error) {
        return {
            Status: "Invalid",
            Remark: "Encountered error.",
        };
    }
}

function checkFooter(footer_sample) {
    /**
   * Check if the number of items in 'Header' is more than one.
   * Then check if the key is 'Omio Version'.
   * Check the version of omio spec used.
   * If either of the tests fail, return an error status. Else a success status.
   */
    try {
        var footer_items_count = head_sample.keys().length;
        if (footer_items_count > 1) {
            return {
                Status: "Invalid",
                Error: "Number of parameters exceeded in footer.",
            };
        } else {
            if (!("Omio Version" in footer_sample.keys())) {
                return {
                    Status: "Invalid",
                    Remark: "'End of DB' parameter not found in footer.",
                };
            }
        }
        if (footer_sample['End of DB'] != 'true') {
            return {
                Status: "Invalid",
                Remark: "DB End not true.",
            };
        }
        return {
            Status: "Valid",
            Remark: "Valid footer found.",
        };
    } catch (error) {
        return {
            Status: "Invalid",
            Remark: "Encountered error.",
        }
    }
}


function checkData(data_sample) {
    /**
     * Try parsing `data_sample` as JSON.
     * Try validating to a json schema.
     */
    try {
        let _dat = JSON.parse(data_sample);
        let keys_ = _dat.keys();
        for (let x = 0; x < keys_.length; x++) {
            let _d = _dat[keys_[x]];
            let _null = _d === null ? true : false;
            let _array = (_d instanceof Array);
            let _type = typeof(_d); // The above checks are to make sure the types are correct.
            if (_null || _array || _type != 'string') {
                return {
                    "Status": "Invalid",
                    "Remark": "Invalid type encountered in " + keys_[x] + "."
                }
            }
            // _d is of structure: {"URL": <String>,"Categories": <Array>}
            // Checking them now...
            if (_d.keys().length != 2){
                return {
                    "Status": "Invalid",
                    "Remark": "Invalid number of keys in Data item."
                };
            }

            _kys = ['URL', 'Categories'];

            for (let y = 0; y < _kys.length; y++){
                if (!(_kys[y] in _d.keys)) {
                    return {
                        "Status": "Invalid",
                        "Remark": _kys[y] + " parameter not found in Data."
                    }
                }
            }
        }
        return {
            "Status": "Valid",
            "Remark": "Type check on data successful and is valid."
        };
    } catch (error) {
        return {
            Status: "Invalid",
            Remark: "Encountered error.",
        };
    }
}


    function checkStructure(json_doc) {
        /**
         * Check the file structure by verifying the doc has 'Header', 'Data' and 'Footer'.
         */
        let keys_ = json_doc.keys();
        let keys_list = ['Header', 'Data', 'Footer'];
        for (let x = 0; x < keys_.length; x++) {
            if (!(keys_list[x] in keys_)) {
                return {
                    "Status": "Invalid",
                    "Error": keys_list[x] + " not present in the omio file's structure."
                }
            }
        }
    }

    function validateFile(input_) {
        /**
         * Read the file.
         * Check the structure of file.
         * Trigger the modal with appropriate message.
         */
        let file = input_.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            let _response = reader.result;
            let json = JSON.parse(_response);
            console.log(json);
            let struc_ = checkStructure(json);
            let header_ = checkHead(json["Header"]);
            let data_ = checkData(json['Data']);
            let footer_ = checkData(json['Footer']);
            let _validity;
            if (struc_['Status'] == 'Invalid') {
                _validity = struc_['Remark'];
            } else if (header_['Status'] == 'Invalid') {
                _validity = header_['Remark'];
            } else if (data_['Status'] == 'Invalid') {
                _validity = data_['Remark'];
            } else if (footer_['Status'] == 'Invalid') {
                _validity = footer_['Remark'];
            } else {
                _validity = "The omio file is found to be valid.";
            }
            let _html_response;
            if (!(_validity === "The omio file is found to be valid.")){
                _html_response = '<span style="color: red">' + _validity + '</span>';
            } else {
                _html_response = '<span style="color: green">' + _validity + '</span>';
            }

            document.getElementById("analysis-result").innerHTML = _html_response;
            UIKit.modal('#result').show();
        }
        reader.onerror = function () {
            let _response = reader.error;
            document.getElementById("analysis-result").innerHTML = '<span style="color: red">' + _response + '</span>';
            UIKit.modal('#result').show();
        }
    }
