class TestData {
	get recordIndex(): number {
		return this._recordIndex;
	}
	get newRecord(): string {
		return this._newRecord;
	}

	get additionRecord(): string {
		return this._additionRecord;
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

	private _additionRecord: string = ' And do something else... Do your best!'

	private _newRecord: string = `${this.listOfToDoEntries[0]}${this.additionRecord}`

	private _recordIndex: number = 0;
}
export default new TestData();
