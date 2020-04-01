const DATA = {
    "employees":[
        {"firstName":"John","lastName":"Doe"},
        {"firstName":"Anna","lastName":"Smith"},
        {"firstName":"Peter","lastName":"Jones"},
        {"firstName":"Doni","lastName":"Wong"},
        {"firstName":"Slamet","lastName":"Jordan"},
        {"firstName":"Carlo","lastName":"Wee"},
        {"firstName":"Philips","lastName":"Morris"},
        {"firstName":"Angga","lastName":"Dwi"},
        {"firstName":"Vicky","lastName":"Sasongko"},
        {"firstName":"Nadya","lastName":"Lembayung"},
    ],
    "jobs":[
        {"department": "QC", "title": "QA"},
        {"department": "IT", "title": ['IT Support', 'Software engineer', 'UI/UX', 'DevOps', 'Tester']},
        {"department": "Human Resources Development", "title": "SPV"},
        {"department": "Finance and Accounting", "title": "Finance"},
        {"department": "Marketing dan Customer Service", "title": "marketing"},
        {"department": "Maintenance and Facility", "title": "maintenance"},
    ],
    "details": [
        {"age": [22, 23, 24 ,29, 30, 32 ]},
        {"experience": ['2 Tahun', '3 Tahun', '4 Tahun',]}
    ],
    // PRINT DATA
        printList1: () => {
            let employeeName = DATA.employees[0] .firstName
            let employeeName2 = DATA.employees[0] .lastName
            let employeeJob = DATA.jobs[1].department
            let employeeTitle = DATA.jobs[1].title[2]
            let employeeAge = DATA.details[0].age[1]
            let employeeExperience = DATA.details[1].experience[0]

            console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
            
        },

        printList2: () => {
            let employeeName = DATA.employees[1] .firstName
            let employeeName2 = DATA.employees[1] .lastName
            let employeeJob = DATA.jobs[2].department
            let employeeTitle = DATA.jobs[2].title
            let employeeAge = DATA.details[0].age[3]
            let employeeExperience = DATA.details[1].experience[2]

            console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
            
        },
        printList3: () => {
            let employeeName = DATA.employees[2] .firstName
            let employeeName2 = DATA.employees[2] .lastName
            let employeeJob = DATA.jobs[1].department
            let employeeTitle = DATA.jobs[1].title[3]
            let employeeAge = DATA.details[0].age[2]
            let employeeExperience = DATA.details[1].experience[1]

            console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
            
        },
        printList4: () => {
            let employeeName = DATA.employees[3] .firstName
            let employeeName2 = DATA.employees[3] .lastName
            let employeeJob = DATA.jobs[1].department
            let employeeTitle = DATA.jobs[1].title[4]
            let employeeAge = DATA.details[0].age[0]
            let employeeExperience = DATA.details[1].experience[0]

            console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
            
        },
        printList5: () => {
            let employeeName = DATA.employees[4] .firstName
            let employeeName2 = DATA.employees[4] .lastName
            let employeeJob = DATA.jobs[1].department
            let employeeTitle = DATA.jobs[1].title[2]
            let employeeAge = DATA.details[0].age[1]
            let employeeExperience = DATA.details[1].experience[0]

            console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
            
        },
        printList6: () => {
            let employeeName = DATA.employees[5] .firstName
            let employeeName2 = DATA.employees[5] .lastName
            let employeeJob = DATA.jobs[3].department
            let employeeTitle = DATA.jobs[3].title
            let employeeAge = DATA.details[0].age[5]
            let employeeExperience = DATA.details[1].experience[2]

            console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
            
        },
        printList7: () => {
            let employeeName = DATA.employees[6] .firstName
            let employeeName2 = DATA.employees[6] .lastName
            let employeeJob = DATA.jobs[5].department
            let employeeTitle = DATA.jobs[5].title
            let employeeAge = DATA.details[0].age[3]
            let employeeExperience = DATA.details[1].experience[0]

            console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
            
        },
        printList8: () => {
            let employeeName = DATA.employees[7] .firstName
            let employeeName2 = DATA.employees[7] .lastName
            let employeeJob = DATA.jobs[1].department
            let employeeTitle = DATA.jobs[1].title[0]
            let employeeAge = DATA.details[0].age[1]
            let employeeExperience = DATA.details[1].experience[0]

            console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
            
        },
        printList9: () => {
            let employeeName = DATA.employees[8] .firstName
            let employeeName2 = DATA.employees[8] .lastName
            let employeeJob = DATA.jobs[0].department
            let employeeTitle = DATA.jobs[0].title
            let employeeAge = DATA.details[0].age[2]
            let employeeExperience = DATA.details[1].experience[0]

            console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
            
        },
        printList10: () => {
            let employeeName = DATA.employees[9] .firstName
            let employeeName2 = DATA.employees[9] .lastName
            let employeeJob = DATA.jobs[1].department
            let employeeTitle = DATA.jobs[1].title[1]
            let employeeAge = DATA.details[0].age[1]
            let employeeExperience = DATA.details[1].experience[0]

            console.log(`name: ${employeeName} ${employeeName2}, jobs: department: ${employeeJob}, title: ${employeeTitle}, age: ${employeeAge}, Experience: ${employeeExperience}`);
            
        },

        printAll: () => {
            DATA.printList1()
            DATA.printList2()
            DATA.printList3()
            DATA.printList4()
            DATA.printList5()
            DATA.printList6()
            DATA.printList7()
            DATA.printList8()
            DATA.printList9()
            DATA.printList10()
        }
        
    }
    // console.log(DATA.jobs[0].department);
    // console.log(DATA.jobs[1].title[2]);


    // let building = {
    //     name: 'batam pos',
    //     floor: 21,
    //     printNameAndFloor: function () {
    //         const name =this.name;
    //         const floor = this.floor;
    //         console.log(`${name} building have ${floor} floors.`);
    //     }