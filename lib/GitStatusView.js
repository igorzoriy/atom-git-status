"use babel";

export default class GitStatusView {
  constructor(project) {
    this.element = document.createElement("div");
    this.element.classList.add("git-status");
    this.element.tabIndex = "-1";
  }

  serialize() {}

  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  renderList(list) {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }

    let listNode = document.createElement("ul");
    for (let i = 0; i < list.length; i++) {
      let li = document.createElement("li");
      li.textContent = list[i];
      listNode.appendChild(li);
    }
    this.element.appendChild(listNode);
  }
}
