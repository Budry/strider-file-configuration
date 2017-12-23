'use strict';

module.exports = {
  config: {
    file_configuration: {
      shell: {type: String, default: 'Default', enum: ['Default Shell', 'Bash', 'Powershell']},
      environment: {type: String, default: '# type shell commands here'},
      filename: {type: String, default: '.strider.yml'}
    }
  }
};
