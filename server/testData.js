var date1 = new Date('2015-04-29T14:56:59.301Z');
var date2 = new Date('2015-04-30T14:56:59.301Z');
var date3 = new Date('2015-05-01T14:56:59.301Z');
var date4 = new Date('2015-05-02T14:56:59.301Z');
var date5 = new Date('2015-05-03T14:56:59.301Z');
var date6 = new Date('2015-05-04T14:56:59.301Z');
var date7 = new Date('2015-05-05T14:56:59.301Z');

db.campaigns.insert([{
	"name": "Sample Target 1",
	"impressions": [
		{date: date1, value: 2348},
		{date: date2, value: 4646},
		{date: date3, value: 6638},
		{date: date4, value: 6058},
		{date: date5, value: 2927},
		{date: date6, value: 4039},
		{date: date7, value: 66}
	],
	"clicks": [
		{date: date1, value: 233432},
		{date: date2, value: 4135345},
		{date: date3, value: 1423213},
		{date: date4, value: 433422},
		{date: date5, value: 2234},
		{date: date6, value: 354543},
		{date: date7, value: 23242}
	],
	"ctr": [
		{date: date4, value: 678},
		{date: date5, value: 34},
		{date: date6, value: 234}
	],
	"conversions": [
		{date: date4, value: 56},
		{date: date5, value: 4},
		{date: date6, value: 456}
	],
	"cost": 234324,
	"budget": 345345
},
{
	"name": "Sample Target 2",
	"impressions": [
		{date: date1, value: 2931},
		{date: date2, value: 1928},
		{date: date3, value: 2392},
		{date: date4, value: 2211},
		{date: date5, value: 1856},
		{date: date6, value: 2388},
		{date: date7, value: 50}
	],
	"clicks": [
		{date: date1, value: 23432},
		{date: date2, value: 435345},
		{date: date3, value: 123213},
		{date: date4, value: 43422},
		{date: date5, value: 234},
		{date: date6, value: 34543},
		{date: date7, value: 2342}
	],
	"ctr": [
		{date: date4, value: 123},
		{date: date5, value: 432},
		{date: date6, value: 523}
	],
	"conversions": [
		{date: date4, value: 12},
		{date: date5, value: 5},
		{date: date6, value: 34}
	],
	"cost": 1231,
	"budget": 3481
}])
