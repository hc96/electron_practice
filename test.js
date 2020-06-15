var spawn = require('child_process').spawn
var fs = require('fs')
var notify = {
    tilte: 'Succeed',
    body: 'run python file and create the folder'
}


var btn_one = document.getElementById('one')
var btn_two = document.getElementById('two')
var btn_three = document.getElementById('three')
var box_cmd = document.getElementById('cmd_box')
var box_dir = document.getElementById('dir_box')

btn_one.addEventListener('click', function (e) {

    const spawn1 = spawn('python3', ['array.py'])

    spawn1.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`)
        new Notification('Failed', {
            tilte: 'Failed',
            body: 'failed'
        })
    })

    spawn1.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);

        new Notification('Succeed', {
            tilte: 'Succeed',
            body: 'run python file and create the folder'
        })

        fs.mkdir('person_1', function (error) {
            if (error) {
                console.log(error)
                return false
            }
            console.log('succeed to create the directory')
        })

        fs.writeFile('person_1/123.txt', data, 'utf8', function (error) {
            if (error) {
                console.log(error);
                return false;
            }
            console.log('succeed to write file');
        })


    })


    // spawn('python3 python/test.py ', function (error, stdout, stderr) {
    //     if (error) {
    //         console.error('error: ' + error);
    //         new Notification('Failed', {
    //             tilte: 'Failed',
    //             body: 'failed'
    //         })
    //         return;
    //     }
    //     new Notification('Succeed', {
    //         tilte: 'Succeed',
    //         body: 'run python file and create the folder'
    //     })
    //     // box_cmd.innerHTML = "<p>finished! called python file, 1 person," + stdout + "</p>"
    //     fs.mkdir('person_1', function (error) {
    //         if (error) {
    //             console.log(error)
    //             return false
    //         }
    //         console.log('succeed to create the directory')
    //     })

    //     fs.writeFile('person_1/123.txt', 'this is a test file', 'utf8', function (error) {
    //         if (error) {
    //             console.log(error);
    //             return false;
    //         }
    //         console.log('succeed to write file');
    //     })

    //     // box_dir.innerHTML = "<span>create the directory</span>"
    //     console.log(stdout)
    // });




});

btn_two.addEventListener('click', function (e) {

    fs.mkdir('person_2', function (error) {
        if (error) {
            console.log(error)
            return false
        }
        console.log('succeed to create the directory')
    })

    const spawn2 = spawn('python3', ['python/test.py', 'person_2'])

    spawn2.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`)
        new Notification('Failed', {
            tilte: 'Failed',
            body: 'failed'
        })
    })

    spawn2.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);

        new Notification('Succeed', {
            tilte: 'Succeed',
            body: 'run python file and create the folder'
        })

        fs.mkdir('person_2', function (error) {
            if (error) {
                console.log(error)
                return false
            }
            console.log('succeed to create the directory')
        })

        fs.writeFile('person_2/123.txt', 'this is a test file', 'utf8', function (error) {
            if (error) {
                console.log(error);
                return false;
            }
            console.log('succeed to write file');
        })


    })

    // exec('python3 python/test.py ', function (error, stdout, stderr) {
    //     if (error) {
    //         console.error('error: ' + error);
    //         new Notification('Failed', {
    //             tilte: 'Failed',
    //             body: 'failed'
    //         })
    //         return;
    //     }
    //     new Notification('Succeed', {
    //         tilte: 'Succeed',
    //         body: 'run python file and create the folder'
    //     })
    //     // box_cmd.innerHTML = "<p>finished! called python file, 2 person," + stdout + "</p>"
    //     fs.mkdir('person_2', function (error) {
    //         if (error) {
    //             console.log(error)
    //             return false
    //         }
    //         console.log('succeed to create the directory')
    //     })
    //     // box_dir.innerHTML = "<span>create the directory</span>"
    //     console.log(stdout)
    // });
});

btn_three.addEventListener('click', function (e) {

    const spawn3 = spawn('python3', ['python/test.py'])

    spawn3.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`)
        new Notification('Failed', {
            tilte: 'Failed',
            body: 'failed'
        })
    })

    spawn3.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);

        new Notification('Succeed', {
            tilte: 'Succeed',
            body: 'run python file and create the folder'
        })

        fs.mkdir('person_3', function (error) {
            if (error) {
                console.log(error)
                return false
            }
            console.log('succeed to create the directory')
        })

        fs.writeFile('person_3/123.txt', 'this is a test file', 'utf8', function (error) {
            if (error) {
                console.log(error);
                return false;
            }
            console.log('succeed to write file');
        })


    })

    // exec('python3 python/test.py ', function (error, stdout, stderr) {
    //     if (error) {
    //         console.error('error: ' + error);
    //         new Notification('Failed', {
    //             tilte: 'Failed',
    //             body: 'failed'
    //         })
    //         return;
    //     }
    //     new Notification('Succeed', {
    //         tilte: 'Succeed',
    //         body: 'run python file and create the folder'
    //     })
    //     // box_cmd.innerHTML = "<p>finished! called python file, 3 person," + stdout + "</p>"
    //     fs.mkdir('person_3', function (error) {
    //         if (error) {
    //             console.log(error)
    //             return false
    //         }
    //         console.log('succeed to create the directory')
    //     })
    //     // box_dir.innerHTML = "<span>create the directory</span>"
    //     console.log(stdout)
    // });
});



