# Nodejs interview task for BEAT81

## Story :

We define System here as BEAT81. System creates workouts, users and allocations.

System will have sensors (from outside or in house, which can be broken or working).
Workout will have users called participants.
Users can have sensors, sensors are associated with users, and users are associated with workouts as participants.

Allocation is defined as an activity of assigning sensors to users in any particular workout, in this process either system has enough sensors or not enough, which means if enough sensors are there then system will assign sensors, in this process participants can have their own sensors or they will get one from system, this processes is allocation. In other case when not enough sensors are there in the system or if system run out of sensors then participants will be left without sensors and hence no allocation for them.

Sensors can be broken or working, so during the allocation process we always assign a sensor which is availble to use and also not broken!

## Scenario:

Users will come to join any particular Workout. They might have an app for example to use and select a workout, they will see a list of workouts and then can tap or select any one of them. After the workout selection, app will show them a number or an id of a sensor, which they then can grab and start doing the workout.

Behind the scenes they will be allocated a sensor automatically. In case if they find out that sensor is broken or not working for some reason, then they can tap on the button in app to get the next available working sensor.

## Entities :

- Workouts
- Users
- Sensors
- Allocations

## APIs :

- GET /workouts/:id

- GET /workouts/:id/allocations

- POST /workouts/:id/allocations

## Frontend :

UI for admin and user

- for user - there will be list of workouts
  user will select one and then he would see a number/id for sensor
  List of participants per workout (in realtime) should be shown in the right side panel

- for admin - admin will select a workout and a list of users and then on submit
  List of participants per workout (in realtime) should be shown in the right side panel

Admin/User can mark a sensor broken (system may decide if a sensor is broken or not)
and on marking sensor broken, user should get update in real time that his sensor is broken and then he should see a button to get another sensor.

## To Do :

- authorization of requests using jwt
- Frontend
