# jsumé

JSON resume.

Inspired by [antfu/resume](https://github.com/antfu/resume) and [JSON Resume](https://jsonresume.org/).

## How it works

- The data is hosted by [Gist](https://gist.github.com/MoozonWei/70c30e0182fdf013aa6454f10c9db299) with [JSON Resume](https://jsonresume.org/) standard.
- The website is hosted by [Netlify](http://netlify.com/) with CI/CD.

## Deploy your own resume

1. Clone with [degit](https://github.com/Rich-Harris/degit).

    ```shell
    degit moozonwei/jsume my-jsume
    ```

2. Create a `resume.json` [gist](https://gist.github.com/), and get the gist id.

3. Edit `/src/config/jsume.config.json`:

    ```JSON
    {
      "gist": {
        "username": "your github username",
        "id": "gist id"
      }
    }
    ```

4. Replace `/public/resume.json` with your own `resume.json` file.

5. Setup [Netlify](http://netlify.com/).

> Gist stores your **online** resume data, and `/public/resume.json` stores your resume data **locally**. If resume data cannot be found on Gist, local resume data will be used as a backup.

## License

The script is licensed with [MIT](https://choosealicense.com/licenses/mit/#).
