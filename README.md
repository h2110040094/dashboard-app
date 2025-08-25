Here’s an updated **README** with a **“Getting Started”** section included:

---

# Autonomous Vehicle Monitoring

[GitHub Repository](https://github.com/h2110040094/dashboard-app)

## Overview

**Autonomous Vehicle Monitoring** is a real-time monitoring system designed for autonomous vehicles. The system collects, processes, and visualizes live vehicle data to ensure performance tracking and safety analysis.

The motivation behind this project was to **develop a comprehensive real-time monitoring system** that can track essential parameters such as vehicle speed, GPS location, steering angle, and LiDAR/Camera data. Continuous monitoring is crucial in autonomous driving for safety, debugging, and performance evaluation.

## Features

* **Real-time data collection** using ROS topics.
* **Data visualization** using Grafana dashboards for key vehicle parameters.
* **Data preprocessing and analysis** with Python scripts.
* **Integration with edge computing tools** such as Prometheus and InfluxDB for efficient metric collection.

## Technologies Used

* **ROS (Robot Operating System):** For real-time data publishing.
* **Python:** Data processing and analysis scripts.
* **Grafana:** Dashboard visualization of vehicle metrics.
* **Prometheus & InfluxDB:** Real-time metric collection and storage.
* **Edge Computing Concepts:** Handling live data efficiently on autonomous vehicles.

## Motivation

Autonomous vehicles require **continuous monitoring of critical parameters** to ensure safe operation and optimal performance. This project was initiated to build a structured, reproducible system that could:

1. Collect live data from vehicle sensors.
2. Process and analyze the data in real-time.
3. Visualize key metrics on a dashboard for immediate insights.

## Learning Outcomes

Through this project, I gained hands-on experience in:

* Real-time data streaming and processing.
* Integrating monitoring tools for autonomous systems.
* Building dashboards for visualization and performance monitoring.
* Deploying a structured and reproducible system for safety-critical applications.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

* **Python 3.x**
* **ROS (Noetic / Melodic recommended)**
* **Docker** (for Prometheus, InfluxDB, Grafana)
* **Git**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/h2110040094/dashboard-app.git
   cd dashboard-app
   ```

2. Install required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. Start ROS and launch the data publishers:

   ```bash
   roscore
   roslaunch vehicle_monitoring data_publisher.launch
   ```

4. Start Docker services for Prometheus, InfluxDB, and Grafana:

   ```bash
   docker-compose up -d
   ```

5. Open Grafana in your browser (default: `http://localhost:3000`) and import the dashboard configuration provided in the repo.

### Usage

* Monitor vehicle parameters in real-time via the Grafana dashboard.
* Analyze historical metrics using InfluxDB.
* Extend Python scripts for custom preprocessing or analysis.

---

If you want, I can also **add a diagram showing the architecture of the system**—that would make the README visually appealing and easier to understand for anyone reading it.

Do you want me to do that?




# Getting Started with Create React App

![Picture1](https://github.com/user-attachments/assets/0e973f4e-1a2c-4bad-b87e-0ce07f0513a6)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
