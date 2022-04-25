import {
  communityList,
  communityListLinks,
  getLeftFrameFooterText,
  getLeftSideBlockDesc,
  resourcesList,
  resourcesListLinks
} from '../support/helpers';

class TodosPage {
  get pageTitle() {
    return cy.get('[class="header"] > h1');
  }

  get todoInputField() {
    return cy.get('input[class="new-todo"]');
  }

  get leftFrame() {
    return cy.get('aside[class="learn"]');
  }

  get exampleBlockTitle() {
    return cy.contains('h3', 'Vue.js');
  }

  get exampleBlockSubtitle() {
    return cy.contains('h5', 'Example');
  }

  get exampleLinc() {
    return cy.contains('a', 'Source');
  }

  get descriptionBlock() {
    return cy.get('blockquote[class="quote speech-bubble"]');
  }

  get officialResourcesBlock() {
    return cy.contains('h4', 'Official Resources').next('ul');
  }

  get communityBlock() {
    return cy.contains('h4', 'Community').next('ul');
  }

  get leftFrameFooter() {
    return cy.get('footer > em');
  }

  get todoCounter() {
    return cy.get('span[class="todo-count"]');
  }

  get toDoEntriesList() {
    return cy.get('ul[class="todo-list"]');
  }

  get filters() {
    return cy.get('ul[class="filters"]');
  }

  get clearCompletedButton() {
    return cy.get('button[class="clear-completed"]');
  }

  get selectAllButton() {
    return cy.get('[id="toggle-all"]');
  }

  openPage(): void {
    cy.visit(`${Cypress.env('PORTAL_URL')}`, {timeout: 30000});
  }

  checkTitle(title: string) {
    this.pageTitle.should('exist').should('contain.text', title);
  }

  checkInputFieldExist() {
    this.todoInputField.should('exist').should('have.attr', 'placeholder', 'What needs to be done?');
  }

  checkExampleBlock() {
    cy.allure().startStep('Check - example block content');
    this.exampleBlockTitle.should('exist');
    this.exampleBlockSubtitle.should('exist');
    this.exampleLinc
      .should('exist')
      .should('contain.text', 'Source')
      .should('have.attr', 'href', 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/vue');
    cy.allure().endStep();
  }

  checkBlockQuoteSpeechBubble() {
    cy.allure().startStep('Check - quote speech-bubble block');
    this.descriptionBlock.should('exist').should('contains.text', getLeftSideBlockDesc());
    cy.allure().endStep();
  }

  checkBlockOfficialResources() {
    cy.allure().startStep('Check - "Official Resources" block');
    this.officialResourcesBlock.should('exist');
    this.officialResourcesBlock.find('li').then(lines => {
      cy.wrap(lines).each((li, index) => {
        cy.wrap(li)
          .find('a')
          .should('contain.text', resourcesList()[index])
          .should('have.attr', 'href', resourcesListLinks()[index]);
      });
    });
    cy.allure().endStep();
  }

  checkBlockCommunity() {
    cy.allure().startStep('Check - "Community" block');
    this.communityBlock.should('exist');
    this.communityBlock.find('li').then(lines => {
      cy.wrap(lines).each((li, index) => {
        cy.wrap(li)
          .find('a')
          .should('contain.text', communityList()[index])
          .should('have.attr', 'href', communityListLinks()[index]);
      });
    });
    cy.allure().endStep();
  }

  checkLestFrameFooter() {
    cy.allure().startStep('Check - left frame footer');
    this.leftFrameFooter
      .should('exist')
      .should('contain.text', getLeftFrameFooterText())
      .find('a')
      .should('have.attr', 'href', 'https://github.com/tastejs/todomvc/issues');
    cy.allure().endStep();
  }

  checkLeftFrame() {
    cy.allure().startStep('Check - the block on the left exists');
    this.leftFrame.should('exist');
    cy.allure().endStep();

    this.checkExampleBlock();
    this.checkBlockQuoteSpeechBubble();
    this.checkBlockOfficialResources();
    this.checkBlockCommunity();
    this.checkLestFrameFooter();
  }

  inputToDoValue(value: string) {
    this.todoInputField.should('exist').click().clear().type(value).type(`{enter}`);
  }

  checkNewEntryCreated(value: string, count: number = 1) {
    cy.contains('label', value)
      .should('exist')
      .prev('input')
      .should('exist')
      .should('have.class', 'toggle')
      .siblings('button')
      .should('exist')
      .should('have.class', 'destroy')
      .parents('li')
      .should('exist')
      .should('have.class', 'todo');

    this.todoCounter.should('exist').should('contain.text', `${count} item left`);
  }

  markCheckBoxChecked(lineIndex: number = 0) {
    cy.get('input[type="checkbox"]').eq(lineIndex).should('exist').click({ force: true });
  }

  checkEntryStatusIsDone(lineIndex: number = 0) {
    this.toDoEntriesList
      .should('exist')
      .find('li')
      .eq(lineIndex)
      .should('exist')
      .should('have.class', 'todo completed');
    this.todoCounter.should('exist').should('contain.text', `0 items left`);
  }

  inputToDoValues(list: string[]) {
    list.forEach(entry => {
      this.inputToDoValue(entry);
    });
  }

  markCheckBoxesByEntryText(list: string[]) {
    list.forEach(entry => {
      cy.contains('label', entry).should('exist').prev('input').click({ force: true });
    });
  }

  setFilter(filter: string) {
    this.filters.should('exist').contains('a', filter).should('exist').click({ force: true });
  }

  checkRecordsList(list: string[]) {
    this.toDoEntriesList
      .should('exist')
      .find('li')
      .each((entry, index) => {
        cy.wrap(entry).find('label').should('contain.text', list[index]);
      });
  }

  checkRecordInListByIndex(value: string, index: number) {
    this.toDoEntriesList.should('exist').find('li').eq(index).find('label').should('contain.text', value);
  }

  removeCompletedRecords() {
    this.clearCompletedButton.should('exist').click();
  }

  checkRecordsAttributes(value: string) {
    this.toDoEntriesList
      .should('exist')
      .find('li')
      .each(entry => {
        cy.wrap(entry)
          .invoke('attr', 'class')
          .then(className => {
            expect(`${className}`).to.equal(value);
          });
      });
  }

  checkCounterValue() {
    this.toDoEntriesList.should('exist').then(() => {
      cy.get('li[class="todo"]').then(li => {
        this.todoCounter.should('exist').should('contain.text', `${li.length} items left`);
      });
    });
  }

  markAllTasksCompleted() {
    this.selectAllButton.should('exist').click({ force: true });
  }

  changeValueByIndex(additionRecord: string, index: number) {
    this.toDoEntriesList.should('exist').then(() => {
      cy.get('li[class="todo"]')
        .eq(index)
        .dblclick()
        .type(additionRecord + '{enter}');
    });
  }

  deleteEntryByIndex(index: number) {
    this.toDoEntriesList.should('exist').then(() => {
      cy.get('li[class="todo"]').eq(index).find('button[class="destroy"]').click({ force: true });
    });
  }

  checkRecordIsNotInToDoList(listOfToDoEntries: string[], index: number) {
    this.toDoEntriesList
      .should('exist')
      .find('li')
      .each(line => {
        cy.wrap(line).within(() => {
          cy.get('div[class="view"]')
            .should('exist')
            .find('label')
            .should('not.contain.text', listOfToDoEntries[index]);
        });
      });
  }
}

export default new TodosPage();
