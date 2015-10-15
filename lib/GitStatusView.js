"use babel";

function openFile(path) {
  atom.workspace.open(path, {});
}

export default class GitStatusView {
  constructor(project) {
    this.element = document.createElement("div");
    this.element.classList.add("git-status");
    this.element.tabIndex = -1;
  }

  serialize() {}

  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  empty () {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }

  renderEmpty () {
    this.empty();

    let emptyNode = document.createElement("div");
    emptyNode.classList.add("git-status-empty");
    emptyNode.textContent = "nothing to commit, working directory clean";
    this.element.appendChild(emptyNode);
  }

  renderList(list) {
    this.empty();

    for (let i = 0; i < list.length; i++) {
      let {path, status, rootDir} = list[i];
      let itemNode = document.createElement("div");
      itemNode.classList.add("git-status-item");
      //itemNode.classList.add(status);
      if (status !== "deleted") {
        itemNode.addEventListener("click", openFile.bind(null, path));
      }
      itemNode.textContent = path;
      this.element.appendChild(itemNode);
    }
  }
}
