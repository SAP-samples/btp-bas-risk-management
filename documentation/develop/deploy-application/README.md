# Deploy Application to Cloud Foundry Environment

## Introduction

In this section, you will deploy the application to Cloud Foundry environment.

<img src="././images/SolutionDiagram_6.png" width="80%">

### Deploy Application to Cloud Foundry

1. Open SAP Business Application Studio.

2. Open the Home view of SAP BAS. Choose **Project Explorer** &rarr; **RiskManagement** &rarr; **Storyboard**

   <img src="./images/deploy_home.png" width="40%">

3. Choose **Task Explorer** and expand **Deploy** and choose **Deploy Riskmanagement** and click on **Run** button.

   <img src="././images/deploy_1.png" width="80%">

4. On deploy process, a tab opens for **Cloud Foundry Sign In and Targets**, log in to your account:
   - Provide API endpoint (**https://api.cf.eu10-004.hana.ondemand.com/**) to your account
   - Select authentication method 'SSO Passcode'
   - Click on the link 'open a new browser page to generate your SSO passcode'

   <img src="././images/deploy_2.png" width="60%">

   - Click on Sign in with another account.
   - Enter **lcap-platform** in Text field for signing in with alternative identity provider.
   - Choose **Sign in with alternative identity provider**

   <img src="././images/deploy_6.png" width="60%">
   
   - Enter SSO passcode 
   - Click on Sign in
   - Select org and space
   - Click on Apply
   
   <img src="././images/deploy_4.png" width="60%">

5. Your application will be deployed. This can take a few minutes.

### Assign Role Collection

Before you can use the application, you need to assign yourself to the roles you have created in the section before. This needs to be done so you are able to edit and view the data from the application.

1. Go back to [SAP BTP Cockpit](https://account.hana.ondemand.com/).

2. Navigate to **Security** &rarr; **Users**.

3. Select your username and choose the tree dots.

4. In the dropdown, choose **Assign Role Collections**.

   <img src="././images/role_1.png" width="80%">

5. In the pop-up, find **RiskManager-dev** and **RiskViewer-dev** and select the checkmark to assign roles.

6. Choose **Assign Role Collection**.

   <img src="././images/role_2.png" width="80%">
