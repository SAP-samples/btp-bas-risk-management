# Troubleshooting Guide

## Introduction

In this section, we provide solutions for the most common issues while executing this mission.

## Configure Your SAP BTP Environment with the Help of Boosters

- **Issue:** Warning while running SAP BTP Booster - check prerequisites not successful
   - **Error message:** Missing Entitlements: Below are the missing entitlements and entitlements with insufficient quota
   - **Solution:** Make sure you have purchased all required services. See [Managing Entitlements and Quotas Using the Cockpit](https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/c8248745dde24afb91479361de336111.html?locale=en-US) for more details.

- **Issue:** Not able to add entitlements to subaccount - plans can not be chosen
   - **Solution:** Make sure you have purchased all required services. See [Managing Entitlements and Quotas Using the Cockpit](https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/c8248745dde24afb91479361de336111.html?locale=en-US) for more details.

- **Issue** Cannot find SAP Build Work Zone, standard edition in Service Marketplace
    - **Solution:**  Make sure you have clicked save button after you have configured entitlements earlier. SAP Build Work Zone, standard edition tile will only appear in marketplace after entitlements are configured for subaccount.

## Develop Risk Management Application Using SAP Business Application Studio Visual Tools

- **Issue:** There is no **Home** tab visible in SAP Business Application Studio.
   - **Solution:** The **Home** tab is only visible after SAP Business Application Studio was fully loaded. This might take some time. If you have closed the tab, find the 3 dots in the top-right corner of your screen and choose _Open Home_ in dropdown.

 - **Issue:** There is no **Explorer** menu visible on the left site of SAP Business Application Studio.
   - **Solution:** Find your open tabs and double-click on any tab, then the menu will open again.

## Cloud Connector

- **Issue:** Check result of mapping virtual to internal system is not reachable.
   - **Error message:** Error during connection attempt, most probably the connection was refused/no application is running on that port
   - **Solution:** Check internal host and port of your connection. If you are using a CAL system, the IP might change after every restart.

- **Issue:** SAP BTP HTTP destination check fails - resource not accessible
  - **Error message:** Resource is not accessible in Cloud Connector or backend is not reachable
   <img src="./images/Backend is not reachable.png" width="80%">

  - [**Solution**](https://launchpad.support.sap.com/#/notes/0002719609)

##  Consume External Service from SAP S/4HANA

- **Issue:** Nothing happens after clicking on the **+** icon to create new external service.
   - **Solution:** Find menu **Service Center** on the left side of your screen. There might be a section **SAP System** expanded, which hides SAP API Business Hub. Click on SAP system to close. Then you can open SAP API Business Hub section.


