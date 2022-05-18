# AWS Angular Starter Kit

This repository is curated by the [Cumberland Cloud](https://cumberland-cloud.com). It contains everything you need to deploy a responsive, search-optimized **Angular** single-page-application onto an **AWS** environment.

## CloudFormation

The _cloudformation.yml_ template in the repository will provision all the resources you need to deploy the **Angular** app to the cloud. 

See [Angular on AWS](https://cumberland-cloud.com/blog/article/angular_on_aws) for more information on the **CloudFormation** template and how to use it. 

### Quickstart

If you have a domain, a hosted zone ID and an **ACM** SSL certificate ARN **and** you have the [AWS CLI installed and configured](), you can use the helper script `provision-stack` to post the template to **CloudFormation**,

```bash
./scripts/provision-stack
```

## CI/CD

The **CloudFormation** template will provision a **CodeCommit**-**CodePipeline**-**CodeBuild** CI/CD pipeline. You will need to grab the SSH url of the **CodeCommit** repo that was provisioned and add it as the origin to this repository. Then, push the current head of the master branch to the new remote to kick off the pipeline,

```bash
git remote add codecommit <ssh-url>
git push --set-upstream codecommit master
```

The pipeline will use the _buildspec.yml_ in the project root to build and deploy the **Angular** application to an **S3**-**CloudFront** distribution. See [CI/CD with Angular on AWS]() for more a thorough explanation of all the different components of the pipeline.

## Angular Universal

TODO

### SEOService

TODO

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

