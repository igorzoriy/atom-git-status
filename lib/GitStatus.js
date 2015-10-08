"use babel";

import GitStatusView from "./GitStatusView";
import { CompositeDisposable } from "atom";
import GitHelper from "./GitHelper";

export default {
  view: null,
  panel: null,
  subscriptions: null,

  activate() {
    this.view = new GitStatusView();
    this.panel = atom.workspace.addBottomPanel({
      item: this.view.getElement(),
      visible: false
    });

    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add("atom-workspace", {
      "git-status:toggle": () => this.toggle()
    }));

    atom.project.getRepositories().forEach((repository) => {
      repository.onDidChangeStatuses((event) => console.log(event));
    });
  },


  deactivate() {
    this.panel.destroy();
    this.subscriptions.dispose();
    this.view.destroy();
  },

  toggle() {
    if (this.panel.isVisible()) {
      this.panel.hide();
    } else {
      this.view.renderList(GitHelper.getStatusList(atom.project));
      this.panel.show();
    }
  }
};
