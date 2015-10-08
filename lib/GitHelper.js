"use babel";

export default {
  getStatusList (project) {
    let list = [];
    project.getRepositories().forEach((repository) => {
      let status = repository.repo.getStatus();
      for (let item in status) {
        list.push(repository.getWorkingDirectory() + "/" + item);
      }
    });

    return list;
  }
};
