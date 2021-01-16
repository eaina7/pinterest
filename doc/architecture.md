# Architecture

## Components

**Posts**

- Post (main page)
- PostDetailed (post detailed page)

**Filters**

- PostTextSearch
- UserFilter (dropdown filter)
- RatingFilter (checkbox)

**Secondary components**

- GoHomeButton
- Footer

## Views

1. Posts

- Route "/posts"
- Route "/posts/highrating"

These two routes will show results after applying the filters set by the user.

2. PostDetails

- Route "posts/{postId}"

##Pending

- for the view /posts/highrating we have several options:

  - We choose a fixed number (e.g., 5) and use and "=" operator.
  - We choose a rating limit value and all post with a grater value than the limit are considered post with high rating (e.g., for a limit of 5, all posts with rating greater than 5 are considered posts with high rating)

  Both approaches can be used for consulting the api. See:

  - https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/equality-operator
  - https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/ranges
