class TestData {
	get toDoValue(): string {
		return this._toDoValue;
	}
	private _toDoValue = 'Some task in ToDo list ...'
}
export default new TestData();
