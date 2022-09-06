# Consume External Service from SAP S/4HANA

## Introduction

In this section you will expand your application with an API, which allows to get data from your SAP S/4HANA backend system. This enables the application to use data directly out from the backend system. Also you will update the user interface, so the data from backend is displayed correctly in your application.



### Add Business Partner API to Application

1. Open your SAP Business Application Studio and navigate to the **Home**.

2. Find the tile **External Data Model** and choose the **+** icon to create a new data model.

3. On the left side of your screen the menu **Service Center** will appear. Expand the section **SAP System** and find your **Subaccount** there.

4. Then open the destination **bupa**.

> Hint: This destination is already created and provided by the workshop hosts

5. On the bupa page, choose **A_BusinessPartner** in the list **Entity**.

>Hint: You can use `PREVIEW DATA` tab to see the live preview of data coming from the destination

6. Choose **Add Data Model**.

    <img src="././images/consume_external_service _A1.png" width="100%">

7. Go back to the **Home** page and look for the tile **Services**. Choose the **+** icon to add a new entity.

8. In the pop-up enter the following data:
   - **Name:** _A_Supplier_
   - **Type:** _bupa.A_BusinessPartner_
   - **Properties:** _BusinessPartner_, _BusinessPartnerFullName_, _BusinessPartnerIsBlocked_
<!--

9. In a next step, we individualize the name of properties. Choose the pencil icon behind your selected property and change the names:
    - _BusinessPartner_ &rarr; _Supplier_
    - _BusinessPartnerFullName_ &rarr; _SupplierFullName_
    - _BusinessPartnerIsBlocked_ &rarr;  _SupplierIsBlocked_
    -->

9. Choose **Create**.

   <img src="././images/consume_external_service_A6.png" width="60%">

10. Go back to the **Home** page and find tile **Data Models**. Choose the entry **Risks**.

11. Choose the icon to **Add Relationship** of the risk entity. Click on anywhere on screen to configure relationship.

    <img src="././images/consume_external_service _3.png" width="60%">

12. In the pop-up configure the relationship like:

    - **Relationship:** _Association_
    - **Relationship Type:** _to-one_
    - **Property Name:** _supplier_
    - **Target Entity Type:** _bupa.A_BusinessPartner_

13. Choose **Create**.

    <img src="././images/consume_external_service_A3.png" width="60%">

### Update UI Components

1. Navigate to the **Home** page of the project.

2. Find the tile **User Interfaces** and choose the entry **Risks**.

3. Find the entry **List Report** and choose the icon to edit.

    <img src="././images/update_UI_1.png" width="40%">

4. Choose the table element

    <img src="././images/update_UI_11.png" width="40%">

5. For the **Initial Load** property, choose **Enabled** in the drop-down.

    <img src="././images/update_UI_12.png" width="40%">

6. In the Page Editor, expand the **Columns** section and choose the **+** icon and select ***Add basic columns** from the dropdown.

    <img src="././images/update_UI_2.png" width="40%">

7. In the pop-up, choose **supplier_BusinessPartner** for **Columns**. Then choose **Add**.

    <img src="././images/update_UI_3.png" width="40%">

8. Click on the Page Map arrow to navigate back and choose the edit icon of the **Object Page** entry

    <img src="././images/update_UI_4.png" width="40%">

9. In the entry **Section** open **General Information** &rarr; **Form** &rarr; **Fields**. Choose the **+** icon to add new fields to the UI. In the dropdown, select _Add Basic Fields_.

    <img src="././images/update_UI_5.png" width="40%">

10. Add the following fields using the dropdown:
    - _miti_ID_
    - _supplier_BusinessPartner_
    - _BusinessPartnerFullName_
    - _BusinessPartnerIsBlocked_

11. Choose **Add**.

    <img src="././images/update_UI_9.png" width="60%">

12. Navigate back to the **risks object page** page and choose **supplier_BusinessPartner**.

13. Find entry **Display Type** and choose **Value Help** in the dropdown.

    <img src="././images/update_UI_7.png" width="40%">

14. In screen **Value Help** choose **Add column** button.

15. In the dropdown, select _BusinessPartnerFullName_.

16. Repeat step 14 and 15 with _BusinessPartnerIsBlocked_.

17. Disable the **Display as Dropdown** toggle button

18. Choose **Apply**.

    <img src="././images/update_UI_8.png" width="40%">

19. Similary, configure value help for mitigation. select the property `miti_ID`

20. Find entry **Display Type** and choose **Value Help** in the dropdown.

21. In screen **Value Help** choose the following

    - Value Description Property - description
    - Text Arrangement           - Text Only
    - Add Column                 - owner
    - Add Column                 - timeline

    <img src="././images/update_UI_10.png" width="50%">

22. Also for `miti_ID`, find the entry `Text` and choose the value `miti/description`

23. Choose **Apply**.
## Summary

 In this section, you have integrated an external service API from an SAP S/4HANA system to your application. In the next step, you will deploy your application.


Need help? Look at the [Troubleshooting Guide](../../complete/troubleshooting#consume-external-service-from-sap-s4hana) or use mission support to connect with mission experts.
