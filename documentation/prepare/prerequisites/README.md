# Make Sure the Prerequisites Are Fulfilled

To execute all the necessary steps of the tutorial, you will need the following systems, services, and tools available:

## Prerequisites in General

* [SAP S/4HANA system or use SAP Cloud Appliance Library (CAL)](/documentation/prepare/cal-system)

## Prerequisites for SAP BTP

* SAP BTP Cloud Foundry [global account](https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/8ed4a705efa0431b910056c0acdbf377.html?locale=en-US#loioc165d95ee700407eb181770901caec94). SAP BTP trial accounts are not supported.
* SAP BTP [subaccount](https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/8ed4a705efa0431b910056c0acdbf377.html?locale=en-US#loio8d6e3a0fa4ab43e4a421d3ed08128afa)
* SAP BTP space


## Entitlements and Quotas

The application requires the following set of SAP BTP [Entitlements and Quotas](https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/00aa2c23479d42568b18882b1ca90d79.html?locale=en-US):

| Service                           | Plan       |
|-----------------------------------|------------|
| Cloud Foundry Runtime             | MEMORY     |
| Launchpad Service                 | standard   |
| SAP AppGyver                      | standard   |
| SAP Business Application Studio   | standard   |
| SAP HANA Cloud                    | hana       |
| SAP HANA Schemas & HDI Containers | hdi-shared |



## Prerequisites for SAP HANA Cloud

Make sure that you have an instance of SAP HANA Cloud database in your space. See section [Create an SAP HANA Database Instance Using SAP HANA Cloud Central](https://help.sap.com/viewer/9ae9104a46f74a6583ce5182e7fb20cb/hanacloud/en-US/f7febb16072b41f7ac90abf5ea1d4b86.html) for more details.
