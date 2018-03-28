const csv = require("csvtojson");
const path = 'primaryschool.csv';
const fs = require("fs");

csv().fromFile(path).on('end_parsed', function(jsonObj) {
    var json = jsonObj;
    utility(json);

});

function utility(jdata) {
    var arr = {};
    var moi = {};
    var density = {};
    var cat = {};
    var district = [];
    var catName = [];
    var moiName = [];

    jdata.forEach(function(curr) {

        if (district.indexOf(curr.district_name) < 0) {
            district.push(curr.district_name);
        }
        if (catName.indexOf(curr.cat) < 0) {
            catName.push(curr.cat);
        }
        if (moiName.indexOf(curr.moi) < 0) {

            moiName.push(curr.moi);

        }
        density[curr.district_name] = (density[curr.district_name] || 0) + 1;

        if (typeof(moi[curr.district_name]) !== 'object') {
            moi[curr.district_name] = {};
        }

        moi[curr.district_name][curr.moi] = (moi[curr.district_name][curr.moi] || 0) + 1;

        if (typeof(cat[curr.district_name]) !== 'object') {
            cat[curr.district_name] = {};
        }
        cat[curr.district_name][curr.cat] = (cat[curr.district_name][curr.cat] || 0) + 1;
    });
    //console.log(cat);
    arr["district"] = district;
    arr["densityofschool"] = density;
    arr["category"] = cat;
    arr["mediumofinstruction"] = moi;
    arr["categoryname"] = catName;
    arr["moiname"] = moiName;

    fs.writeFile("webapp/data.json", JSON.stringify(arr), 'utf8');
}