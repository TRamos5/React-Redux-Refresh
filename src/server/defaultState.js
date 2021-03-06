import md5 from 'md5'

export const defaultState = {
    // session: {
    //     authenticated: false
    // },
    users: [{
        id: "U1",
        name: "Dev",
        passwordHash:md5("TUPLES")
    },
    {
        id: "U2",
        name: "Dev2",
        passwordhash: md5("PROFITING")
    }],
    groups: [{
        name: "To Do",
        id: "G1",
        owner: "U1"
    },
    {
        name: "To Do Two",
        id: "G2",
        owner: "U1"
    },
    {
        name: "Do More",
        id: "G1",
        owner: "U2"
    },],
    tasks: [{
        name: "Do tests",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false
    },
    {
        name: "Do other tests",
        id: "T2",
        group: "G2",
        owner: "U2",
        isComplete: false
    }],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Greate Work!!!"
    },
    {
        owner: "U2",
        id: "C2",
        task: "T2",
        content: "This is comment two!!!"
    }]
}