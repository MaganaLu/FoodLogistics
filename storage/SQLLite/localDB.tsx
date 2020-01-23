/**
 * The only thing i plan to use this for is local storage of user activity
 */

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("localStore");

type Name = {
	name: string;
}

// Add given name to names table
export function addName(name: Name) {
	db.transaction(tx => {
		console.log("hey")
		tx.executeSql(
			`INSERT INTO names (id, name) VALUES (0, ?)`,
			[name]
		)
	},
	(err) => console.log(err));
}

// Prints names table to console
export function selectNames() 
{
	db.transaction(tx => {
		tx.executeSql(
			"select * from names", [], (tx, {rows}) => {
				console.log(rows)
			})},
		(err) => console.log(err)
	);
}

// Tries to create names table
export function createNamesTable(): boolean
{
	db.transaction(tx => {
		tx.executeSql(
			`CREATE TABLE names (id, name)`,
			[]
		)},
		// * Using Modal - future feature
		() => { return false},
		() => { return true }
	);
	return false;
}

// Drop the names table
export function dropNamesTable()
{
	db.transaction(tx => {
		tx.executeSql(
			`DROP TABLE names`,
			[]
		)},
		(err) => console.log(err)
	);
}