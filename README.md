# Website

A documentation website for open-source projects in HSRW Robotics Club

Visit:

https://hsrwrobotics.github.io/HSRW_Robotics_Project/

## Build the repo
```consolec
npm run build
```

## Run docs locally

```consolec
cd HSRW_Robotics_Project
yarn start
```

## Deployment

```consolec
cmd /C "set "GIT_USER=hsrwrobotics" && yarn deploy"
```

## Mdx features
```html
import useBaseUrl from '@docusaurus/useBaseUrl';

<div id="<id name>">
<p align="center">
<img alt="<image name>" src={useBaseUrl('<image url>')}/>
</p>
</div>

To refer the <a href="#<id name>">image</a> above
```

## Blog summary truncation
Use the `<!--truncate-->` marker in your blog post to represent what will be shown as the summary when viewing all published blog posts. Anything above `<!--truncate-->` will be part of the summary. For example:

```yml
---
title: Truncation Example
---
All these will be part of the blog post summary.

Even this.

<!--truncate-->

But anything from here on down will not be.

Not this.

Or this.
```


