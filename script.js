// var info = "internet positif";
// console.log('berisi informasi developer');
// console.log("berisi informasi kpda dev ${info}");
// console.log(`brisi informasi ${info}`);

// window.alert("NOTE: SELAMAT ANDA MEMENANGKAN UNDIAN!")

// memberikan input nama yang bisa diinput penguna
const name = window.prompt("sebutkan nama anda.", "andi");
console.log(`nama saya adalah ${name}`);
// memberikan input nama yang bisa diinput penguna

// KONFIRMASI
const confirmNama = window.confirm(`apa bner namamu ${name} ?`)
if (confirmNama) {
    console.log('silahkan masuk')
} else {
    console.log('ulangi lagi.')
}
KONFIRMASI

// let multiple string penggunaan backtick (`)
// let multipleString =`
// panjang smpai bawah

// asli


// `

// console.log(multipleString);

// !!
// let nilaiUjian = 70;
// let minimalNilai = 75
// let lulus = nilaiUjian > minimalNilai;
// let hasil = lulus ? `lulus` : `DO`
// console.log(`aku $(hasil)`);
// !!

// let multiple string penggunaan backtick (`)

// PEMANGGILAN ARRAY
let human = {
        name: 'bean',
        height: 200,
        weight: 50,
        live: ['batam', 'singapore', {
            position: 'director',
            location: 'batam center',
        }],
        pet: {
            name: 'beanyjr',
            height: 20,
            weight: 20,
            live: ['batam', 'singapore'],
        },
        printNameAndDogName: function () {
            const myName = human.name
            const dogName = human.pet.name
            const living = human.live[1]
            console.log(`my name is ${myName} & my dog is ${dogName} & LIVE IN ${living}`);

        },
        // printJob: () => {function/object/array} - cara baru
        printJob: (urutan) => {
            const job = human.jobs[urutan]
            console.log(`my job is ${job}`);
        }
        }
        // let building = {
        //     name: 'batam pos',
        //     floor: 21,
        //     printNameAndFloor: function () {
        //         const name =this.name;
        //         const floor = this.floor;
        //         console.log(`${name} building have ${floor} floors.`);
        //     },
        let building = {
            name: 'batam pos',
            floor: 21,
            printNameAndFloor: () => {
                const name = building.name;
                const floor = building.floor;
                console.log(`${name} building have ${floor} floors.`);
            },
            printOther: (othernote) => {
                console.log(othernote);

            }
        }


        // PEMANGGILAN ARRAY