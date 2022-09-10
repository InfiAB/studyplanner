Database Design:
  The application requirements were not extensive and thus a simple schema was used, containing all the fields required for the study planner app.
  I wasn't able to integrate the created by part in schema and application in general due to mid-semester exams and lack of time.

Security Considerations:
  The Authentication system uses JWT web for authentication.
  It also uses bycrt(open source library) to cryptographically hash the passwords when stored in mongodb database to reduce password theft risk in case of databse leak.

I have tried my best to keep the code as organized and modular. I also like to comment in places where I feel I can get easily lost, when opening the project after a while.

The UI was also kept simple for the project due to the time crunch.

Story 1 is complete and story 2 half complete.
