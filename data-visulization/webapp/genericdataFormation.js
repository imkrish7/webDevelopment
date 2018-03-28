function genericFormat(district, names) {
    var ps = [];
    names.forEach(function(curr) {
        ps.push({
            name: curr,
            data: []
        });
    });
    Object.keys(district).forEach(function(key) {
        names.forEach(function(curr, index) {
            if (district[key][curr] > 0)
                ps[index].data.push(district[key][curr]);
            else
                ps[index].data.push(0);
        });
    });
    return ps;
}