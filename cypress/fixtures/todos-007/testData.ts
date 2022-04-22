class TestData {

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
}
export default new TestData();
