# Architecture

## Table of Contents

- [Components](#components)
- [Views](#views)
- [Pending](#pending)

## Components

Stored in src/components

**Posts**

- _Post_ (main page)
- _PostDetailed_ (post detailed page)

**Filters**

- _PostTextSearch_
- _UserFilter_ (dropdown filter)
- _RatingFilter_ (checkbox)

**Secondary components**

- _GoHomeButton_
- _Footer_

## Views

Stored in src/views

Views are composed of components as described on the wireframes:

- [Main page](./design/wireframe_home.png)
- [Post details page](./design/wireframe_post_details.png)

1. _Posts_

- Route "/posts": all posts
- Route "/posts/user/{userId}: only posts by user with id = _userId_
- Route "/posts/highrating": only posts with high rating (to be defined)

  These routes will show results after applying the filters set by the user.

2. _PostDetails_

- Route "posts/{postId}": only post with id = _postId_

## Pending

1. For the view /posts/highrating we have several options:

- We choose a fixed number (e.g., 5) and use and "=" operator.
- We choose a rating limit value and all post with a grater value than the limit are considered post with high rating (e.g., for a limit of 5, all posts with rating greater than 5 are considered posts with high rating)

  Regardless of the approach, the results can be directly retrieved from the API. See:

  - https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/equality-operator

  - https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/ranges
