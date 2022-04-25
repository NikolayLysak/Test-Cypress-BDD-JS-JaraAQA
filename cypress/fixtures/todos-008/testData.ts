const additionRecord: string = ' And do something else... Do your best!';
const listOfToDoEntries: string[] = [
  'First ToDo record',
  'Second ToDo record',
  'Third ToDo record',
  'Fourth ToDo record',
  'Fifth ToDo record'
];
export { additionRecord, listOfToDoEntries };

class TestData {
  recordIndex: number = 0;
  newRecord: string = `${listOfToDoEntries[this.recordIndex]}${additionRecord}`;
}

export default new TestData();
