'use strict';
// capiturando os elementos do DOM
const form = document.querySelector('.form__container');
const titleTask = document.querySelector('#input_title');
const typeTask = document.querySelector('.form__input--priority');
const tasks = [
  { title: 'Comprar comida para o gato', type: 'Urgente' },
  { title: 'Consertar Computador', type: 'Importante' },
  { title: 'Beber água', type: 'Normal' },
  { title: 'Enviar relatório trimestral', type: 'Importante' },
  { title: 'Fazer exercícios físicos', type: 'Normal' },
  { title: 'Agendar consulta médica', type: 'Urgente' },
  { title: 'Ler pelo menos um capítulo de um livro', type: 'Normal' },
  { title: 'Limpar a despensa', type: 'Importante' },
  { title: 'Pagar a conta de energia', type: 'Urgente' },
  { title: 'Assistir a um documentário interessante', type: 'Normal' },
];
class DOMManipulator {
  constructor() {}
  init() {
    this.renderElements(tasks);
    this.loadBtnsRemoveTask();
    this.getFormEvent();
  }
  // funcao resposavel por criar elementos DOM
  createElement(element, classlist) {
    const elementCreated = document.createElement(element);
    classlist ? elementCreated.classList.add(classlist) : elementCreated;
    return elementCreated;
  }
  // funcao resposanvel por adicionar o type da task
  addTypeToTask(typeTask) {
    const spanElement = this.createElement('span', 'task-type');
    switch (typeTask) {
      case 'Urgente':
        spanElement.classList.add('span-urgent');
        break;
      case 'Importante':
        spanElement.classList.add('span-important');
        break;
      case 'Normal':
        spanElement.classList.add('span-normal');
    }
    return spanElement;
  }
  // funcao para criar items da lista
  createTaskItem({ title, type }) {
    const liElement = this.createElement('li', 'task__item');
    const divElement = this.createElement('div', 'task-info__container');
    const spanElement = this.addTypeToTask(type);
    const pElement = this.createElement('p');
    const btnElement = this.createElement(
      'button',
      'task__button--remove-task',
    );
    pElement.innerText = title;
    divElement.append(spanElement, pElement);
    liElement.append(divElement, btnElement);
    return liElement;
  }
  removeTask(element, index) {
    element.addEventListener('click', () => {
      tasks.splice(index, 1);
      this.renderElements(tasks);
    });
  }
  loadBtnsRemoveTask() {
    if (tasks.length === 0) {
      return;
    }
    const allBtnsRemoveTask = document.querySelectorAll(
      '.task__button--remove-task',
    );
    allBtnsRemoveTask.forEach((element, index) => {
      if (element instanceof HTMLButtonElement) {
        this.removeTask(element, index);
      }
    });
  }
  renderElements(tasks) {
    const ul = document.querySelector('.tasks__list');
    ul.innerHTML = '';
    tasks.forEach((element) => {
      ul.appendChild(this.createTaskItem(element));
    });
    this.loadBtnsRemoveTask();
  }
  // capitura de evento para o formulário
  getFormEvent() {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const titleTaskValue = titleTask.value;
      const typeTaskValue = typeTask.value;
      if (titleTaskValue === '') {
        alert('Adicione um titulo para a tarefa');
        return;
      } else if (typeTaskValue === '') {
        alert('Selecione um tipo para a tarefa');
        return;
      }
      const newTask = { title: titleTaskValue, type: typeTaskValue };
      tasks.push(newTask);
      titleTask.value = '';
      typeTask.value = '';
      this.renderElements(tasks);
    });
  }
}
const domManipulator = new DOMManipulator();
domManipulator.init();
