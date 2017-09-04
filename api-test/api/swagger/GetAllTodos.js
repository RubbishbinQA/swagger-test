'use strict'

module.exports = {
    GetAllTodos : GetAllTodos
}

function GetAllTodos (req, res, next) {
    res.json([
        {
            todo_id: 0,
            todo: "Get some result from the API",
            author: "RUbbishbin",
            createddate: "2017-04-09",
            duedate: "2017-09-09",
            completed: false
        },
        {
            todo_id: 0,
            todo: "Get some result from the API numeber two",
            author: "RubbishbinQA",
            createddate: "2017-04-09",
            duedate: "2017-09-09",
            completed: false
        }
    ])
}