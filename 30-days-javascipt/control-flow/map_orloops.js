// const valuesoflang = ["js","python"]
// const newfunc= valuesoflang.forEach( (rohit)=>{
//     console.log(rohit);

// })
// console.log(newfunc);


// use of filter 

const nums = [1, 2, 3, 6, 4, 5, 9, 8, 7]

// const newnums= nums.filter((num)=>num>4)// use defined the array of with () and {} this
// console.log(newnums);

// const newnums= nums.filter((num)=>{
//     num >4
// }) // this give a empty array becuase you open a scope {} as well=>

// const newnums= nums.filter((num)=>{
//     return num >4
// })// when in the scope to return value to always use return keyword
// console.log(newnums);

// const result = []

// nums.forEach((num) => {
//     if (num > 4) {
//         result.push(num)
//     }
// })
// console.log(result);

const mydata = [{
 "title": "RTI Surgical, Inc.", "genre": "M", "publish": 1985, "edition": "PITTSFIELD" },
{ "title": "Fossil Group, Inc.", "genre": "M", "publish": 2008, "edition": "MILANO" },
{ "title": "PrivateBancorp, Inc.", "genre": "F", "publish": 1997, "edition": "VILLANUEVA DE LA SERENA" },
{ "title": "KeyCorp", "genre": "F", "publish": 2010, "edition": "RICHMOND" },
{ "title": "VOXX International Corporation", "genre": "M", "publish": 2005, "edition": "Dublin" },
{ "title": "Heartland Express, Inc.", "genre": "F", "publish": 1984, "edition": "Vilniaus m. sav. Vilniaus m." },
{ "title": "Peoples Financial Services Corp. ", "genre": "F", "publish": 1997, "edition": "Mayen" },
{ "title": "Eiger BioPharmaceuticals, Inc.", "genre": "F", "publish": 2001, "edition": "ELMORE CITY" },
{ "title": "Advent/Claymore Enhanced Growth & Income Fund", "genre": "F", "publish": 2001, "edition": "POISSY Cedex" },
{ "title": "Fanhua Inc.", "genre": "F", "publish": 2008, "edition": "WACO" },
{ "title": "Eagle Bancorp Montana, Inc.", "genre": "F", "publish": 2011, "edition": "PARIS" },
{ "title": "Proteon Therapeutics, Inc.", "genre": "M", "publish": 2004, "edition": "COVINGTON" },
{ "title": "Purefunds Solactive FinTech ETF", "genre": "F", "publish": 1996, "edition": "ROMA" },
{ "title": "USA Technologies, Inc.", "genre": "M", "publish": 2004, "edition": "Ponta Delgada" },
{ "title": "PowerShares International Dividend Achievers Portfolio", "genre": "F", "publish": 2008, "edition": "Frankfurt am Main" },
{ "title": "Pengrowth Energy Corporation", "genre": "M", "publish": 2003, "edition": "CINCINNATI" },
{ "title": "Greif Bros. Corporation", "genre": "F", "publish": 2006, "edition": "Frankfurt am Main" },
{ "title": "Avista Healthcare Public Acquisition Corp.", "genre": "F", "publish": 1996, "edition": "Eching, Niederbay." },
{ "title": "Allstate Corporation (The)", "genre": "F", "publish": 1992, "edition": "COLUMBUS" },
{ "title": "K12 Inc", "genre": "F", "publish": 2006, "edition": "KANSAS CITY" },
{ "title": "iPath US Treasury Steepener ETN", "genre": "F", "publish": 2001, "edition": "NAPERVILLE" },
{ "title": "China Recycling Energy Corporation", "genre": "F", "publish": 1994, "edition": "Antwerpen" },
{ "title": "Summit State Bank", "genre": "F", "publish": 2008, "edition": "BEDIAS" },
{"title": "Ankit kumar rajoria", "genre": "M", "publish": 2007, "edition": "updated"}


];



// const userDBdata = mydata.filter( ( bk)=> bk.publish ===2004)

// when you work on db and you get a specail user to use filter to match price or att all 
const userDBdata = mydata.filter( ( bk)=> {
    return bk.publish ===2007 && bk.genre === "M" && bk.title  == "Ankit kumar rajoria"
    // return bk.genre === "M"
})


console.log(userDBdata);


