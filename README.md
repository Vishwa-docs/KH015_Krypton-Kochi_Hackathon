# KH015 - Team Krypton
***
***
# Demo Video

# Link To Presentation

***
***
## Team Members
| Name                | Role                         |
|---------------------|------------------------------|
| Vishwa Kumaresh     | Android Development          |
| Achintya Lakshmanan | Model Building and Deployment |
| Saran Shankar       | Full Stack Development       |

***
## Project Description
### **FRAUD DETECTION SYSTEM**
We wish to tackle the Problem Statement of "Behavioural Analytics for Security in Financial Transactions".

4.7 Trillion Dollars! That is the amount of revenue lost every year due to fraudsters. Astonishingly, 93% of banking-related fraud happens online. This shows the pressing need for an improved Anomaly Detection System. 

We propose a novel behavioral analytics system as a SAAS, exploiting ML algorithms for real-time detection of fraudulent transactions. The Machine Learning model will analyze whether the incoming transaction is fraudulent or legitimate. Upon raising the flag for the fraudulent ones, the system also tracks the criminal's IP address to estimate their location for further action. Being a SAAS enables the system to also send alerts to the clients to be wary of  criminals.

To tackle this problem, we propose a **three-pronged solution**: 
1. **Prevention:** We will create an Android Application with inbuilt Spam and Phishing detection, to protect the user from any harm from the beginning. 
2. **Detection:** The Main Website will connect to a database and a fraud detection model. It will classify whether the transaction is a fraud or not 
3. **Mitigation:** Additionally, the webpage will return the GeoLocation of the IP Address. We will also be storing the details to perform Social Network Analysis on the transaction to identify patterns. 

### Our Innovations
1. **Phishing and Spam Detection** on the Edge
2. **GeoSpatial Analysis:** Utilizing IP-based location distance metrics for geographical analysis. 
3. **Real-time Network Analysis:** Analyzes financial transactions in real-time for enhanced security. 
4. **Crypto-Based Authentication:** Implements a hash-based authentication (Zero-Knowledge Protocol) for secure user login. 
5. **Keystroke Analysis:** Utilizes the user's typing pattern to identify the user.

***
## Technology Stack
1. Frontend Technologies : React, Bootstrap 
2. Backend Technologies : NodeJS, Flask (Python) 
3. Database : MongoDB, Firebase 
4. Machine Learning and Pipelines : Tensorflow, Scikit-Learn, Jenkins 
5. APIs : FastAPI
6. Android App : Kotlin
7. Cloud Messaging : Apache Kafka [Not Integrated Fully]

***
# UI and App
![Image1](https://github.com/Vishwa-docs/KH015_Krypton-Kochi_Hackathon/blob/main/Resources/Spam%20App.jpg)
![Image2](https://github.com/Vishwa-docs/KH015_Krypton-Kochi_Hackathon/blob/main/Resources/WhatsApp%20Image%202024-02-04%20at%2015.19.31.jpeg)

***
## Data

The data used for training our models was sourced from an open source synthetic dataset on kaggle :

- [Dataset Link](https://www.kaggle.com/datasets/kartik2112/fraud-detection/data)

Our novelty comes with our incorporation of time and distance-based measures to train our model to better detect fraudulent transactions. We compute the distance between the last known location of an account and the current location along with the time interval between the transactions to allow the model to learn the anomalous behavior of certain transactions. This location data is sourced from the public IP information available with the transaction packet.

## Model

The model we chose for our approach is the ever-resilient Random Forest. Through a series of attempts, random forest proved to be better than the others for our carefully curated dataset.

## Deployment

The end deliverable is packaged as a React-Flask web app and a Fast API that allows the users to check if a given transaction is fraudulent. The location data is directly taken from the IP information given. The distance metric is calculated after referring to the last known location and time stamp.

***
***
# Work Done
### Submission 1
1. Setup Git Repo
2. Created README.md
3. Created flowcharts and diagrams for website
4. Started Researching Models for Fraud Detection
![Image](https://github.com/Vishwa-docs/KH015_Krypton-Kochi_Hackathon/blob/main/Resources/Model%20Design.png)

### Submission 2
1. Created and Initialised an Android app and started building static pages
2. Started working on the model for fraud detection
3. Started coding web page

### Submission 3
1. Finished few pages in web application
2. Redid Android App Code
3. Finished and Evaluated the model for Fraud Detection

### Submission 4
1. Finished few more features in the web application (IP Tracking)
2. Finished the static pages in Android App
3. Started building model for Android App

### Submission 5
1. Improved the model
2. Attended talk for seminar

### Submission 6
1. Finished the model for Android App
2. Backend integration with web application complete
3. Started working on the deployment of the model on app

### Submission 7
1. Added rules for Android App
2. Added Zero Knowledge Protocol for Login Page

### Submission 8
1. Completed the Mobile App

### Submission 9
1. Key Logging Done

### Submission 10
1. Front End Integration

### Submission 11
1. Started working on Keystroke analysis
2. Frontend Dashboard for the web application

### Submission 12
1. Started work on Kafka to connect
2. Started implementing Keystroke analysis
3. Nearly completed webpage

### Submission 13
1. Completed the Webpage
2. Completed Keystroke Analysis

### Submission 14
1. Completed the integration of the apps


***
***
