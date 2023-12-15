# Develop Risk Management Application Using SAP Business Application Studio Visual Tools

## Introduction

In this section you will first create your development environment in SAP Business Application Studio. Then you will use the created environment to develop the sample application:
- Create data models
- Define relationships between the entities
- Upload test data
- Build a user interface to display the data
- Add role concept to define different authorizations

 <img src="././images/SolutionDiagram_2.png" width="80%">

## Develop Risk Management Application

### Open Low-Code Development Tools and Create Development Project

1. Go back to your subaccount in SAP BTP Cockpit and navigate to **Instances and Subscriptions** in the menu on the left side of the screen.

2. Find **SAP Business Application Studio** in the application section and choose the browser icon to open the app.

3. In home page of SAP Business Application Studio choose button **Create Dev Space** to start

   <img src="./images/create_dev_space_1.png" width="70%">

   > A [dev space](https://help.sap.com/docs/SAP%20Business%20Application%20Studio/9d1db9835307451daa8c930fbd9ab264/6053df8bca3946f098bc9f89e49d7317.html?locale=en-US) in SAP Business Application Studio is a development environment with the tools, capabilities, and resources needed for developing your application.

4. Enter a name for your Dev Space for example, _Riskmanagement_  and select **[Full-Stack Application Using Productivity Tools](https://help.sap.com/docs/SAP%20Business%20Application%20Studio/9d1db9835307451daa8c930fbd9ab264/00ad0484344c461caf80a7c695fd38af.html?locale=en-US)** in menu.

5. Choose **Create Dev Space**

   <img src="./images/create_dev_space_2.png" width="80%">

6. Your Dev Space is now being created and as soon as status change to _Running_ you can open your Dev Space by clicking on the name

   <img src="./images/create_dev_space_3.png" width="60%">

7.  Click on **Create Project** under Project Explorer.

    <img src="./images/create_project.png" width="60%">

8. Select **Full-Stack Project (Productivity Toolkit)** and choose **Start**.
    
    <img src="./images/start_project.png" width="60%">

9. Enter a **Project Name**, for example, _Riskmanagement_ and provide a **Short Description** and choose **Finish**.

    <img src="./images/project_name.png" width="40%">

   > Loading SAP Business Application Studio for low-code development can take some time, especially if it’s the first time you use it.

10. Once your project is created, you can see the Storyboard of SAP BAS .

    <img src="./images/storyboard.png" width="40%">

#### Start Development of Application and Create Data Model

Now you can start the development of your application. First you will model your application and define the database table and the relationship between the entities.

1. In this application two Data Models 'Risks' and 'Mitigations', to hold the data are needed. To create a Data Model open SAP Business Application Studio, look for the tile **[Data Models](https://help.sap.com/docs/Application%20Development/6a5fc562f6e2402aa84b0416614a05fc/759ecc54523141d1af2b56f7b27c110a.html?locale=en-US)** and choose the **+** icon to add a new entity.

   <img src="./images/add_data_model_1.png" width="30%">

2. A new entity is created for you. Click on the tile and choose **Show Details** to edit the entity

      <img src="./images/add_data_model_2a.png" width="70%">

3. Change the **Entity Name** to _Risks_.

      <img src="./images/change_name.png" width="70%">

4. Retain the property `ID` and choose the **+** icon in the table to add the following properties:

    | Property Name | Property Type | Max Length |
    |---------------|---------------|------------|
    | title         | string        | 100        |
    | prio          | string        | 5          |
    | description   | string        | 100        |
    | impact        | integer       |            |
    | criticality   | integer       |            |

      <img src="./images/add_data_model_risks.png" width="70%">

4. Back in the **Data Model Editor**, choose the **Add Entity** button in the menu on the top to add another entity. Enter the Entity name _Mitigations_. Retain the property `ID` and choose the **+** icon in the table to add following properties:

   | Property Name | Property Type | Max Length |
   |---------------|---------------|------------|
   | description   | string        | 100        |
   | owner         | string        | 100        |
   | timeline      | string        | 100        |

   <img src="./images/add_data_model_mitigations.png" width="60%">

5. Now, you can see two entities in the **Data Model Editor**. In a next step you will describe the interconnection between those entities by defining a relationship, so each risk has a mitigation associated to it.  Find the entry of **Mitigations** and click on the header of the table. Choose **Add relationship Icon** in the menu appearing on the right. Connect the appeared line to Risks entity, by clicking on table and configure the relationship in pop-up.

   <img src="./images/data_model_mitigations.png" width="60%">

6. In the pop-up screen enter all the required details:
   - Select **Type:** _Association_
   - Select **Direction** _Bidirectional_
   - Select **Multiplicity:** _To-Many_
   - Enter **Name:** _Risks_

      <img src="./images/add_data_model_15.png" width="50%">

7. Choose **Create** button to save.

8. In the details section of **Risks**, choose **Aspects** and check entry for **managed**.

      <img src="./images/aspects_mitigations.png" width="30%">

9. In the details section of **Mitigations**, choose **Aspects** and check entry for **managed**.

#### Create Services

Now you will create service entities for Risks and Mitigations to define which parts of the data models you just have created should be exposed to the application.

1. Go back to the storyboard page of the application. Find the **[Services](https://help.sap.com/docs/Application%20Development/6a5fc562f6e2402aa84b0416614a05fc/af4df4c8fcd94152bb7bf6a4e205709b.html?locale=en-US)** tile and choose the **+** icon to add a new service entity.

   <img src="./images/add_services_1.png" width="30%">

2. On the next screen, select _Riskmanagement.Risks_ and choose **Ok** to finish.
   
   <img src="./images/add_service_risks.png" width="30%">

3. Back in service editor, choose **Add Entity** and select _Riskmanagement.Mitigations_ as type and choose **Ok** to finish.

     <img src="./images/add_service_mitigations.png" width="30%">

#### Add Sample Data

Once the structure of your application is finished, you can add sample data to the application. You either can use the visual data editor or insert data using a CSV file.

1. Download the [archive](../../../data.zip) containing the sample data in CSV format and extract the files.

2. Go back to the storyboard of the application. Find the **Risk** entity in **Data Models** and choose **[Set Sample Data](https://help.sap.com/docs/Application%20Development/6a5fc562f6e2402aa84b0416614a05fc/a024e7debfc24b67a0120447b147fab4.html?locale=en-US)**.

   <img src="./images/add_sample_data_1.png" width="30%">

3. Select _Risks_ in the **Entity list** then choose **Import**.

   <img src="./images/add_sample_data_3.png" width="60%">

4. Import `Riskmanagement-Risks.csv` CSV file with the required data for risks.

   <img src="./images/add_sample_data_risks.png" width="60%">

> Hint: SAP Business Application Studio might show an error in this step, which will be fixed while importing the mitigation csv file.

5. Similarly, import `Riskmanagement-Mitigations.csv` file with the required data for mitigations.

## Summary

You now have developed your first application with SAP Business Application Studio visual tools. In the next section you will create user interface and user roles.

Need help? Look at the [Troubleshooting Guide](../../complete/troubleshooting#develop-risk-management-application-using-sap-business-application-studio-visual-tools) or use mission support to connect with mission experts.
