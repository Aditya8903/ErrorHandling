class User {
    constructor(username,ppassword) {
      this.username = username;
      this.ppassword = ppassword;
    }
  
    get password() {
      return this.ppassword.replace(/./g, "*"); // replace all characters with asterisks
    }
  
    set password(newPassword) {
      // check if the new password is at least 8 characters long and contains at least one number and one uppercase letter
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword; // set the new password if it is valid
      } else {
        console.log("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  const user1 = new User("Aditya", "Password123");
  console.log(user1.password);

  user1.password = "newpass";
  console.log(user1.password); 
  
  user1.password = "NewPassword123";
  console.log(user1.password); 
  