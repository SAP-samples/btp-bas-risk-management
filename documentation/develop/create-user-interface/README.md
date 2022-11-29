# Create User Interface and User Roles

## Introduction

In this section you will build a user interface to display the data and add role concept to define different authorizations

 <img src="././images/SolutionDiagram_2.png" width="80%">


#### Add User Interface

After defining the foundation of your application in the previous chapter, we will add an SAP Fiori elements based User Interface to the application.

1. Go to the home page and find the **[User Interface](https://help.sap.com/docs/Application%20Development/6a5fc562f6e2402aa84b0416614a05fc/efab3e5b3c6b4647a6928d68372a67ac.html?locale=en-US)** tile and choose the **+** icon to add a new user interface.

   <img src="./images/create_UI_1.png" width="40%">

2. A screen will show up where you can add the **Application Name**: _Risks_ and enter a description. Choose **Next**.

   <img src="./images/create_UI_2.png" width="60%">

3. Select **UI Application type** as _Template-Based, Responsive Application_ to create a SAP Fiori elements based UI. Choose **Next**.

   <img src="./images/create_UI_3.png" width="40%">

4. Choose **UI application template** as _List Report Page_. Choose **Next**.

   <img src="./images/create_UI_4.png" width="40%">

5. Select main entity _risks_ in as main entity in Data Objects, to show risks entity in UI. Choose **Finish**.

   <img src="./images/create_UI_5.png" width="40%">

6. Repeat the steps 1–4 for _Mitigations_.

7. Select main entity _mitigation_ in as main entity in Data Objects, to show mitigations entity in the UI and choose _risks_ as navigation entity. Choose **Finish**.

8. Find the tile User Interfaces and choose the entry **Mitigations**.

9. Find the **Object Page** entry and choose the edit icon.

    <img src="././images/update_UI_4.png" width="40%">

10. In the entry **Section** choose the **+** icon to add new section to the UI. In the dropdown, select _Add Table Section_.

    <img src="././images/update_UI_5.png" width="40%">

11. In the popup enter Label as **Risks** and choose value source as **risks** from the dropdown

      <img src="././images/update_UI_6.png" width="40%">

12. Click on **Add** button

13. In the entry **Section** open **Risks** &rarr; **Table** &rarr; **Columns**. Choose the **+** icon to add new fields to the UI. In the dropdown, select _Add Basic Columns_.

14. In the dropdown choose the following fields inside **risks**
   - ID
   - title
   - description
   - impact
   - prio

15. Click on Add button

      <img src="././images/update_UI_7.png" width="40%">

#### Create User Roles

Now, you can create roles to define different authorization for your application. For example you might want to ensure that some people can view data, but are not able to edit them.

1. Go back to the home page of the application. Find the **[User Roles](https://help.sap.com/docs/Application%20Development/6a5fc562f6e2402aa84b0416614a05fc/369ed9cc7a724cfcb2bdbe20f8b6e7d6.html?locale=en-US)** tile and choose the **+** icon to add a new role.

   <img src="./images/user_roles_1.png" width="30%">
   
   > Hint: Loading the LCAP Authorization Editor might take a few seconds

2. Enter a role name, for example, _RiskViewer_. Enter a description and choose **Read** as **Privilege Defaults**. Choose **Save**.

   <img src="./images/user_roles_2.png" width="50%">

3. Choose your created role and select your created service in the **Service Assignments** field. Choose **Add Service Entities**.

   <img src="./images/user_roles_3.png" width="50%">

4. In the pop-up, switch on the assign toggle button for _risks_ and _mitigations_. Check if slider for privileges is selected as read. Choose **Save**.

   <img src="./images/user_roles_4.png" width="50%">

5. Go back to **User Roles** and choose the **+** icon to add a new role. Enter a role name, for example, _RiskManager'_. Enter a description and choose **Full** as Privilege Defaults. Choose **Save**.

   <img src="./images/user_roles_5.png" width="50%">

6. Choose your created role and select your created service in the **Service Assignments** field. Choose **Add Service Entities**.

7. In the pop-up, switch on the assign toggle button for _risks_ and _mitigations_. Check if slider for privileges is selected as full. Choose **Save**.

   <img src="./images/user_roles_6.png" width="60%">

## Summary

You now have developed your first application with SAP Business Application Studio visual tools. In the next section you will test the application.

Need help? Look at the [Troubleshooting Guide](../../complete/troubleshooting#develop-risk-management-application-using-sap-business-application-studio-visual-tools) or use mission support to connect with mission experts.
