
/*************************
     Default Settings
 *************************/

// Settings
var settings = {

  // Save data
  data : null,

  // Feature Group representation of data
  layers : [],

  // Target API URL
  API_url : (window.location.href.indexOf("herokuapp.com") > -1) ? "http://g-player.herokuapp.com/api/" : "http://localhost:5000/api/",

  // enable heatmap
  heatmap : true,

  // enable player paths
  paths : true,

  // Default Game
  game : "Fallout New Vegas",

  // Current Map
  map : null,

  // Current overlay
  overlay : null,

};

/******************************
        config.js
 ******************************/

// Available options
var options = {};

options.actions = [];

options.games = [
	"Fallout New Vegas", 
	"League of Legends", 
	"Quake 3",
	"Game Gaze",
];


options.maps = [{

    // Save map configuration
    name: "Position_Introhouse",
    game: "Fallout New Vegas",
    url: "http://i.imgur.com/zWbog8y.jpg",

    // Map player locations to their points
    // on the map. Define the corners.
    bottom : -836,
    left : -823,
    
    top : 2463,
    right : 2977,

}, {

    // Save map configuration
    name: "Position_Outside",
    game: "Fallout New Vegas",
    url: "http://i.imgur.com/sSYRyve.jpg",
	

    // Map player locations to their points
    // on the map. Manually offset for accuracy.
    // Multiplied to base
    
    bottom : -13981,
    left : -7682,

    top : 14735,
    right : 20151,

}, {

    // Save map configuration
    name: "Position_Bar",
    game: "Fallout New Vegas",
    url: "http://i.imgur.com/9lo12qd.jpg",
	
    // Map player locations to their points
    // on the map. Manually offset for accuracy.
    // Multiplied to base

    bottom : 70,
    left : 1020,

    top : 1248,
    right : 2620,

}, {

    // Save map configuration
    name: "Position_AbandonedHouse",
    game: "Fallout New Vegas",
    url: "http://i.imgur.com/kMyybLB.jpg",
	
    // Map player locations to their points
    // on the map. Manually offset for accuracy.
    // Multiplied to base

    bottom : -1948,
    left : 21,

    top : 1678,
    right : 1621,

}, {

    // Save map configuration
    name: "Position_Cave",
    game: "Fallout New Vegas",
    url: "http://i.imgur.com/ynqOvIh.png",
	
    // Map player locations to their points
    // on the map. Manually offset for accuracy.
    // Multiplied to base

    bottom : 0,
    left : 0,

    top : 100,
    right : 100,

}, {

    // Save map configuration
    name: "Position_SheriffOffice",
    game: "Fallout New Vegas",
    url: "http://i.imgur.com/kMPpXSW.jpg",
	
    // Map player locations to their points
    // on the map. Manually offset for accuracy.
    // Multiplied to base

    bottom : 590,
    left : 1490,

    top : 1950,
    right : 2428,

}, {

    // Save map configuration
    name: "Position_Mine",
    game: "Fallout New Vegas",
    url: "http://i.imgur.com/2j0T2C0.jpg",
	
    // Map player locations to their points
    // on the map. Manually offset for accuracy.
    // Multiplied to base

    bottom : 0,
    left : 0,

    top : 100,
    right : 100,

}, {

    // Save map configuration
    name: "Position_Hotel",
    game: "Fallout New Vegas",
    url: "http://i.imgur.com/sKG9eRI.jpg",
	
    // Map player locations to their points
    // on the map. Manually offset for accuracy.
    // Multiplied to base

    bottom : 170,
    left : 60,

    top : 4200,
    right : 4310,

}, {

    // Save map configuration
    name: "Map",
    game: "League of Legends",
    url: "/leagueoflegends/map.jpg",


    // Map player locations to their points
    // on the map. Manually offset for accuracy.
    // Multiplied to base
    top : 0,
    bottom : 0,
    left : 0,
    right : 0,
}];


/******************************
        key-mappings.js 
 ******************************/

/*

 Initialized by Alex Johnson
 With work from Alex Jacks

 This file stores a number of key-mapping
 settings for converting .csv files
 into their relvant JSON data files.

 Essentially, when a user imports a .csv
 file, we do not know WHICH column represents
 which data field.

 To solve this problem, we store an internal
 set of "kay-mappings". Using the first value
 of a .csv row, we can decide the "type" of 
 action that row represents.

 For example, if the first row is "Position_Bar",
 We know that the data represents a player position
 and a specific point, thus we can use the 
 key mapping for "position"s. This allows us
 to correlate columns 1->9 with their key.
 
 */


/* 

This is a lookup table.
The first column of a row will always
tell us the name of the action. Using
this name, we fetch the corresponding
key mapping.

*/

// Lookup Table for Mapping action 
// name to action type.

options.lookup_table = {

	"Attacked" : "action",
	"CraftingTable" : "craft",
	"Creature Giant Rat attacked first" : "ratattack",
	"Dialogue" : "dialogue",

	"InteractionContainer" : "interaction",
	"InteractionDoor" : "interactionNoTarget",
	"InteractionInterior" : "interaction",
	"InteractionNPC" : "interaction",
	"InteractionObject" : "interaction",
	
	"NPC Bean attacked first" : "attacked",
	"NPC Bobby D attacked first" : "attacked",
	"NPC Collin attacked first" : "attacked",
	"NPC Dough attacked first" : "attacked",
	"NPC JD attacked first" : "attacked",
	"NPC Mel attacked first" : "attacked",
	"NPC Munz attacked first" : "attacked",
	"NPC Ray attacked first" : "attacked",
	"NPC Sara attacked first" : "attacked",
	"NPC Sheriff attacked first" : "attacked",
	"NPC Slater attacked first" : "attacked",

	"ObjectOnActivate" : "object",
	"player attacked first" : "playeraction",
	"Player killed" : "playeraction",
	"Player looted dead" : "playeraction",
	"Player looted Dead" : "playeraction",
	"Player shooting a dead" : "playeraction",

	"PlayerDropItem" : "item",
	"PlayerDroppedItem" : "item",
	"PlayerEquipped" : "item",
	"PlayerLootedItem" : "item",
	"PlayerShot" : "item",
	"PlayerUnequipped" : "item",
	"PlayerJumped" : "jump",

	"PlayerSneaking" : "sneaking",

	"Position_AbandonedHouse" : "position",
	"Position_Bar" : "position",
	"Position_Hotel" : "position",
	"Position_Introhouse" : "position",
	"Position_Outside" : "position",
	"Position_SheriffOffice" : "position",

	"Quest" : "quest",
	"Stat" : "stat",
}

