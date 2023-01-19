# Travel News Blog

## About app

This App does API-request (get) to the news website. It written with react and typescript.
This app uses the following third-party libraries These dependencies are written in the package.json file

    "axios": "^1.2.2",
    "node-sass": "^4.14.1",
    "@mui/icons-material": "^5.11.0",
    "@mui/material": "^5.11.4",
    "react-uuid": "^2.0.0",
    
During my acquaintance with React some time ago, I encountered a problem - the API request worked only locally. Therefore, I checked the correctness of the logic through Docker from the very beginning.

I wasn't looking for a perfect design. The main thing was to reproduce the logic of the application

## About build and deploy

Link to the done website
https://travel-news-blog.tetiana-chykalova.click

##### If you need to work with the code, write npm install in your terminal, then all the necessary dependencies will be added for you locally

    npm install

All form fields are mandatory. The fields for entering the phone number and email have additional validation. I would really like to add validation to the field for entering the date of birth, but unfortunately, it is not there yet

### The application is hosted using Docker, Nginx, and AWS EC2, ECR, Route53. Security certificate added using Certbot.
##### If it is necessary to update the application, stop the "daemon" and perform the following actions:

Build a new static file using the docker build

    docker build -t <<tag>> .
    
Push a local Docker representation using the docker push

    docker push <<tag>>

##### Next, use the key to go to the service and execute the following commands on behalf of the root

Download the latest version of the application using the docker pull

    sudo docker pull <<tag>>

Run the new version as a "daemon" (in the example, the port used during the first setup is specified)

    sudo docker run -d -p <<port>> <<tag>>
    
## App problems

Unfortunately, I did not manage to highlight search words in yellow. But I am sure that I will be able to find a solution to this problem.

Also, I have a problem with API.
The site that issues the key has a limit on the number of requests. Please, if your API call doesn't work, email me so I can create a new key, or create your own for this code in a file src/App.tsx:

```
const options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/latest_headlines?lang=en&topic=travel&page_size=50&',
        headers: {
            'x-api-key': 'GlTefXqb76NJpPIJ9yD_1g8T-QF9jMfxVvuAoi24rUs'
        }
    };
```
https://newscatcherapi.com/

## About candidate
### You can find out more about the candidate's experience and skills at the link
https://tetiana-chykalova.click/
