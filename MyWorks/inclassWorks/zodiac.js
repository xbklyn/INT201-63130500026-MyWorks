function findZodiac(birthYear){

    
    let zodiac = ['Monkey' , 'Rosster' , 'Dog' , 'Pig' , 'Rat' , 'Ox' , 'Tiger' , 'Rabbit' , 'Dragon' , 'Snake' , 'Horse' , 'Sheep'];
    return zodiac[birthYear % 12];

        // switch(birthYear % 12){
        //     case 0: return 'Monkey'
        //     case 1: return 'Rooster'
        //     case 2: return 'Dog'
        //     case 3: return 'Pig'
        //     case 4: return 'Rat'
        //     case 5: return 'Ox'
        //     case 6: return 'Tiger'
        //     case 7: return 'Rabbit'
        //     case 8: return 'Dragon'
        //     case 9: return 'Snake'
        //     case 10: return 'Horse'
        //     case 11: return 'Sheep'
        // }



        return `Can't find your zodiac.`
}

console.log(findZodiac(1900))