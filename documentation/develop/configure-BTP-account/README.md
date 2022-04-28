# Configure Your SAP BTP Environment with the Help of Boosters

## Introduction

You will now prepare your SAP BTP environment, configure your entitlements, and configure your account for the scenario.

 <img src="././images/SolutionDiagram_1.png" width="80%">

### Prepare Your SAP BTP Account

1. In [SAP BTP Cockpit](https://account.hana.ondemand.com/), open your global account and navigate to **Boosters**.

2. Search for *Low-Code / No-Code App Development*.

> This booster helps you to add low-code/no-code tools from SAP that accelerate business application development and will guide you through the process of enabling the tools, configuring entitlements, and assigning members on SAP BTP.

3. Choose **Start** to create a *Subaccount*.

   <img src="././images/booster_1.png" width="80%">

4. In the pop-up a check is running to verify that your account fulfills all the necessary requirements. After all checks are successfully, choose **Next**.

   <img src="././images/booster_2.png" width="70%">

5. In the scenario tab, choose **Create Subaccount** and **Next**.

   <img src="././images/booster_3.png" width="70%">

6. Now, you can configure your subaccount. Enter the required information and finish by choosing **Next**:
  - **Subaccount Name:** for example, _Riskmanagement_
  - **Provider:** Amazon Web Services (AWS)
  - **Region:** EU10
  - **Subdomain:** for example, _Riskmanagement_
  - **Org Name:** for example, _Riskmanagement_
  - **Space Name:** for example, _dev_

    <img src="././images/booster_4.png" width="70%">

7. You can add users to your account. Enter all required administrators and users e-mail addresses in the input field. In case you have multiple people you can separate e-mails with quotation marks. Choose **Next** to finish.

8. In the next tab, review all the details and then choose **Finish** to start the account creation.

9. After your account is created, open your created **Subaccount** and choose **Entitlements** on the left to add more services to your account.

10. Choose **Configure Entitlements** and choose **Add Service Plans**.

    <img src="././images/entitlements_1.png" width="70%">

11. In the pop-up use the search function to find required entitlements and then choose the following service plan on the left site:

    | Service                           | Plan       |
    |-----------------------------------|------------|
    | Cloud Foundry Runtime             | MEMORY     |
    | Launchpad Service                 | standard   |
    | SAP HANA Cloud                    | hana       |
    | SAP HANA Schemas & HDI Containers | hdi-shared |

12. Choose **Add 4 Service Plans**.

    <img src="././images/entitlements_2.png" width="70%">

13. Choose **Save** to finish the configuration.

    <img src="././images/entitlements_3.png" width="70%">

14. In the menu on the left, choose **Service Marketplace** and search for **Launchpad Service**.

15. Choose **Launchpad Service** tile.

    <img src="././images/launchpad_1.png" width="70%">

16. In the menu appeared on the right side of your screen, choose **Create** and confirm creation in the pop-up screen.

    <img src="././images/launchpad_2.png" width="70%">

17. In the menu on the left, navigate to **Security** &rarr; **Role Collections**.

     <img src="././images/launchpad_3.png" width="70%">

18. In the role collection list, find _Launchpad Admin_ and choose it to open.

19. Choose **Edit** button and scroll down to **User** section. Enter your email address in the section and select _Default Identity Provider_ as **Identity Provider**.

20. Choose **Save**.

    <img src="././images/launchpad_4.png" width="70%">

 ### Create SAP HANA Cloud Instance

 > The SAP HANA Cloud instance is the main cost driver of this scenario. To save costs, it's recommended to create the instance shortly before usage. Note that previewing your application is possible without the created SAP HANA Cloud instance and only needed for final deployment of your application.

Now, you need to create an SAP HANA instance.

1. Navigate back to your **Subaccount** and select your **Space**.

2. In the menu on the left choose section **SAP HANA Cloud**, choose **Create**, and choose _SAP HANA Database_ in the dropdown.

   <img src="././images/hana_1.png" width="70%">

3. Now, you have opened the **SAP HANA Cloud Central** and you can change the **Type** of your instance. Make sure you have selected **SAP HANA Cloud, SAP HANA Database** and choose **Next Step**.

   <img src="././images/hana_2.png" width="70%">

4. Choose a *name* for your instance and choose an Admin Password* and confirm the password in the corresponding field. Choose **Next Step**.

   <img src="././images/hana_3.png" width="70%">

5. In the next tabs "3. SAP HANA Database" and "4. SAP HANA Database availability Zones and Replicas" leave the default configuration and choose **Next Steps**.

6. In tab "5. SAP HANA Database Advanced Settings" scroll down to **Connections** and select **Allow all IP addresses**. Choose **Review and Create**.

    > For demo purposes, we allow all IP addresses in this mission. If you are implementing this scenario in a productive environment, only allow specific IP addresses.

    <img src="././images/hana_4.png" width="70%">

7. Your SAP HANA instance is now being created.


## Summary

After finishing this section you now have configured an SAP BTP account, which will be used next to develop a low-code application. Also you have created an SAP HANA instance to store the data needed for your application.

Need help? Look at the [Troubleshooting Guide](../../complete/troubleshooting#configure-your-sap-btp-environment-with-the-help-of-boosters) or use mission support to connect with mission experts.
