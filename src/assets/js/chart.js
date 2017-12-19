

var SinltonUserInfo = (function () {
    var instance;
    var UserInfo = function () {
        this.TimeInterval = 1000;
        this.myIntr;
        this.Speed;

        this.Record = [
    {

        "Name": "P",
        "index": 8,
        "track": 100,
        "Score": 20,
        "color": "#ffed97",
        "trackcolor": "#dee5eb",
        "labelText": "Data"
    },
	{

	    "Name": "P",
	    "index": 7,
	    "track": 100,
	    "Score": 88,
	    "color": "#9f81c4",
	    "trackcolor": "#dee5eb",
	    "labelText": "Data"
	},
	{

	    "Name": "P",
	    "index": 6,
	    "track": 100,
	    "Score": 55,
	    "color": "#55bae6",
	    "trackcolor": "#dee5eb",
	    "labelText": "Data"
	},
	{

	    "Name": "P",
	    "index": 5,
	    "track": 100,
	    "Score": 26,
	    "color": "#9bd78d",
	    "trackcolor": "#dee5eb",
	    "labelText": "Data"
	},
	{

	    "Name": "P",
	    "index": 4,
	    "track": 100,
	    "Score": 10,
	    "color": "#9bd78d",
	    "trackcolor": "#dee5eb",
	    "labelText": "Data"
	},
	{

	    "Name": "P",
	    "index": 3,
	    "track": 100,
	    "Score": 85,
	    "color": "#9bd78d",
	    "trackcolor": "#dee5eb",
	    "labelText": "Data"
	},
	{

	    "Name": "P",
	    "index": 2,
	    "track": 100,
	    "Score": 48,
	    "color": "#7acfbd",
	    "trackcolor": "#dee5eb",
	    "labelText": "Data"
	}

        ];

        this.da = [{ "Name": "P", "index": 6, "track": 100, "Score": 85, "color": "#ffdf10", "trackcolor": "#dee5eb", "labelText": "Data" },
        { "Name": "P", "index": 5, "track": 100, "Score": 80, "color": "#f15264", "trackcolor": "#dee5eb", "labelText": "Data" },
        { "Name": "P", "index": 4, "track": 100, "Score": 75, "color": "#4ad5f6", "trackcolor": "#dee5eb", "labelText": "Data" },
        { "Name": "P", "index": 3, "track": 100, "Score": 65, "color": "#626dc7", "trackcolor": "#dee5eb", "labelText": "Data" },
        { "Name": "P", "index": 2, "track": 100, "Score": 42, "color": "#4fc69c", "trackcolor": "#dee5eb", "labelText": "Data" }],

        this.MainDa = this.da;
        this.CircleNumber = this.da.length + 1;
        this.radiusNumber = 0;
        this.dataset = [];
        this.dataset1 = [];

    };

    UserInfo.prototype = {
        SetFirstData: function (objlitrl) {
            this.dataset1 = []
            this.dataset1.push({
                "Name": objlitrl["Name"],
                "index": this.CircleNumber,
                "track": objlitrl["track"],
                "Score": objlitrl["Score"],
                "color": objlitrl["color"],
                "trackcolor": objlitrl["trackcolor"],
                "labelText": objlitrl["labelText"]
            })
        },
        GetData: function () {
            this.dataset = [{
                "Name": this.da[0]["Name"],
                "index": this.CircleNumber,
                "track": this.da[0]["track"],
                "Score": this.da[0]["Score"],
                "color": this.da[0]["color"],
                "trackcolor": this.da[0]["trackcolor"],
                "labelText": this.da[0]["labelText"]
            }];
            return this.dataset;
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = new UserInfo();
            }
            return instance;
        }
    };
})();



var uinfo = SinltonUserInfo.getInstance();


