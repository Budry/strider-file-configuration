'use strict';

module.exports = {
  config: {
    custom: {
      shell: {type: String, default: 'Default', enum: ['Default Shell', 'Bash', 'Powershell']},
      environment: {type: String, default: '# type shell commands here'}
    }
  }
};
