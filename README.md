# jsumé

JSON resume.

Inspired by [antfu/resume](https://github.com/antfu/resume) and [JSON Resume](https://jsonresume.org/).

## How it works

- The data is hosted by [Gist](https://gist.github.com/MoozonWei/70c30e0182fdf013aa6454f10c9db299) with [JSON Resume](https://jsonresume.org/) standard.
- The website is hosted by [Netlify](http://netlify.com/) with CI/CD.

## `resume.json` template

```JSON
{
  "en": {
    "basics": {
      "name": "Moozon Wei",
      "label": "Programmer",
      "image": "",
      "email": "email@gmail.com",
      "phone": "(912) 555-4321",
      "url": "https://personal.website.com",
      "summary": "Write something about your self",
      "location": {
        "address": "2712 Broadway St",
        "postalCode": "CA 94115",
        "city": "San Francisco",
        "countryCode": "US",
        "region": "California"
      },
      "profiles": [
        {
          "network": "GitHub",
          "username": "username",
          "url": "https://github.com/username"
        },
        {
          "network": "LinkedIn",
          "username": "username",
          "url": "https://www.linkedin.com/in/username"
        },
        {
          "network": "Twitter",
          "username": "username",
          "url": "https://twitter.com/username"
        },
        {
          "network": "Instagram",
          "username": "username",
          "url": "https://instagram.com/username"
        }
      ]
    },
    "work": [
      {
        "company": "Company",
        "position": "Position",
        "website": "http://website.website",
        "location": "Beijing, China",
        "summary": "Summarize your work experience",
        "ongoing": true,
        "startDate": "2019-10-01",
        "endDate": "",
        "start": {
          "year": 2019,
          "month": 10
        },
        "end": {},
        "highlights": [
          "highlight 1 ",
          "highlight 2",
          "highlight 3"
        ]
      },
      {
        "company": "Company",
        "position": "Position",
        "website": "http://website.website",
        "location": "your city, your country",
        "summary": "Summarize your work experience",
        "ongoing": false,
        "startDate": "2019-10-01",
        "endDate": "2020-06-01",
        "start": {
          "year": 2019,
          "month": 10
        },
        "end": {
          "year": 2020,
          "month": 6
        },
        "highlights": [
          "highlight 1 ",
          "highlight 2",
          "highlight 3"
        ]
      }
    ],
    "education": [
      {
        "institution": "XXXXXX University",
        "area": "Computer Science",
        "studyType": "Bachelor of Science",
        "location": "Beijing, China",
        "ongoing": true,
        "startDate": "2015-09-01",
        "endDate": "2019-06-01",
        "start": {
          "year": 2015,
          "month": 9
        },
        "end": {
          "year": 2019,
          "month": 6
        },
        "description": "Description of your education",
        "activities": "",
        "gpa": "",
        "courses": [
          "Data Structure(95)",
          "Java Programming(88)",
          "Electronic System Fundamentals(86)",
          "Operations Research(85)"
        ]
      }
    ],
    "awards": [
      {
        "title": "XXXXXX Award",
        "summary": "Just a very easy competition, but I got the first prize.",
        "description": "Description of the award",
        "awarder": "Who gave you the award",
        "date": "2018-10-01",
        "fullDate": {
          "year": 2018,
          "month": 10
        }
      }
    ],
    "skills": [
      {
        "keywords": [
          "TypeScript",
          "JavaScript",
          "Vue",
          "Vite"
        ],
        "level": "Senior",
        "name": "Frontend"
      },
      {
        "keywords": [
          "Node",
          "MongoDB",
          "MySQL",
          "Serverless",
          "Nginx",
          "Docker"
        ],
        "level": "Senior",
        "name": "Backend"
      },
      {
        "keywords": [
          "Android",
          "Kotlin",
          "PWA"
        ],
        "level": "Intermediate",
        "name": "Mobile"
      },
      {
        "keywords": [
          "Firebase",
          "AWS",
          "Azure",
          "AliCloud"
        ],
        "level": "Intermediate",
        "name": "DevOps"
      },
      {
        "keywords": [
          "Python",
          "Java",
          "C/C++",
          "C#",
          "Go"
        ],
        "level": "Intermediate",
        "name": "Languages"
      }
    ],
    "languages": [
      {
        "language": "Chinese",
        "fluency": "Native speaker"
      },
      {
        "language": "English",
        "fluency": "Fluent"
      },
      {
        "language": "Japanese",
        "fluency": "Intermediate"
      }
    ],
    "projects": [
      {
        "name": "Vitest",
        "summary": "A blazing fast unit test framework powered by Vite.",
        "githubUrl": "https://github.com/vitest-dev/vitest",
        "description": "Description of the project",
        "keywords": [
          "TypeScript"
        ],
        "startDate": "2019-01-01",
        "start": {
          "year": 2019,
          "month": 1
        },
        "endDate": "2021-01-01",
        "end": {
          "year": 2021,
          "month": 1
        },
        "website": "https://vitest.dev/"
      }
    ],
    "interests": [],
    "certificates": [],
    "volunteer": [],
    "references": [],
    "publications": []
  },
  "zh": {},
  "order": [
    "about",
    "projects",
    "work",
    "education",
    "publications",
    "skills",
    "awards",
    "languages",
    "certificates",
    "volunteer",
    "interests",
    "references"
  ]
}
```

## Deploy your own resume

1. Fork this repository.

2. Create a `resume.json` [gist](https://gist.github.com/), and get `username` & `gistId`.

    *For example*:

    ```
    https://gist.github.com/MoozonWei/70c30e0182fdf013aa6454f10c9db299
    https://|----domain---|-username-|------------gistId-------------|
    ```

<!-- 3. **[Optional & Not recommended]** Create `/public/resume.json`.

    > Gist stores your **online** resume data, and `/public/resume.json` stores your resume data **locally**. If resume data cannot be found on Gist, local resume data will be used as a backup. -->

3. Setup [Netlify](http://netlify.com/).

    - [Link repository](https://docs.netlify.com/git/overview/#git-provider-support)
    - [Create environment variables](https://docs.netlify.com/environment-variables/get-started/#site-environment-variables)

        ```
        VITE_GIST_USERNAME=username
        VITE_GIST_ID=gistId
        ```

4. [Sync the fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) to keep it up-to-date with the upstream repository.

## License

The script is licensed with [MIT](https://choosealicense.com/licenses/mit/#).
