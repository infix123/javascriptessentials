let userRole ="admin";
let accesslevel;

if(userRole === "admin"){
    accesslevel = "Full Access Level granted";
}else if (userRole === "manager"){
    accesslevel = "Limited access granted";
}
else{
    accesslevel = "No access granted";
}

console.log("Access Level:", accesslevel);


let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    }else{
        userMessage = "Welcome, User!"
    }
}else{
        userMessage = "Please log in to access the system";
    }
console.log("user message :", userMessage);


let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
        case "manager":
            userCategory = "Manager";
            break;
            case "subscriber":
                userCategory = "Subscriber";
                break;
                default:
                    userCategory="unknown";


}

console.log("User Category:", userCategory);