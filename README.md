# Strider plugin for file configuration

This plugin is based on [Strider-CD/strider-custom](https://github.com/Strider-CD/strider-custom)

## How it works

This plugin allow load strider custom scripts configuration via configuration
file placed in the root of your project (like Travis-CI and its `.travis.yml` file)

## How to use

1. Create `.strider.yml` file in your project root directory

2. Define phases in this file
Example:
```yml
phases:
  prepare:
    - echo "Prepare"
  test:
    - echo "Test"
  deploy:
    - echo "Deploy"
  cleanup:
    - echo "Clean up"
```
Format of your scripts is same as in [Strider-CD/strider-custom](https://github.com/Strider-CD/strider-custom)
plugin and you same logic for processing your input.

3. You can configure `environments` phase in plugin configuration page or name of configuration file