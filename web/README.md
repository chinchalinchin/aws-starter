# AWS Angular Starter Kit

This repository is curated by the [Cumberland Cloud](https://cumberland-cloud.com). It contains everything you need to deploy a responsive, search-optimized **Angular** single-page-application onto an **AWS** environment.

## CloudFormation

The _cloudformation.yml_ template in the repository will provision all the resources you need to deploy the **Angular** app to the cloud. 

The next section gives a high-level overview. See [Angular on AWS](https://cumberland-cloud.com/blog/article/angular_on_aws) for more information on the **CloudFormation** template and how to use it.

### Overview

TODO

### Quickstart

If you have a domain, a hosted zone ID and an **ACM** SSL certificate ARN **and** you have the [AWS CLI installed and configured](), you can use the helper script `provision-stack` to post the template to **CloudFormation**,

```bash
./scripts/provision-stack
```

The script will prompt you to enter all of the previously mentioned information. Alternatively, you can copy the `.sample.env` file into a new `.env` file and adjust the variables there. This file is included in the `.gitignore`, so the values you store in this file will not be committed to the repo.

```bash
cp .sample.env .env
```

### CloudFront Edge Handlers

TODO

## CI/CD

The **CloudFormation** template will provision a **CodeCommit**-**CodePipeline**-**CodeBuild** CI/CD pipeline. You will need to grab the SSH url of the **CodeCommit** repo that was provisioned and add it as the origin to this repository. Then, push the current head of the master branch to the new remote to kick off the pipeline,

```bash
git remote add codecommit <ssh-url>
git push --set-upstream codecommit master
```

The pipeline will use the _buildspec.yml_ in the project root to build and deploy the **Angular** application to an **S3**-**CloudFront** distribution. See [CI/CD with Angular on AWS]() for more a thorough explanation of all the different components of the pipeline.

## Angular Universal

[Angular Universal]() is installed in the application so the SPA can be prerendered. The following command run from the _app_ directory will generate the prerendered distribution in the _dist_ folder,

```bash
npm run prerender
```

When new pages are added, the `/app/routes.txt` file must be updated to include that route, so the prerender

### SEOService

This services uses the configuration file `/app/src/nav.config.ts` to inject `meta` and `og` attributes in the HTML document during the prerendering process. This assists web crawlers and search engine bots in discovering the site. 

### MetaService

TODO

## Angular Material

TODO

## Preloaded Assets

TODO

### MatIconRegistry

TODO

### Themes

TODO

## HammerJS

TODO

