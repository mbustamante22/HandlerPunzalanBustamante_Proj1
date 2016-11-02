// Grace Handler
// Professor Congdon
// Data Viz
// September 27, 2016

/*
* This code was adapted from Professor Congdon's lessons using
* Scott Murray's D3 tutorial, with some questions answered via
* StackOverflow and work with other students in class.
*
*/

//Width and height of SVG drawing area
var w = 1000;
var h = 500;
var padding = 50;

var dataset = [
	{
		"country": "France",
		"fullSumUnitPrices": 441.75,
		"fullSumQuantities": 462,
		"perDayData": [
			{
				"date": "12/1/10",
				"sumUnitPrices": 22.75,
				"sumQuantities": 43
			}, {
				"date": "12/3/10",
				"sumUnitPrices": 23.45,
				"sumQuantities": 34
			}, {
				"date": "12/5/10",
				"sumUnitPrices": 66.65,
				"sumQuantities": 70
			}, {
				"date": "12/7/10",
				"sumUnitPrices": 61.45,
				"sumQuantities": 72
			}, {
				"date": "12/8/10",
				"sumUnitPrices": 10.42,
				"sumQuantities": 35
			}, {
				"date": "12/9/10",
				"sumUnitPrices": 95.35,
				"sumQuantities": 93
			}, {
				"date": "12/10/10",
				"sumUnitPrices": 33,
				"sumQuantities": 23
			}, {
				"date": "12/15/10",
				"sumUnitPrices": 67.25,
				"sumQuantities": 67
			}, {
				"date": "12/16/10",
				"sumUnitPrices": 3.65,
				"sumQuantities": 5
			}, {
				"date": "12/17/10",
				"sumUnitPrices": 10.19,
				"sumQuantities": 202
			}, {
				"date": "12/20/10",
				"sumUnitPrices": 62.65,
				"sumQuantities": 73
			}, {
				"date": "12/21/10",
				"sumUnitPrices": 154,
				"sumQuantities": 5
			}, {
				"date": "12/22/10",
				"sumUnitPrices": 3.42,
				"sumQuantities": 23
			}
		],
		"perItemData": [
			{
				"itemName": "POSTAGE",
				"itemOccurences": 17
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Australia",
		"fullSumUnitPrices": 42.5,
		"fullSumQuantities": 40,
		"perDayData": [
			{
				"date": "12/1/10",
				"sumUnitPrices": 21.5,
				"sumQuantities": 19
			}, {
				"date": "12/8/10",
				"sumUnitPrices": 8.25,
				"sumQuantities": 31
			}, {
				"date": "12/14/10",
				"sumUnitPrices": 3.65,
				"sumQuantities": 9
			}, {
				"date": "12/17/10",
				"sumUnitPrices": 15.75,
				"sumQuantities": 19
			}
		],
		"perItemData": [
			{
				"itemName": "DOORMAT UNION FLAG",
				"itemOccurences": 2
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Netherlands",
		"fullSumUnitPrices": 72.85,
		"fullSumQuantities": 167,
		"perDayData": [
			{
				"date": "12/1/10",
				"sumUnitPrices": 2.85,
				"sumQuantities": 97
			}, {
				"date": "12/20/10",
				"sumUnitPrices": 15.29,
				"sumQuantities": 27
			}, {
				"date": "12/21/10",
				"sumUnitPrices": 53.42,
				"sumQuantities": 293
			}
		],
		"perItemData": [
			{
				"itemName": "CHARLOTTE BAG SUKI DESIGN",
				"itemOccurences": 2
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Germany",
		"fullSumUnitPrices": 566.95,
		"fullSumQuantities": 570,
		"perDayData": [
			{
				"date": "12/1/10",
				"sumUnitPrices": 30.95,
				"sumQuantities": 34
			}, {
				"date": "12/2/10",
				"sumUnitPrices": 19.5,
				"sumQuantities": 13
			}, {
				"date": "12/3/10",
				"sumUnitPrices": 22.1,
				"sumQuantities": 26
			}, {
				"date": "12/5/10",
				"sumUnitPrices": 124.75,
				"sumQuantities": 120
			}, {
				"date": "12/6/10",
				"sumUnitPrices": 18.25,
				"sumQuantities": 18
			}, {
				"date": "12/7/10",
				"sumUnitPrices": 28.75,
				"sumQuantities": 20
			}, {
				"date": "12/8/10",
				"sumUnitPrices": 8.65,
				"sumQuantities": 17
			}, {
				"date": "12/9/10",
				"sumUnitPrices": 57,
				"sumQuantities": 40
			}, {
				"date": "12/10/10",
				"sumUnitPrices": 48.45,
				"sumQuantities": 59
			}, {
				"date": "12/13/10",
				"sumUnitPrices": 13.5,
				"sumQuantities": 6
			}, {
				"date": "12/15/10",
				"sumUnitPrices": 19.95,
				"sumQuantities": 6
			}, {
				"date": "12/16/10",
				"sumUnitPrices": 1.65,
				"sumQuantities": 7
			}, {
				"date": "12/17/10",
				"sumUnitPrices": 132,
				"sumQuantities": 115
			}, {
				"date": "12/19/10",
				"sumUnitPrices": 23.189999999999998,
				"sumQuantities": 47
			}, {
				"date": "12/20/10",
				"sumUnitPrices": 27.45,
				"sumQuantities": 50
			}, {
				"date": "12/23/10",
				"sumUnitPrices": 78.55,
				"sumQuantities": 79
			}
		],
		"perItemData": [
			{
				"itemName": "POSTAGE",
				"itemOccurences": 27
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Norway",
		"fullSumUnitPrices": 146.42000000000002,
		"fullSumQuantities": 196,
		"perDayData": [
			{
				"date": "12/1/10",
				"sumUnitPrices": 72.42,
				"sumQuantities": 122
			}, {
				"date": "12/8/10",
				"sumUnitPrices": 73.42,
				"sumQuantities": 97
			}
		],
		"perItemData": [
			{
				"itemName": "FIRST AID TIN",
				"itemOccurences": 2
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "EIRE",
		"fullSumUnitPrices": 411.95,
		"fullSumQuantities": 406,
		"perDayData": [
			{
				"date": "12/1/10",
				"sumUnitPrices": 29.95,
				"sumQuantities": 24
			}, {
				"date": "12/2/10",
				"sumUnitPrices": 5.75,
				"sumQuantities": 8
			}, {
				"date": "12/3/10",
				"sumUnitPrices": 85.65,
				"sumQuantities": 108
			}, {
				"date": "12/6/10",
				"sumUnitPrices": 42.95,
				"sumQuantities": 39
			}, {
				"date": "12/9/10",
				"sumUnitPrices": 35.95,
				"sumQuantities": 37
			}, {
				"date": "12/10/10",
				"sumUnitPrices": 50.85,
				"sumQuantities": 62
			}, {
				"date": "12/16/10",
				"sumUnitPrices": 26.25,
				"sumQuantities": 25
			}, {
				"date": "12/17/10",
				"sumUnitPrices": 68.45,
				"sumQuantities": 79
			}, {
				"date": "12/19/10",
				"sumUnitPrices": 21.25,
				"sumQuantities": 23
			}, {
				"date": "12/20/10",
				"sumUnitPrices": 22.95,
				"sumQuantities": 44
			}, {
				"date": "12/21/10",
				"sumUnitPrices": 30.95,
				"sumQuantities": 34
			}, {
				"date": "12/23/10",
				"sumUnitPrices": 18.75,
				"sumQuantities": 19
			}
		],
		"perItemData": [
			{
				"itemName": "REGENCY CAKESTAND 3 TIER",
				"itemOccurences": 7
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Switzerland",
		"fullSumUnitPrices": 50.95,
		"fullSumQuantities": 78,
		"perDayData": [
			{
				"date": "12/3/10",
				"sumUnitPrices": 7.95,
				"sumQuantities": 35
			}, {
				"date": "12/20/10",
				"sumUnitPrices": 46.65,
				"sumQuantities": 50
			}
		],
		"perItemData": [
			{
				"itemName": "COFFEE MUG PEARS  DESIGN",
				"itemOccurences": 1
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Spain",
		"fullSumUnitPrices": 75.65,
		"fullSumQuantities": 144,
		"perDayData": [
			{
				"date": "12/3/10",
				"sumUnitPrices": 5.65,
				"sumQuantities": 74
			}, {
				"date": "12/9/10",
				"sumUnitPrices": 68.95,
				"sumQuantities": 40
			}, {
				"date": "12/13/10",
				"sumUnitPrices": 21.55,
				"sumQuantities": 55
			}, {
				"date": "12/17/10",
				"sumUnitPrices": 10.95,
				"sumQuantities": 19
			}
		],
		"perItemData": [
			{
				"itemName": "SUKI  SHOULDER BAG",
				"itemOccurences": 1
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Poland",
		"fullSumUnitPrices": 9.55,
		"fullSumQuantities": 39,
		"perDayData": [
			{
				"date": "12/3/10",
				"sumUnitPrices": 9.55,
				"sumQuantities": 39
			}
		],
		"perItemData": [
			{
				"itemName": "HOMEMADE JAM SCENTED CANDLES",
				"itemOccurences": 1
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Portugal",
		"fullSumUnitPrices": 121.95,
		"fullSumQuantities": 125,
		"perDayData": [
			{
				"date": "12/3/10",
				"sumUnitPrices": 8.95,
				"sumQuantities": 12
			}, {
				"date": "12/6/10",
				"sumUnitPrices": 7.95,
				"sumQuantities": 12
			}, {
				"date": "12/8/10",
				"sumUnitPrices": 54.1,
				"sumQuantities": 64
			}, {
				"date": "12/9/10",
				"sumUnitPrices": 13.25,
				"sumQuantities": 24
			}, {
				"date": "12/10/10",
				"sumUnitPrices": 14.65,
				"sumQuantities": 23
			}, {
				"date": "12/14/10",
				"sumUnitPrices": 4.25,
				"sumQuantities": 15
			}, {
				"date": "12/17/10",
				"sumUnitPrices": 24.75,
				"sumQuantities": 33
			}
		],
		"perItemData": [
			{
				"itemName": "POSTAGE",
				"itemOccurences": 6
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Italy",
		"fullSumUnitPrices": 41.25,
		"fullSumQuantities": 52,
		"perDayData": [
			{
				"date": "12/3/10",
				"sumUnitPrices": 24.25,
				"sumQuantities": 35
			}, {
				"date": "12/6/10",
				"sumUnitPrices": 8.5,
				"sumQuantities": 2
			}, {
				"date": "12/21/10",
				"sumUnitPrices": 23.5,
				"sumQuantities": 17
			}
		],
		"perItemData": [
			{
				"itemName": "POSTAGE",
				"itemOccurences": 2
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Belgium",
		"fullSumUnitPrices": 96.1,
		"fullSumQuantities": 106,
		"perDayData": [
			{
				"date": "12/3/10",
				"sumUnitPrices": 13.1,
				"sumQuantities": 23
			}, {
				"date": "12/17/10",
				"sumUnitPrices": 32.75,
				"sumQuantities": 33
			}, {
				"date": "12/21/10",
				"sumUnitPrices": 22.95,
				"sumQuantities": 17
			}, {
				"date": "12/22/10",
				"sumUnitPrices": 37.25,
				"sumQuantities": 60
			}
		],
		"perItemData": [
			{
				"itemName": "POSTAGE",
				"itemOccurences": 5
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Lithuania",
		"fullSumUnitPrices": 35.25,
		"fullSumQuantities": 46,
		"perDayData": [
			{
				"date": "12/5/10",
				"sumUnitPrices": 34.25,
				"sumQuantities": 45
			}, {
				"date": "12/8/10",
				"sumUnitPrices": 2.1,
				"sumQuantities": 30
			}
		],
		"perItemData": [
			{
				"itemName": "FELTCRAFT PRINCESS OLIVIA DOLL",
				"itemOccurences": 2
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Japan",
		"fullSumUnitPrices": 66.55,
		"fullSumQuantities": 70,
		"perDayData": [
			{
				"date": "12/5/10",
				"sumUnitPrices": 17.55,
				"sumQuantities": 21
			}, {
				"date": "12/9/10",
				"sumUnitPrices": 2.55,
				"sumQuantities": 1488
			}, {
				"date": "12/12/10",
				"sumUnitPrices": 48.45,
				"sumQuantities": 107
			}
		],
		"perItemData": [
			{
				"itemName": "SET OF 72 PINK HEART PAPER DOILIES",
				"itemOccurences": 2
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Iceland",
		"fullSumUnitPrices": 32.1,
		"fullSumQuantities": 42,
		"perDayData": [
			{
				"date": "12/7/10",
				"sumUnitPrices": 32.1,
				"sumQuantities": 42
			}
		],
		"perItemData": [
			{
				"itemName": "CAMOUFLAGE EAR MUFF HEADPHONES",
				"itemOccurences": 1
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Channel Islands",
		"fullSumUnitPrices": 23.95,
		"fullSumQuantities": 18,
		"perDayData": [
			{
				"date": "12/9/10",
				"sumUnitPrices": 23.95,
				"sumQuantities": 18
			}
		],
		"perItemData": [
			{
				"itemName": "CARRIAGE",
				"itemOccurences": 1
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Denmark",
		"fullSumUnitPrices": 33.95,
		"fullSumQuantities": 27,
		"perDayData": [
			{
				"date": "12/9/10",
				"sumUnitPrices": 33.95,
				"sumQuantities": 27
			}
		],
		"perItemData": [
			{
				"itemName": "POSTAGE",
				"itemOccurences": 1
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Cyprus",
		"fullSumUnitPrices": 84.55,
		"fullSumQuantities": 146,
		"perDayData": [
			{
				"date": "12/14/10",
				"sumUnitPrices": 84.55,
				"sumQuantities": 146
			}
		],
		"perItemData": [
			{
				"itemName": "FELTCRAFT PRINCESS CHARLOTTE DOLL",
				"itemOccurences": 2
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Sweden",
		"fullSumUnitPrices": 30.95,
		"fullSumQuantities": 266,
		"perDayData": [
			{
				"date": "12/14/10",
				"sumUnitPrices": 5.95,
				"sumQuantities": 241
			}, {
				"date": "12/17/10",
				"sumUnitPrices": 24.29,
				"sumQuantities": 600
			}
		],
		"perItemData": [
			{
				"itemName": "SET OF 3 BABUSHKA STACKING TINS",
				"itemOccurences": 2
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Austria",
		"fullSumUnitPrices": 8.42,
		"fullSumQuantities": 56,
		"perDayData": [
			{
				"date": "12/15/10",
				"sumUnitPrices": 0.42,
				"sumQuantities": 48
			}, {
				"date": "12/17/10",
				"sumUnitPrices": 15.5,
				"sumQuantities": 15
			}
		],
		"perItemData": [
			{
				"itemName": "POSTAGE",
				"itemOccurences": 1
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Israel",
		"fullSumUnitPrices": 4.8100000000000005,
		"fullSumQuantities": 25,
		"perDayData": [
			{
				"date": "12/15/10",
				"sumUnitPrices": 4.8100000000000005,
				"sumQuantities": 25
			}
		],
		"perItemData": [
			{
				"itemName": "SPACEBOY TV DINNER TRAY",
				"itemOccurences": 1
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Finland",
		"fullSumUnitPrices": 16.55,
		"fullSumQuantities": 88,
		"perDayData": [
			{
				"date": "12/16/10",
				"sumUnitPrices": 16.55,
				"sumQuantities": 88
			}
		],
		"perItemData": [
			{
				"itemName": "PACK OF 60 PINK PAISLEY CAKE CASES",
				"itemOccurences": 2
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}, {
		"country": "Bahrain",
		"fullSumUnitPrices": "3.81",
		"fullSumQuantities": "54",
		"perDayData": [
			{
				"date": "12/20/10",
				"sumUnitPrices": 3.81,
				"sumQuantities": 54
			}
		],
		"perItemData": [
			{
				"itemName": "OCEAN SCENT CANDLE IN JEWELLED BOX",
				"itemOccurences": 1
			}
		],
		"uniqueDays": [],
		"uniqueItems": []
	}
];


// Define the div for the tooltip
var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);
    
//Create scale functions
//  this is apparently confusing, though they are so helpful!
//  you have numbers on one range, and you need to scale them to another
//  you might have 20 vertical bars to draw, for example, but they need to fit
//    within a certain number of pixels. The scale function can convert the
//    bar number to pixel coordinates
var xScale = d3.scale.linear().domain([0, d3.max(dataset, function(d, i) { //sum quant
	return d.fullSumQuantities;
})]).range([padding, w - padding * 2]);

var yScale = d3.scale.linear().domain([0, d3.max(dataset, function(d, i) { //sum unit
	return d.fullSumUnitPrices;
})]).range([h - padding, padding]);

var rScale = d3.scale.linear().domain([0, d3.max(dataset, function(d, i) {
	return d.fullSumQuantities/50;
})]).range([0, 20]);

var formatAsPercentage = d3.format(".1%");

// this block of code is defining the axes (but not drawing them)
// Note that it doesn't actually have anything to do with the fact that
// we're plotting dots and the x axis and y axis are two distinct things

//Define X axis
var xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(5);

//Define Y axis
var yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(5);

// we are all the way down here before we actually start making SVG elements
// this time, we're drawing circles instead of rects

//Create SVG element
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

//Create circles
svg.selectAll("circle").data(dataset).enter().append("circle").attr("cx", function(d, i) {
	return xScale(d.fullSumQuantities);
}).attr("cy", function(d, i) {
	return yScale(d.fullSumUnitPrices);
}).attr("r", function(d, i) {
	return rScale(d.fullSumQuantities/50);
}).style("fill", "white").style("stroke", "black").on("mouseover", function(d) {		
            div.transition()		
                .duration(200)		
                .style("opacity", .9);		
            div.html("Country: " + d.country + "</br>Full Sum Unit Prices: $" + 
            d.fullSumUnitPrices + "</br>Full Sum Quantities: " + d.fullSumQuantities)
    
            })					
        .on("mouseout", function(d) {		
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        });;;

//Create labels
svg.selectAll("text").data(dataset).enter().append("text").text(function(d, i) {
	return "";
}).attr("x", function(d, i) {
	return xScale(d.fullSumQuantities);
}).attr("y", function(d, i) {
	return yScale(d.fullSumUnitPrices);
}).attr("font-family", "sans-serif").attr("font-size", "8px").attr("fill", "red")


// here, in the SVG section, we actuall draw the axes
// note that there are CSS elements (in that file)
//   that control how these look.

//Create X axis
svg.append("g").attr("class", "axis").attr("transform", "translate(0," + (h - padding) + ")").call(xAxis);

//Label X axis
svg.append("text").attr("transform", "translate(" + (w / 2) + "," + (h - padding / 2 + 20) + ")").style("text-anchor", "middle").text("Total Number of Items Bought per Country in December").attr("font-family", "sans-serif").attr("font-size", "15px").attr("fill", "black");

//Create Y axis
svg.append("g").attr("class", "axis").attr("transform", "translate(" + padding + ",0)").call(yAxis);

//Label Y Axis
svg.append("text").attr("transform", "rotate(-90)").attr("x", -250).attr("y", padding - 30).style("text-anchor", "middle").text("Sum of Unit Prices per Country for December (USD)").attr("font-family", "sans-serif").attr("font-size", "15px").attr("fill", "black");

//Create title
svg.append("text").attr("x", w / 2).attr("y", padding - 30).attr("text-anchor", "middle").text("Number of Items Bought vs. Sum of Unit Prices per Country in December").attr("font-family", "sans-serif").attr("font-size", "15px").attr("fill", "black").style("text-decoration", "underline");

