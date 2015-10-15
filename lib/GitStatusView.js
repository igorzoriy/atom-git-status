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

  renderList(list) {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }

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
