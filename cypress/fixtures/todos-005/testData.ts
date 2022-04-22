class TestData {
	get listOfDodeRecords(): string[] {
		return this._listOfDodeRecords;
	}
	get listOfActiveRecords(): string[] {
		return this._listOfActiveRecords;
	}
	get listOfToDoEntries(): string[] {
		return this._listOfToDoEntries;
	}

	private _listOfToDoEntries: string[] = [
		'First ToDo record',
		'Second ToDo record',
		'Third ToDo record',
		'Fourth ToDo record',
		'Fifth ToDo record'
	]

	private _listOfDodeRecords: string[] = [
		'First ToDo record',
		'Second ToDo record'
	]

	private _listOfActiveRecords: string[] = [
		'Third ToDo record',
		'Fourth ToDo record',
		'Fifth ToDo record'
	]
}
export default new TestData();
