End to End UI Automation of LambdaTest E-commerce website, using Playwright and Typescript.
Website link: "https://ecommerce-playground.lambdatest.io"

Reporting: Report can be generated as normal HTM or Allure Reports for better visiblity.

Below are the steps to generate an allure report (P.S. Java 8 or above need to be installed and JAVA_HOME should be set in your environmental variables)

1. npm i -D allure-playwright
2. npm i -D allure-commandline
3. npx playwright test --reporter=line,allure-playwright
4. npx allure generate ./allure-results
5. npx allure open ./allure-report