// Store a list of available key mappings
options.mappings = [{
	
	// Represent a player position in a map
	game  : "Fallout New Vegas",
	type  : "position",
	columns : ["area", "playerID", "timestamp", "posX", "posY", "cameraX", "cameraY", "???", "??", "?"]
}, {
	
	// Represent a user action
	game  : "Fallout New Vegas",
	type  : "action",
	columns : ["action", "playerID", "value", "target", "status"],
}, {
	
	// Represent a user dialogue
	game  : "Fallout New Vegas",
	type  : "dialogue",
	columns : ["action", "playerId", "timestamp", "??", "NPC", "text", "response"],
}, {
	
	// Represent a user interaction
	game  : "Fallout New Vegas",
	type  : "interaction",
	columns : ["action", "location", "playerID", "object", "posX", "posY", "cameraX", "cameraY"],
}, {

	// Represent item interactions
	game  : "Fallout New Vegas",
	type  : "item",
	columns : ["action", "item", "value"],
}, {
	
	// Represent attacks against the player
	game  : "Fallout New Vegas",
	type  : "attacked",
	columns : ["action", "playerID", "value"],
}, {
	
	// Represents player sneaking
	game  : "Fallout New Vegas",
	type  : "sneaking",
	columns : ["action", "area", "playerID", "value", "???"],
}, {
	
	// Represents player jumping
	game  : "Fallout New Vegas",
	type  : "jump",
	columns : ["action", "value"],
}, {

	// Represents player interactions
	game : "Fallout New Vegas",
	type : "interaction",
	columns : ["action", "area", "playerID", "target", "timestamp", "posX", "posY", "?"],
}, {

	// Represents player interactions without explicit targets
	game : "Fallout New Vegas",
	type : "interactionNoTarget",
	columns : ["action", "area", "playerID", "timestamp", "posX", "posY", "?"],

	// Represents player crafting
	game  : "Fallout New Vegas",
	type  : "craft",
	columns : ["action", "name", "playerID", "value"],
}, {

	// Represents player getting attacked by giant rat
	game  : "Fallout New Vegas",
	type  : "ratattack",
	columns : ["action", "playerID", "value"],
}, {

	// Represents player getting some object
	game  : "Fallout New Vegas",
	type  : "object",
	columns : ["action", "????", "value"],
}, {

	// Represents player doing some action
	game  : "Fallout New Vegas",
	type  : "playeraction",
	columns : ["action", "playerID", "value", "object"],
}, {

	// Represents player on quest
	game  : "Fallout New Vegas",
	type  : "quest",
	columns : ["action", "playerID", "value", "name", "status"],
}, {

	// Represents player stat
	game  : "Fallout New Vegas",
	type  : "stat",
	columns : ["action", "playerID", "action", "key", "value", "status"],
}];

// Return the key mapping given the 
// game name, and the event name

// ex: getKeyMapping("Fallout New Vegas", "Attacked")

var getKeyMapping = function(game, eventName){

	// Get the type of event from the lookup table
	var type = options.lookup_table[eventName];

	// Find mapping
	var mapping = _.findWhere(options.mappings, {game : settings.game, type : type});

	if (!mapping || !type) {
		console.error("Unable to find key mapping for: " + eventName);
		return;
	}

	return mapping;
}

// assignKeys() returns a JSON object, where
// the values of the 'values' array are assigned
// to the column names provided in the 'mapping' array.

// For example:
// values : ["apple", "orange", "pear"]
// columns : ["fruit", "color", "shape"]

// Results in:
// { fruit : "Apple", color : "orange", shape : "pear" }

var assignKeys = function(values, columns){
	var acc = {};

	// Check data. Make sure we have enough keys for our data.
	if (columns.length != values.length){
		console.error("Warning: Mismatch in key mapping. Amount of keys and values differ." + columns.length + " Columns, " + values.length + " Values");
		console.log(columns);
		console.log(values);
		console.log("\n");
	}

	_.each(columns, function(value, key){
		// Ensure data exists. If not, make it null for DB.
		if (!values[key]) {
			values[key] = null;
		}; 

		// Create key/value pair
		acc[value] = values[key];
	});

	acc["game"] = settings.game;
	return acc;
	// ex: assignKeys(["apple", "orange", "pear"], ["fruit", "color", "shape"])
}

// Given a list of arrays, convert the data into JSON objects.
//   game : String of game name
//   eventName : the event name for this table
//   data : multudimensional array container player data

var assignKeysForEntireTable = function(game, eventName, data) {
	var acc = [];

	// Key the key mapping
	var mapping = getKeyMapping(game, eventName).columns;

	// Apply key mapping to each object in the data array
	_.each(data, function(d){
		var json = assigKeys(d, mapping);
		if (json) acc.push(json);
	})

	return acc;
}
