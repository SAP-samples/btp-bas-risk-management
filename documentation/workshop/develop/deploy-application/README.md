# Deploy Application to Cloud Foundry Environment

## Introduction

In this section, you will deploy the application to Cloud Foundry environment.

 <img src="././images/SolutionDiagram_6.png" width="80%">

### Deploy Application to Cloud Foundry

1. Open SAP Business Application Studio.

2. Log in to your account:
   - Click the Hamburger icon and choose **View** then **Find Command**
   - Select `CF: Login to Cloud Foundary`
   - Provide API endpoint to your account
   - Select authentication method 'SSO Passcode'
   - Click on the link 'open a new browser page to generate your SSO passcode'
   - Enter SSO passcode 
   - Click on Sign in

   <img src="././images/deploy_3.png" width="80%">
   
   - Select org and space
   - Click on Apply
   
   <img src="././images/deploy_4.png" width="80%">

3. Find the **Deploy** button in the top right of Home Page.

   <img src="././images/deploy_1.png" width="80%">   

4. Your application will be deployed. This can take a few minutes.

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
