# Back End

[[TOC]]

## Context

The backend is a Web API built with [Ruby on Rails][rails] in API mode. This means that the API follows MVC architecture, except serving JSON instead of HTML.

The data inserted follows a different proccess: it's fetched from Google Spreadsheets.

## Comprehended Entities

The backend is still in expansion to comprehend all entities. The current list of entities managed by the backend is

- Disciplines
- Companies
- Patents

## View

The sequence diagram below shows how the data is fetched:

<img :src="$withBase('/views/backend.svg')" alt="backend view">

- _User_ is the scheduler (see below).

- _Fetch_ is a Rake task stored in `/lib/tasks/fetch_spreadsheets.rake`

- _Get Entities_ represents a service responsible for fetching data from a specific Google Spreadsheets.

- _Entity_ represents a specific Rails model.

## Scheduler

In order to keep the data always updated, the system uses a ruby gem called [whenever][cron_gem] that exposes a high level interface to create [cron jobs][cron].

The scheduler configuration can be found in `/config/schedule.rb`.

[:arrow_left: Go back](/)

[rails]: https://rubyonrails.org/
[cron_gem]: https://github.com/javan/whenever
[cron]: https://en.wikipedia.org/wiki/Cron
