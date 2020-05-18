
<h2>SkeletonExpress</h2>

skeletonExpress allows you to generate complete project structure for your express projects.

The package pre installs express(Exact version), body-parser, morgan, cors and nodemon(as a dev dependency) just run this command and no need to do **"npm install"** anymore.

The generated project structure is as follows-

```

├── app.js
├── controllers
│   └── controller.js
├── cron
│   └── cron.js
├── database
│   ├── migration
│   ├── models
│   └── seeders
├── helper
├── middlewares
├── package.json
├── package-lock.json
├── public
│   ├── images
│   ├── js
│   └── styleSheets
├── routes
│   └── router.js
├── services
├── test
├── tree.txt
└── views

```

The steps regarding installation are -

1.Download the package globally

``` npm install -g skeletonExpress ```

2.run the following command

```skeleton install <your_app_name> e.g skeleton install nodeGOAT```

3.cd to your created folder, in this case

``` cd nodeGOAT``` 

4.run
```npm run dev``` 

go to the browser and hit :localhost:3000

and you will see the following output-
<h1>Welcome </h1>

enjoy !!

