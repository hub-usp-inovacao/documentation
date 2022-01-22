(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{384:function(e,t,s){"use strict";s.r(t);var a=s(46),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"back-end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#back-end"}},[e._v("#")]),e._v(" Back End")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#context"}},[e._v("Context")])]),s("li",[s("a",{attrs:{href:"#comprehended-entities"}},[e._v("Comprehended Entities")])]),s("li",[s("a",{attrs:{href:"#view"}},[e._v("View")])]),s("li",[s("a",{attrs:{href:"#scheduler"}},[e._v("Scheduler")])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),s("p",[e._v("The backend is a Web API built with "),s("a",{attrs:{href:"https://rubyonrails.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby on Rails"),s("OutboundLink")],1),e._v(" in API mode. This means that the API follows MVC architecture, except serving JSON instead of HTML.")]),e._v(" "),s("p",[e._v("The data inserted follows a different proccess: it's fetched from Google Spreadsheets.")]),e._v(" "),s("h2",{attrs:{id:"comprehended-entities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comprehended-entities"}},[e._v("#")]),e._v(" Comprehended Entities")]),e._v(" "),s("p",[e._v("The backend is still in expansion to comprehend all entities. The current list of entities managed by the backend is")]),e._v(" "),s("ul",[s("li",[e._v("Disciplines")]),e._v(" "),s("li",[e._v("Companies")]),e._v(" "),s("li",[e._v("Patents")])]),e._v(" "),s("h2",{attrs:{id:"view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[e._v("#")]),e._v(" View")]),e._v(" "),s("p",[e._v("The sequence diagram below shows how the data is fetched:")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/views/backend.svg"),alt:"backend view"}}),e._v(" "),s("ul",[s("li",[s("p",[s("em",[e._v("User")]),e._v(" is the scheduler (see below).")])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Fetch")]),e._v(" is a Rake task stored in "),s("code",[e._v("/lib/tasks/fetch_spreadsheets.rake")])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Get Entities")]),e._v(" represents a service responsible for fetching data from a specific Google Spreadsheets.")])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Entity")]),e._v(" represents a specific Rails model.")])])]),e._v(" "),s("h2",{attrs:{id:"scheduler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scheduler"}},[e._v("#")]),e._v(" Scheduler")]),e._v(" "),s("p",[e._v("In order to keep the data always updated, the system uses a ruby gem called "),s("a",{attrs:{href:"https://github.com/javan/whenever",target:"_blank",rel:"noopener noreferrer"}},[e._v("whenever"),s("OutboundLink")],1),e._v(" that exposes a high level interface to create "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"}},[e._v("cron jobs"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("The scheduler configuration can be found in "),s("code",[e._v("/config/schedule.rb")]),e._v(".")]),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/"}},[e._v("⬅️ Go back")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);