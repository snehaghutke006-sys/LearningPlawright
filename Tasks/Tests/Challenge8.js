/**In CI/CD pipelines, tests run against different environments.
 *  Write a JavaScript program using a switch statement that takes an environment name stored in a variable 
 * and prints the base URL, API key pattern, and timeout. Use const for fixed values and 
 * let for the assembled config.

Environments: dev, staging, qa, production/prod. 
Each has different base URL, API key prefix, timeout, and description. */

let envName = "staging";
const ENV_CONFIGS = {
    dev:      { baseURL: "https://staging-dev.testingacademy.com",     apiKeyPrefix: "DEV-", timeout: 5000, description: "Development environment" },
    staging:  { baseURL: "https://staging-api.testingacademy.com", apiKeyPrefix: "STG-", timeout: 8000, description: "Staging - Pre-production mirror" },
    qa:       { baseURL: "https://staging-qa.testingacademy.com",      apiKeyPrefix: "QA-",  timeout: 9000, description: "QA environment" },
    prod:     { baseURL: "https://staging-prodapi.testingacademy.com",    apiKeyPrefix: "PROD-",timeout: 8000, description: "Production environment" }
};


switch(envName){
    case "dev":
        config = ENV_CONFIGS.dev;
        break;
    case "staging":
        config = ENV_CONFIGS.staging;
        break;

    case "qa":
        config = ENV_CONFIGS.qa;
        break;
     case "prod":
        config = ENV_CONFIGS.prod;
        break;
}

console.log(`Environment: ${envName}`);
console.log(`Base URL: ${config.baseURL}`);
console.log(`API Key Pattern: ${config.apiKeyPrefix}XXXX`);
console.log(`Timeout: ${config.timeout} ms`);
console.log(`Description: ${config.description}`);