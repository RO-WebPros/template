# template
Default HTML Template

Instructions for setup:

  //install git and edit files

  GIT
  
    Initialisation:
      - Create template folder
      - git log // See all modification
      - git diff // See the diferences
      - git init
      - git pull template master --allow-unrelated-histories
      //Change repository url

      - git remote set-url template https://github.com/RO-WebPros/template
      // add repository 
      
      - git remote add template https://github.com/RO-WebPros/template  
      // pull last version on github
      - git pull template master
      
      //push on github last version
      -  git push template master
    
    Work:
      - Make changes
      - git add .
      - git commit -m "your message here"
      - git push template


  
  GULP
    
    Commands for initalisation:
      - npm init
      - npm install gulp --save-dev                         (install gulp)
      - npm install es6-promise --save-dev                  (polyfill needed for some tasks)
      - npm install gulp-sass gulp-autoprefixer --save-dev  (sass and autoprefixer)
      - npm install gulp-plumber gulp-util --save-dev       (better error handling)
      --- npm install gulp-concat --save-dev                  (concatenate js files)
      - npm install gulp-jshint --save-dev                  (validate js files)
      --- npm install gulp-uglify --save-dev                  (uglify js files)
      - npm install browser-sync --save-dev                 (browsersync for automatic refresh)
      - create gulpfile.js
    
