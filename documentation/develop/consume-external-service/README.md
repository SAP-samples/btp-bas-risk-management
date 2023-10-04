# Consume External Service from SAP S/4HANA

## Introduction

In this section you will expand your application with an API, which allows to get data from your SAP S/4HANA backend system. This enables the application to use data directly out from the backend system. Also you will update the user interface, so the data from backend is displayed correctly in your application.



### Add Business Partner API to Application

1. Open your SAP Business Application Studio and navigate to the **Storyboard**.

2. Find the tile **External Data Model** and choose the **+** icon to create a new data model.

3. On the left side of your screen the menu **Service Center** will appear. Expand the section **SAP System** and find your **Subaccount** there.

4. Then choose the destination **bupa**.

5. On the bupa page, choose **A_BusinessPartner** in the list **Entity**.

6. Choose **Add External Data Model**.

    <img src="././images/consume_external_service _A1.png" width="100%">

7. Go back to the **Storyboard** page and look for the tile **Services**. Choose the **+** icon to add a new entity.


8. In the pop-up uncheck **Enable Draft Editing** and select the **bupa.A_BusinessPartner**:

9. Choose **ok**.

   <img src="././images/consume_external_service_A11.png" width="60%">

10. Select the **A_BusinessPartner** and choose the **Show Details** icon in Service Editor.

11. Change the name **A_BusinessPartner** to **A_Supplier** in the header.

    <img src="././images/consume_external_service_A8.png" width="60%">

12. In the list check only _BusinessPartner_, _BusinessPartnerFullName_ and _BusinessPartnerIsBlocked_.

13. Choose the **Tick** icon.

<!-- 13. Choose the pencil icon behind your selected property and change the names:
    - _BusinessPartner_ &rarr; _Supplier_
    - _BusinessPartnerFullName_ &rarr; _SupplierFullName_
    - _BusinessPartnerIsBlocked_ &rarr;  _SupplierIsBlocked_ -->

14. Go back to the **Storyboard** page and find tile **Data Models**. Choose the entry **Risks** and select **open in Graphical Modeler**.

15. Choose the icon to **Add Relationship** of the risk entity. Click on anywhere on screen to configure relationship.

    <img src="././images/consume_external_service _3.png" width="60%">

16. In the pop-up configure the relationship like:

    - **Type:** _Association_
    - **Direction** _Unidirectional_
    - **Multiplicity:** _to-one_
    - **Property Name:** _supplier_
    - **Target Entity Type:** _bupa.A_BusinessPartner_

17. Choose **Create** Button.

    <img src="././images/consume_external_service _10.png" width="60%">

### Update UI Components

1. Navigate to the **Storyboard** page of SAP Business Application Studio.

2. Find the tile **UI Applications** and choose the entry **Risks** and choose **Open in Page Map**.
3. Find the entry **List Report** and choose the icon to edit.

    <img src="././images/update_UI_1.png" width="40%">

4. In the Page Editor, expand the **Columns** section and choose the **+** icon and select **Add basic columns** from the dropdown.

    <img src="././images/update_UI_2.png" width="40%">

5. In the pop-up, choose **supplier_BusinessPartner** for **Columns**. Then choose **Add**.

    <img src="././images/update_UI_3.png" width="40%">

6. Click on the arrow to navigate back and choose **risks** to open the **Object Page** entry and choose the edit icon.

    <img src="././images/update_UI_4.png" width="40%">

7. In the entry **Section** open **General Information** &rarr; **Form** &rarr; **Fields**. Choose the **+** icon to add new fields to the UI. In the dropdown, select _Add Basic Fields_.

    <img src="././images/update_UI_5.png" width="40%">

8. Add the following fields using the dropdown:
    - _mitigations_ID_
    - _supplier_BusinessPartner_
    - _BusinessPartnerFullName_
    - _BusinessPartnerIsBlocked_

9. Choose **Add**.

    <img src="././images/update_UI_9.png" width="60%">

10. Navigate back to the **risks object page** page and choose **supplier_BusinessPartner**.

11. Find entry **Display Type** and choose **Value Help** in the dropdown.

    <img src="././images/update_UI_7.png" width="40%">

12. In screen **Value Help** choose **Add column** button.

13. In the dropdown, select _BusinessPartnerFullName_.

14. Repeat step 12 and 13 with _BusinessPartnerIsBlocked_.

15. Disable the **Display as Dropdown** toggle button

16. Choose **Apply**.

    <img src="././images/update_UI_8.png" width="40%">

17. Similary, configure value help for mitigation. select the property `mitigations_ID`

18. Find entry **Display Type** and choose **Value Help** in the dropdown.

19. In screen **Value Help** choose the following

    <img src="././images/update_UI_10.png" width="50%">

20. Choose **Apply**.
## Summary

 In this section, you have integrated an external service API from an SAP S/4HANA system to your application. In the next step, you will deploy your application.


Need help? Look at the [Troubleshooting Guide](../../complete/troubleshooting#consume-external-service-from-sap-s4hana) or use mission support to connect with mission experts.