InitChart();
function InitChart() {

    var width = window.innerWidth > 560 ? 560 : window.innerWidth,
        height = window.innerHeight > 600 ? 600 : window.innerHeight,
        radius = Math.min(width, height) / 2 + 130,
        spacing = .07;

    var drawArc = d3.svg.arc()
    .cornerRadius(20)
        .innerRadius(function (d) { return d.index / 10 * radius; })
        .outerRadius(function (d) { return (d.index / 10 + spacing) * radius; })
        .startAngle(0);

    var drawArcTrack = d3.svg.arc()
    .innerRadius(function (d) { return d.index / 10 * radius; })
    .outerRadius(function (d) { return (d.index / 10 + spacing) * radius; })
    .startAngle(90);


    var s = d3.select("#Container").data(uinfo.GetData()).append("svg")
            .attr('width', width)

        .attr('class', 'chart')
        .attr("viewBox", "0 0 600 690")
        .attr("preserveAspectRatio", "xMidYMid")

        .append('g')
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


    //creating background circle



    var s1 = s.append("circle")
        .attr("fill", "#ffffff")
        .attr("stroke", "#dfe5e6")
        .attr("stroke-width", 1)
        .attr('r', ((radius * 11.20 / 100) * uinfo.CircleNumber) + 0.09 + uinfo.radiusNumber);

    //31*(parseInt(uinfo.CircleNumber)+0.09)


    CreateTrack();
    //setTimeout(function(){
    CreatPath(uinfo.GetData());

    //},200);

    var subtract = (function () {
        var counter = uinfo.CircleNumber;
        return function () {
            return counter -= 1;
        }
    })();


    var Add = (function () {
        var value = 10;
        return function () { return value += 15; }
    })();

    var GetNextIndex = (function () {
        var _jsnIndex = 0;
        return function () { return _jsnIndex += 1; }
    })();


    function CreateTrack() {

        var arc = s.selectAll("g")
           .data(uinfo.da)
            .enter()
              .append("path")
             .attr("fill", function (d) { return d.trackcolor })
            .attr('class', 'arc')
            .attr('d', drawArc);

        //transition arc path from start angle to end angle
        arc.transition()
             .ease('elastic')
            .call(arcTweenTrack, this);

    }


    function CreatPath(dtt) {
        var arc = s.selectAll("g")
           .data(dtt)
            .enter()
              .append("path")
             .attr("fill", function (d) { return d.color; })
            .attr('class', 'arc')
            .attr('d', drawArc);

        //transition arc path from start angle to end angle
        arc.transition()
            .duration(function (d) { return (d.Score * uinfo.TimeInterval) / uinfo.da[0]["Score"] })
            .delay(0)
            .ease('fluid')
            .call(arcTween, this);
    }





    function arcTween(transition, newAngle) {

        transition.attrTween("d", function (d) {

            var interpolate = d3.interpolate(Math.PI / 4, (360 * (d['Score'] / 100) * Math.PI / 180));
            // setTimeout(function(){
            RecreateCircle();

            //},(d.Score*uinfo.TimeInterval)/uinfo.da[0]["Score"]);
            return function (t) {
                d.endAngle = interpolate(t)
                return drawArc(d);
            };
        });
    }


    function RecreateCircle() {
        var _vv = Add();
        var _ind = subtract();

        var jsonCount = GetNextIndex();
        if (jsonCount < uinfo.da.length) {
            uinfo.GetData()[0]["Score"] = uinfo.da[jsonCount]["Score"];
            uinfo.GetData()[0]["index"] = _ind;
            var dat1 = [{ "Name": uinfo.da[jsonCount]["Name"], "index": _ind, "Score": uinfo.da[jsonCount]["Score"], "color": uinfo.da[jsonCount]["color"], "labelText": uinfo.da[jsonCount]["labelText"] }];
            CreatPath(dat1);
        }
    }

    function arcTweenTrack(transition, newAngle) {

        transition.attrTween("d", function (d) {
            var interpolate = d3.interpolate(90, 360 * (d['track'] / 100) * Math.PI / 180);
            return function (t) {
                d.endAngle = interpolate(t)
                return drawArcTrack(d);
            };
        });
    }

    var chart = $(".chart"),
        aspect = chart.width() / chart.height(),
        container = chart.parent();
    $(window).on("resize", function () {
        var targetWidth = container.width();
        chart.attr("width", targetWidth);
        chart.attr("height", Math.round(targetWidth));
    }).trigger("resize");

}
