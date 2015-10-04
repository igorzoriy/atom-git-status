"use babel";

export default class AtomGitStatusView {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("atom-git-status");
    var message = document.createElement("div");
    message.textContent = "The PACKAGE is Alive!";
    message.classList.add("message");
    this.element.appendChild(message);
  }

  serialize() {}

  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }
}
