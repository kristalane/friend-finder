# friend-finder

Next steps, for my copious spare time on this homework project: 

-Clearing the survey fields when data is entered.

-Adding more robust seed data (perhaps even a database, rather than storing data in an array of objects)

-Displaying more details about the match itself (a percentage of how closely they matched, for example)


Besides the learning object of this assignment (getting more comfortable with express, navigating more complex file structures, and generally "tying it altogether"), I ran into a few other difficulties with this project, including (but not limited to): 

-ran into compatibility issues using different frameworks/technologies (for example, $.post gave me trouble with the request body format whereas $.ajax did not. In addition, for a while the success modal was working, but not actually displaying any data because it needed to be nested in the HTML differently. And a few other things I'll learn more deeply as I move forward).

-the order in which initializing code for body-parser (npm package to handle JSON) appears relative to other initializing code in the server.js file is evidently critical for body-parser to work.
