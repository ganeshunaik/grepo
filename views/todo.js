<!DOCTYPE html>

<html>

    <head>
        <title>My shaandaar todolist</title>
        <style>
            a {
                text-decoration: none;
                color: black;
            }
        </style>
    </head>

    <body>
        <h1>TrainWithShubham Community is Super Awesome</h1>
        <ul>
            <% todolist.forEach(function(todo, index) { %>
            <li>
                <a href="/todo/delete/<%= index %>">✘</a>
                <a href="/todo/<%= index %>">✎</a>
                <%- todo %>
            </li>
            <% }); %>
        </ul>

        <form action="/todo/add/" method="post">
            <p>
                <label for="newtodo">What shoud I do?</label>
                <input type="text" name="newtodo" id="newtodo" autofocus />
                <input type="submit" value="Add" />
            </p>
        </form>
    </body>

</html>
