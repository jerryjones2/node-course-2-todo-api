MongoDb Local
./mongod --dbpath ~/Develop/mongodb-data/

npm install mongodb --save 

ObjectId("5b848c5bd77b918d3a0b1ad2")
12 byte value
4 byte - timestamp when document created
3 byte - machine identifier
2 byte - process id
3 byte - random value

you can send in an _id value if you can if you need to

Add to git
==================
git init
git status
create .gitignore, add node_modules/ and package-lock.json to file
git add .
git status
git commit -m 'Init commit'

go to github
create repository
name: node-course-2-todo-api

git remote add origin https://github.com/jerryjones2/node-course-2-todo-api.git
git push -u origin master
