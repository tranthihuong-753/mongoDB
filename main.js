const users = [
    {
        _id: "612e71a6dce2b9a83942a9e1",
        index: 0,
        guid: "98b37561-ca63-4cbf-b747-b9e9ea477ade",
        isActive: true,
        balance: "$1,823.48",
        picture: "http://placehold.it/32x32",
        age: 33,
        eyeColor: "brown",
        name: "Cathryn Green",
        gender: "female",
        email: "cathryngreen@squish.com",
        address: "385 Chester Street, Bath, Guam, 2730",
        registered: "2015-11-23T07:00:25 -07:00",
        friends: [
            { id: 0, name: "Luz Peters" },
            { id: 1, name: "Liza Kirk" },
            { id: 2, name: "Jacobs Knowles" },
            { id: 3, name: "Barker Reynolds" },
            { id: 4, name: "Potts Hebert" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9e2",
        index: 1,
        guid: "d8b57561-ca63-4cbf-b747-b9e9ea477bde",
        isActive: false,
        balance: "$2,923.54",
        picture: "http://placehold.it/32x32",
        age: 25,
        eyeColor: "blue",
        name: "John Doe",
        gender: "male",
        company: "TECHMIX",
        email: "johndoe@techmix.com",
        address: "123 Elm Street, Springfield, IL, 62701",
        registered: "2016-05-13T11:45:20 -07:00",
        friends: [
            { id: 0, name: "Alice Johnson" },
            { id: 1, name: "Bob Smith" },
            { id: 2, name: "Charlie Brown" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9e3",
        index: 2,
        guid: "e8b47561-ca63-4cbf-b747-b9e9ea477cfe",
        isActive: true,
        balance: "$3,123.76",
        picture: "http://placehold.it/32x32",
        age: 28,
        eyeColor: "green",
        name: "Jane Smith",
        gender: "female",
        company: "INNOVEX",
        email: "janesmith@innovex.com",
        address: "456 Maple Street, Denver, CO, 80203",
        registered: "2017-03-23T09:10:30 -07:00",
        friends: [
            { id: 0, name: "Dave Matthews" },
            { id: 1, name: "Ella Fitzgerald" },
            { id: 2, name: "Frank Sinatra" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9e4",
        index: 3,
        guid: "f8c37561-ca63-4cbf-b747-b9e9ea477dfe",
        isActive: false,
        balance: "$1,425.32",
        picture: "http://placehold.it/32x32",
        age: 22,
        eyeColor: "hazel",
        name: "Michael Johnson",
        gender: "male",
        company: "GLOBEX",
        email: "michaeljohnson@globex.com",
        address: "789 Oak Street, Seattle, WA, 98101",
        registered: "2018-07-01T15:30:45 -07:00",
        friends: [
            { id: 0, name: "George Harrison" },
            { id: 1, name: "Paul McCartney" },
            { id: 2, name: "Ringo Starr" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9e5",
        index: 4,
        guid: "a8b27561-ca63-4cbf-b747-b9e9ea477efe",
        isActive: true,
        balance: "$2,732.89",
        picture: "http://placehold.it/32x32",
        age: 31,
        eyeColor: "gray",
        name: "Emily Davis",
        gender: "female",
        company: "XANADU",
        email: "emilydavis@xanadu.com",
        address: "123 Pine Street, New York, NY, 10001",
        registered: "2019-11-11T18:20:55 -07:00",
        friends: [
            { id: 0, name: "John Lennon" },
            { id: 1, name: "Mick Jagger" },
            { id: 2, name: "Keith Richards" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9e6",
        index: 5,
        guid: "b8c17561-ca63-4cbf-b747-b9e9ea477ffe",
        isActive: false,
        balance: "$3,532.41",
        picture: "http://placehold.it/32x32",
        age: 29,
        eyeColor: "blue",
        name: "David Wilson",
        gender: "male",
        company: "INNOVEX",
        email: "davidwilson@solarix.com",
        address: "456 Cedar Street, Los Angeles, CA, 90001",
        registered: "2020-02-21T20:45:15 -07:00",
        friends: [
            { id: 0, name: "Steven Tyler" },
            { id: 1, name: "Axl Rose" },
            { id: 2, name: "Freddie Mercury" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9e7",
        index: 6,
        guid: "c8d07561-ca63-4cbf-b747-b9e9ea477ffe",
        isActive: true,
        balance: "$1,938.77",
        picture: "http://placehold.it/32x32",
        age: 35,
        eyeColor: "brown",
        name: "Olivia Brown",
        gender: "female",
        company: "QUANTUM",
        email: "oliviabrown@quantum.com",
        address: "789 Birch Street, Chicago, IL, 60601",
        registered: "2021-04-10T12:30:25 -07:00",
        friends: [
            { id: 0, name: "Whitney Houston" },
            { id: 1, name: "Mariah Carey" },
            { id: 2, name: "Celine Dion" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9e8",
        index: 7,
        guid: "d8e07561-ca63-4cbf-b747-b9e9ea477ffe",
        isActive: false,
        balance: "$4,122.55",
        picture: "http://placehold.it/32x32",
        age: 27,
        eyeColor: "green",
        name: "James Taylor",
        gender: "male",
        company: "VENTURE",
        email: "jamestaylor@venture.com",
        address: "123 Walnut Street, San Francisco, CA, 94101",
        registered: "2022-05-05T08:10:50 -07:00",
        friends: [
            { id: 0, name: "Eric Clapton" },
            { id: 1, name: "Jimi Hendrix" },
            { id: 2, name: "Stevie Ray Vaughan" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9ee",
        index: 8,
        guid: "j8k07561-ca63-4cbf-b747-b9e9ea477ffe",
        isActive: false,
        balance: "$2,439.76",
        picture: "http://placehold.it/32x32",
        age: 27,
        eyeColor: "hazel",
        name: "Lucas Walker",
        gender: "male",
        company: "INFOTECH",
        email: "lucaswalker@infotech.com",
        address: "123 Birch Street, Phoenix, AZ, 85001",
        registered: "2024-09-05T11:40:55 -07:00",
        friends: [
            { id: 0, name: "Jim Morrison" },
            { id: 1, name: "Ray Manzarek" },
            { id: 2, name: "John Densmore" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9ea",
        index: 9,
        guid: "f8g07561-ca63-4cbf-b747-b9e9ea477ffe",
        isActive: false,
        balance: "$3,214.88",
        picture: "http://placehold.it/32x32",
        age: 26,
        eyeColor: "hazel",
        name: "Kevin White",
        gender: "male",
        company: "NEXTGEN",
        email: "kevinwhite@nextgen.com",
        address: "789 Cedar Street, Austin, TX, 73301",
        registered: "2023-10-10T10:10:10 -07:00",
        friends: [
            { id: 0, name: "Tom Petty" },
            { id: 1, name: "Bruce Springsteen" },
            { id: 2, name: "Bob Dylan" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9eb",
        index: 10,
        guid: "g8h07561-ca63-4cbf-b747-b9e9ea477ffe",
        isActive: true,
        balance: "$1,827.54",
        picture: "http://placehold.it/32x32",
        age: 30,
        eyeColor: "brown",
        name: "Sophia Lewis",
        gender: "female",
        company: "INNOVEX",
        email: "sophialewis@digitech.com",
        address: "123 Oak Street, Miami, FL, 33101",
        registered: "2024-02-14T16:20:30 -07:00",
        friends: [
            { id: 0, name: "Janis Joplin" },
            { id: 1, name: "Patti Smith" },
            { id: 2, name: "Joan Jett" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9ec",
        index: 11,
        guid: "h8i07561-ca63-4cbf-b747-b9e9ea477ffe",
        isActive: false,
        balance: "$4,555.67",
        picture: "http://placehold.it/32x32",
        age: 28,
        eyeColor: "blue",
        name: "Emma Clark",
        gender: "female",
        company: "CYBERDINE",
        email: "emmaclark@cyberdine.com",
        address: "456 Maple Street, Dallas, TX, 75201",
        registered: "2024-03-21T14:45:15 -07:00",
        friends: [
            { id: 0, name: "John Bonham" },
            { id: 1, name: "Robert Plant" },
            { id: 2, name: "Jimmy Page" }
        ]
    },
    {
        _id: "612e71a6dce2b9a83942a9ed",
        index: 12,
        guid: "i8j07561-ca63-4cbf-b747-b9e9ea477ffe",
        isActive: true,
        balance: "$3,728.89",
        picture: "http://placehold.it/32x32",
        age: 31,
        eyeColor: "green",
        name: "Liam Moore",
        gender: "male",
        company: "TECHCORE",
        email: "liammoore@techcore.com",
        address: "789 Willow Street, Houston, TX, 77001",
        registered: "2024-06-15T08:30:25 -07:00",
        friends: [
            { id: 0, name: "David Bowie" },
            { id: 1, name: "Lou Reed" },
            { id: 2, name: "Iggy Pop" }
        ]
    }
]

// 1. Tìm người dùng có ID = 612e71a6dce2b9a83942a9e1
// Cach 1
/*
// Viết một hàm có tên là findUserById nhận vào một tham số là _id của người dùng (dưới dạng chuỗi). 
// Hàm này sẽ tìm và trả về toàn bộ thông tin của người dùng có _id đó trong mảng users. 
// Nếu không tìm thấy, hàm sẽ trả về null

// Cach 1 Tao ham 
function findUserById(users, id) {
    const user = users.find(user => user._id === id);
    return user || null;
} 
// Cach 2 tao ham 
var findUserById = function(users, id) {
    const user = users.find(user => user._id === id);
    return user || null;
}

// Ví dụ sử dụng:
const userId = "612e71a6dce2b9a83942a9e1";
const foundUser = findUserById(users, userId);
console.log(foundUser); */
//Cach 2
/*
console.log(users.filter(users=>users._id == "612e71a6dce2b9a83942a9e1"))
*/

// 2. Đếm số người dùng đang hoạt động isAcctive == true
/*
// In ra trong OUTPUT tất cả các cột của phần tử trong users thỏa mãn isActive = true 
console.log(users.filter(users=>users.isActive == true))
// In ra trong OUTPUT _id của các phần tử trong users thỏa mãn isActive = true 
console.log(users.filter(users=>users.isActive == true).map(users=>users._id))
*/ 

// 3. Tính tổng số dư (balance) của tất cả người dùng đang họat động 
/*
// Lấy mảng các user trong mảng users thỏa mãn isActive = true
var alluse = users.filter(users=>users.isActive == true)
var sum = 0; // Khai báo biến toàn cục sum 
// Vòng lặp tính tổng số dư balance 
alluse.forEach(Element => {
    // chuyển balance thành float ($1,823.48 -> 1823.48). 
    // Cụ thể xóa '$' , xóa ',' -> Chuyển dang dạng float rồi cộng
    // Không là nó cộng như cộng string :((((
    sum += parseFloat(Element.balance.replace('$', '').replace(',','')) 
    console.log(Element.balance)
    console.log(sum)
});
console.log("Tính tổng số dư (balance) của tất cả người dùng đang họat động = " + sum)
*/

// 4. Tìm người dùng lớn tuổi nhất users.age 
/*
var agemax = -1;
var use = null; // Khởi tạo với null để nhỡ không tìm thấy người dùng nào
users.forEach(PhanTu => {
    if(PhanTu.age > agemax){
        agemax = PhanTu.age
        use = PhanTu
    }
});
console.log("người dùng lớn tuổi nhất có _id là " + use._id)
*/

// 5. Lọc người dùng theo công ty
/*
// Tìm tất cả các công ty (nhớ có cả TH không có công ty _id = 612e71a6dce2b9a83942a9e1)
const congty = [];
congty.push(null)
var index_congty = 1;
users.forEach(e_u => {
    if(!congty.includes(e_u.company)){
        congty.push(e_u.company)
    }
});
// Hiện ra các _id theo công ty 
congty.forEach(e_c => {
    console.log(e_c) // in ra ten cong ty 
    users.forEach(e_u => {
        if(e_u.company == e_c){
            console.log("   " + e_u._id) // hien ra _id theo tung cong ty 
        }
    });
});
*/
