"use babel";

import AtomGitStatusView from "./AtomGitStatusView";
import { CompositeDisposable } from "atom";

export default {
  view: null,
  panel: null,
  subscriptions: null,

  activate() {
    this.view = new AtomGitStatusView();
    this.panel = atom.workspace.addBottomPanel({
      item: this.view.getElement(),
      visible: false
    });

    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add("atom-workspace", {
      "atom-git-status:toggle": () => this.toggle()
    }));
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
      this.panel.show();
    }
  }
};
