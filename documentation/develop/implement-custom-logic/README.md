# Implement Custom Logic

## Introduction

In this section, you will implement the custom logic to define the criticality based on the impact of the risks.

- Create service implementation 
- Add 'READ' service handler for the `risks` entity
- Implement the custom logic
- Modify the user interface `Risk` app with necessary changes

### Create Service Implementation 

1. Choose the Risks service in the storyboard and choose **open in Graphical Modeler** to create the Business Logic.

    <img src="./images/storyboard.png" width="40%">

2. Choose the **Add Logic** in the storyboard and then choose the **Add** button in Add application logic popup.

    <img src="./images/service_editor.png" width="40%">

    <img src="./images/add_logic.png" width="40%">

2. Now Select **After** in the Phase, **Read** in the Standard Event and choose the **Open JS Editor**.

    <img src="./images/logic_editor.png" width="40%">    

3. Add the following code to the `code/risks-service.js` under the **module.exports**:

```js

            const risksData = context.results;
            const risks = Array.isArray(risksData) ? risksData : [risksData];
            risks.forEach(risk => {
                if (risk.impact >= 100000) {
                    risk.criticality = 1;
                } else {
                    risk.criticality = 2;
                }
            });
```
>Hint: Files are auto saved, this might take a few seconds.

### Update UI Components

1. Navigate to the **Home** page of the project.

2. Find the tile **User Interfaces** and choose the entry **Risks**.

3. Find the entry **List Report** and choose the icon to edit.

    <img src="./images/update_UI_1.png" width="40%">

4. In the Page Editor, expand the **Columns** section and choose **impact**.

5. Find the entry **Criticality** and choose **criticality** column as the value.

6. Choose **Criticality Representation** as **With Icon**.

     <img src="./images/update_UI_criticality.png" width="40%">

7. Now, the separate _criticality_ column is no longer required. Find and remove the _criticality_ column by by clicking the delete icon next to it. 

    <img src="./images/delete_UI_1.png" width="40%">

8. Click on the Page Map arrow to navigate back.

    <img src="./images/navigate_UI_1.png" width="40%">

9. Choose the **Object Page** entry and choose the edit icon.

    <img src="./images/update_UI_4.png" width="40%">

10. In the entry section open **General Information &rarr; Form &rarr; Fields**.

    <img src="./images/update_UI_5.png" width="40%">

11. Find and remove the _criticality_ column by clicking the delete icon next to it. 

## Summary

You now have added the custom logic and handler to the developed application.

You can now perform a quick test run using the [preview](https://help.sap.com/docs/Application%20Development/6a5fc562f6e2402aa84b0416614a05fc/d0d7f68abdcb4c4bb9df427c9f925dba.html?locale=en-US) in SAP Business Application Studio with sample data to try out the application.
> Hint: In case there is no **Preview** button in Home screen, select the **...** button and then choose **Preview** in the dropdown.

> Hint: Notice the change in the _impact_ column.

<img src="./images/result_1.png" width="80%">
    