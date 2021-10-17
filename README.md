# React Pagination Tutorial

This is the code repository for my React Pagination Tutorial. You can find that [here](https://youtu.be/EfgsPyoaHR8).

This repository has a React Project, as well as an Express Project.

[React Project](/react-pagination)

[Express Project](/express-api-pagination)

# What is Pagination?

Pagination is a method that allows you to page between pages of data. Lets say you have a database that has millions of records. You want your users to be able to view those records from the UI, maybe in a table. You definitely do not want to send over millions of records all at once. This can slow the network's response back to the client, and even cause the browser to crash.

Pagination allows you to use the power of databases to select a limited amount of records as well as skipping through records. With these two techniques, you can create an effective pagination mechanism on both the front and back end.

# How does it work?

Every pagination method works differently. The one we implemented calls an API every time you click "Next" or "Prev" and it will call the API with updated query parameters to get the correct records for the page.

In the video, we fetched our data by calling `/api/books?count=10&page=0` and let our `usePagination` hook take care of making API calls, updating the returned data for the table, and updating the page.

This means any API that we want to integrate Pagination would just need to return the correct fields and take in the correct query parameters. That's it!

# Installation & Setup

If you choose to use this project, be sure to follow the instructions down below.

Pre-Requisites:

- Have MySQL installed

1. Clone both repositories.
2. Install dependencies for both repositories.
3. Run the React App.
4. Inside the `express-api-pagination/src/database/connectionOptions.js` file, you will need to modify the connectionOptions' properties to satisfy your database credentials.
5. By default, the API runs on Port 6004, and the React App will make API calls to that API with that port.
6. And that's it!
