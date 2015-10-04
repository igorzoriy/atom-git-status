"use babel";

import AtomGitStatus from "../lib/AtomGitStatus";

describe("AtomGitStatus", () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage("atom-git-status");
  });

  describe("when the atom-git-status:toggle event is triggered", () => {
    it("hides and shows the panel", () => {
      expect(workspaceElement.querySelector(".atom-git-status")).not.toExist();

      atom.commands.dispatch(workspaceElement, "atom-git-status:toggle");
      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector(".atom-git-status")).toExist();
        let element = workspaceElement.querySelector(".atom-git-status");
        expect(element).toExist();

        let panel = atom.workspace.panelForItem(element);
        expect(panel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, "atom-git-status:toggle");
        expect(panel.isVisible()).toBe(false);
      });
    });
  });

  it("hides and shows the view", () => {
    jasmine.attachToDOM(workspaceElement);
    expect(workspaceElement.querySelector(".atom-git-status")).not.toExist();
    atom.commands.dispatch(workspaceElement, "atom-git-status:toggle");

    waitsForPromise(() => {
      return activationPromise;
    });

    runs(() => {
      let element = workspaceElement.querySelector(".atom-git-status");
      expect(element).toBeVisible();
      atom.commands.dispatch(workspaceElement, "atom-git-status:toggle");
      expect(element).not.toBeVisible();
    });
  });
});
