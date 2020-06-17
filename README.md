# Full-Stack-Exercise
Serverless web app built on NodeJS, Apollo, Amplify, AppSync, GraphQLI, and DynamoDB for CRUD functionality. 
Built to support the following schema:
``` 
Employee {
  id: string,
  firstname: string,
  lastname: string,
  skills[]: Skill[]
}
Skill {
  id: string,
  name: string
}
```
s
