"use babel";

export default {
  getStatusList (project) {
    let list = new Map();
    project.getRepositories().forEach((repository) => {
      repository = repository.repo;

      let statuses = repository.getStatus();
      for (let path in statuses) {
        let status = statuses[path];
        if (repository.isStatusNew(status)) {
          status = "added";
        } else if (repository.isStatusDeleted(status)) {
          status = "deleted";
        } else if (repository.isStatusModified(status)) {
          status = "modified";
        } else {
          status = "unknown";
        }
        list.set(repository.getWorkingDirectory() + "/" + path, status);
      }
    });

    return list;
  }
};
